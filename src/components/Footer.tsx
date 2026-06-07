import { personalInfo } from '../data/portfolioData';
import { Heart, Laptop, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026; // Match requirement timestamp

  return (
    <footer
      id="footer-root"
      className="py-12 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/40 text-slate-500 dark:text-slate-400 text-center transition-colors print:hidden"
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Decorative design attribution */}
        <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-400 dark:text-slate-500">
          <Code className="w-3.5 h-3.5 text-indigo-500" />
          <span>Designed with passion and dedication.</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
        </div>

        {/* Core copyright text block */}
        <p className="font-sans text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
          &copy; {currentYear} {personalInfo.name} | {personalInfo.title}
        </p>

        {/* Small tech summary nodes */}
        <div className="flex justify-center flex-wrap gap-2 text-[10px] text-slate-400 font-mono tracking-wide">
          <span>React 19</span>
          <span>•</span>
          <span>Tailwind v4</span>
          <span>•</span>
          <span>Vite SPA</span>
        </div>
      </div>
    </footer>
  );
}
