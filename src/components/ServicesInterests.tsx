import { motion } from 'motion/react';
import { servicesInterestsList } from '../data/portfolioData';
import { Laptop, Globe, FileText, Activity, Compass } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Laptop: Laptop,
  Globe: Globe,
  FileText: FileText,
  Activity: Activity,
  Compass: Compass,
};

export default function ServicesInterests() {
  return (
    <section
      id="interests"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/20 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="font-mono text-[10px] tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            Specialization
          </span>
          <h2 className="font-sans text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Services &amp; Interests
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Bento/Grid Layout for Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {servicesInterestsList.map((interest, idx) => {
            const Icon = iconMap[interest.iconName] || Computer;
            return (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300"
              >
                {/* Icon wrapper */}
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-905/10 mb-4 group-hover:scale-105 transition-transform duration-205">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Info and blurb */}
                <h3 className="font-sans font-bold text-slate-950 dark:text-white text-sm tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {interest.title}
                </h3>
                <p className="font-sans text-[11px] leading-relaxed text-slate-400 dark:text-slate-500 mt-auto">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Fallback just in case
const Computer = ({ className }: { className?: string }) => <Laptop className={className} />;
