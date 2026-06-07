import { motion } from 'motion/react';
import { achievementsList } from '../data/portfolioData';
import { BrainCircuit, BookOpen, Terminal, Sparkles, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  BrainCircuit: BrainCircuit,
  BookOpen: BookOpen,
  Terminal: Terminal,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/20 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="font-mono text-[10px] tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            Milestones
          </span>
          <h2 className="font-sans text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Key Achievements
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Dynamic Cards Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((ach, idx) => {
            const IconComponent = iconMap[ach.badge] || Award;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-slate-50/75 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-900/60 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 p-8 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Background Accent Circle */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100/10 dark:bg-indigo-950/20 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors duration-300" />

                {/* Badge Icon Block */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 group-hover:from-indigo-600 group-hover:to-purple-600 border border-indigo-100 dark:border-indigo-900/20 text-indigo-600 dark:text-indigo-400 group-hover:text-white shadow-sm transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Award Details Text */}
                <div className="space-y-2">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-slate-950 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {ach.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
