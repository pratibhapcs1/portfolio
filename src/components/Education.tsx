import { motion } from 'motion/react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, Landmark } from 'lucide-react';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/20 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="font-mono text-[10px] tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            Journey
          </span>
          <h2 className="font-sans text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 md:ml-24 max-w-3xl md:mx-auto pl-6 sm:pl-8 space-y-12 py-4">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Left timeline glowing badge connector */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 shadow-sm group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Box Info Container */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none hover:border-indigo-500/20 dark:hover:border-indigo-500/30 transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                  <div className="flex items-center space-x-2">
                    <Landmark className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {edu.institution}
                    </span>
                  </div>
                  <span className="inline-flex items-center space-x-1.5 font-mono text-[11px] font-bold text-slate-500 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-100 dark:border-slate-900 shrink-0 w-fit">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                {/* Major/Grade */}
                <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-slate-950 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {edu.degree}
                </h3>

                {/* Performance score */}
                {edu.grade && (
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-teal-50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/30 mb-3.5 text-xs text-teal-700 dark:text-teal-400 font-semibold uppercase tracking-wide">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.grade}</span>
                  </div>
                )}

                {/* Description lines */}
                {edu.description && (
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
