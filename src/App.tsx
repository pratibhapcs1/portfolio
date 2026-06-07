import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ServicesInterests from './components/ServicesInterests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  // Theme state: Persist in local storage, check prefers-color-scheme
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Observe and trigger theme class updates
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Handle visibility of BackToTop floating widget
  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen font-sans bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Loading Splash Transition Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Main Content (Visible instantly or faded-in after load completed) */}
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {/* Header Navigation Unit */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section blocks */}
        <main id="main-content-flow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <ServicesInterests />
          <Contact />
        </main>

        {/* Closing Segment Footer */}
        <Footer />

        {/* Floating Back To Top Button Control */}
        {showBackToTop && (
          <button
            onClick={handleScrollToTop}
            id="back-to-top-btn"
            className="fixed bottom-6 right-6 z-30 p-3 h-11 w-11 flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white rounded-full shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 border border-indigo-500/10 cursor-pointer transition-all"
            aria-label="Scroll back to top of the webpage"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Dynamic PDF-print integrated Doc modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </div>
  );
}
