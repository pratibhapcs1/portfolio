import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Briefcase, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenResume: () => void;
}

export default function Navbar({ darkMode, setDarkMode, onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Interests', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link calculation
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const offset = 80; // Navbar distance buffer
      const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar-root"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <nav id="navbar-container" className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Text */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center space-x-2"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-sans font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            PS
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-tight text-slate-900 dark:text-white leading-none text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Pratibha Singh
            </span>
            <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 tracking-wider">
              Future SWE
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div id="navbar-desktop-menu" className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeSection === link.href.substring(1)
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Widgets */}
        <div id="navbar-actions" className="hidden lg:flex items-center space-x-4">
          {/* Light/Dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/40 cursor-pointer"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme color"
            id="theme-toggler-btn"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Resume interactive viewer trigger with styled pulse */}
          <button
            onClick={onOpenResume}
            id="navbar-resume-btn"
            className="relative flex items-center space-x-1.5 px-3.5 py-2 overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 active:scale-95 text-white text-xs font-semibold rounded-xl shadow-md shadow-indigo-600/10 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Interactive Resume</span>
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-emerald-400 ping shrink-0 inline-block animate-ping" />
          </button>
        </div>

        {/* Mobile controls */}
        <div id="navbar-mobile-controls" className="flex items-center space-x-3 lg:hidden">
          {/* Light/dark toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
            aria-label="Toggle theme mobile"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Burger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
            aria-label="Toggle mobile menu drawer"
          >
            {isOpen ? <X className="w-5 h-5 text-slate-950 dark:text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Glassmorphism layout) */}
      {isOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 top-[60px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-30 flex flex-col py-6 px-6 lg:hidden border-t border-slate-100 dark:border-slate-900 h-screen overflow-y-auto"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center w-full px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/55 dark:bg-indigo-950/45'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-55 dark:hover:bg-slate-900/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200/50 dark:border-slate-800/40 flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 px-5 py-3 h-11 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-600/10 cursor-pointer hover:opacity-90"
            >
              <FileText className="w-4 h-4" />
              <span>Preview &amp; Save Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
