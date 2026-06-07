import { useState } from 'react';
import { motion } from 'motion/react';
import { skillsList } from '../data/portfolioData';
import {
  Code,
  Coffee,
  FileCode,
  Palette,
  Cpu,
  Wind,
  MessageSquare,
  Brain,
  Users,
  Shuffle,
  Terminal,
  Layers,
  Heart
} from 'lucide-react';

// Dynamic Icon Map for typesafe safety
const iconMap: { [key: string]: any } = {
  Code: Code,
  Coffee: Coffee,
  FileCode: FileCode,
  Palette: Palette,
  Cpu: Cpu,
  Wind: Wind,
  MessageSquare: MessageSquare,
  Brain: Brain,
  Users: Users,
  Shuffle: Shuffle,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'programming' | 'webDev' | 'softSkills'>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Terminal },
    { id: 'programming', label: 'Languages', icon: Coffee },
    { id: 'webDev', label: 'Web Tech', icon: Cpu },
    { id: 'softSkills', label: 'Soft Skills', icon: Heart },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/20 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="font-mono text-[10px] tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            Expertise
          </span>
          <h2 className="font-sans text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Skills &amp; Competencies
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Category Navigation Controls */}
        <div className="flex flex-wrap justify-center gap-2 max-w-sm sm:max-w-xl mx-auto pb-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-950 text-white dark:bg-indigo-600 dark:text-white border-slate-950 dark:border-indigo-600 shadow-md shadow-indigo-500/10'
                    : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Layout Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-900/60 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 p-6 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300"
              >
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-sans font-bold text-slate-950 dark:text-white text-sm">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar line */}
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
