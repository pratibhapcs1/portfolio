import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, DownloadCloud, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing Effect Loop
  useEffect(() => {
    const handleTyping = () => {
      const fullText = personalInfo.typingTexts[currentIndex];
      
      if (!isDeleting) {
        setTypedText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(100); // normal speed typing

        if (charIndex + 1 === fullText.length) {
          setTypingSpeed(2000); // pause on full sentence
          setIsDeleting(true);
        }
      } else {
        setTypedText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(55); // faster speed deleting

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % personalInfo.typingTexts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex, typingSpeed]);

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const top = contactSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors"
    >
      {/* Decorative Radial Backdrop Ambient Glows (Non-printable) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-900/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-purple-400/15 dark:bg-purple-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Large Circular Profile Photo Frame with Professional Pulse Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          {/* Subtle Rotating Floating Outer Aura */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-400 opacity-80 blur-md animate-pulse shrink-0" />
          
          {/* Main Floating Circle Container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl shadow-slate-950/20 flex items-center justify-center bg-indigo-50 dark:bg-slate-900"
          >
            <img
              src={personalInfo.bioUrl}
              alt={personalInfo.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Absolute floating sparkles badge representing CSE capability */}
          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-full shadow-lg text-indigo-600 dark:text-indigo-400 animate-bounce">
            <Sparkles className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Text Area block */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100/60 dark:border-indigo-800/20 rounded-full"
          >
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
            <span className="font-mono text-[10px] tracking-widest text-indigo-700 dark:text-indigo-300 font-semibold uppercase">
              Actively Seeking Internships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white"
          >
            {personalInfo.name.toUpperCase()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300 max-w-lg mx-auto"
          >
            {personalInfo.title} <span className="text-indigo-600 dark:text-indigo-400">|</span> {personalInfo.subtitle}
          </motion.p>

          {/* Typing Animation Showcase */}
          <div className="h-8 flex items-center justify-center select-none">
            <p className="font-mono text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider">
              &lt; {typedText}
              <span className="w-1.5 h-4 bg-indigo-600 dark:bg-indigo-400 inline-block align-middle ml-1 animate-pulse" />
              &nbsp;/&gt;
            </p>
          </div>
        </div>

        {/* Biography Blurb */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-sans text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
        >
          I am a Computer Science Engineering student passionate about software development, web technologies, and problem-solving. I enjoy learning new technologies and building clean, modular solutions that create real-world impact.
        </motion.p>

        {/* Dual Actions Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          {/* Download/View Resume CTA */}
          <button
            onClick={onOpenResume}
            id="hero-download-resume-btn"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 text-white font-sans font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/10 cursor-pointer active:scale-95 transition-all"
          >
            <DownloadCloud className="w-4 h-4" />
            <span>Download &amp; Print Resume</span>
          </button>

          {/* Contact Me anchor */}
          <button
            onClick={handleScrollToContact}
            id="hero-contact-btn"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 font-sans font-bold text-xs rounded-xl text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
          >
            <Mail className="w-4 h-4 text-indigo-500" />
            <span>Contact Me</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Slide Down Pointer Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-slate-400 hover:text-indigo-500 transition-colors cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById('about');
            if (nextSec) {
              const rect = nextSec.getBoundingClientRect();
              window.scrollTo({ top: rect.top + window.scrollY - 80, behavior: 'smooth' });
            }
          }}
        >
          <span className="font-mono text-[9px] uppercase tracking-widest mb-1.5 opacity-60">
            Scroll Discover
          </span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
