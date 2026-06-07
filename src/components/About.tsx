import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, Code2 } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1500; // ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Check if coordinate is floating value (like CGPA)
      if (value % 1 === 0) {
        setCount(Math.floor(progress * value));
      } else {
        setCount(parseFloat((progress * value).toFixed(1)));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value, isInView]);

  return (
    <span ref={ref} className="font-sans font-extrabold text-3xl sm:text-4xl text-indigo-600 dark:text-indigo-400 tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/20 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Title with custom accent */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="font-mono text-[10px] tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            Biographical
          </span>
          <h2 className="font-sans text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Narrative text & Bio cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              An aspiring Software Engineer building technologies for tomorrow.
            </h3>
            
            <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400">
              I am currently pursuing a <strong>Bachelor of Technology in Computer Science Engineering</strong> from <strong>Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM)</strong>, Lucknow.
            </p>
            
            <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400">
              I have a strong interest in software development, programming, and web technologies. I enjoy solving algorithmic problems, learning new programming languages, and working on hands-on applications that help me gain deep practical experience.
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400">
              My technical objective is to grow into a skilled Software Engineer and contribute core solutions to innovative, high-impact technology projects. I represent energy, self-discipline, and quick adaptability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/20">
                <GraduationCap className="w-5 h-5 text-indigo-500" />
                <div className="text-xs">
                  <p className="font-bold text-slate-900 dark:text-white">University Affiliated</p>
                  <p className="text-slate-400 dark:text-slate-500">SRMCEM Lucknow</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/20">
                <Code2 className="w-5 h-5 text-purple-500" />
                <div className="text-xs">
                  <p className="font-bold text-slate-900 dark:text-white">Focus Track</p>
                  <p className="text-slate-400 dark:text-slate-500">Full-Stack &amp; DSA Core</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Stats Dashboard card */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-indigo-50/50 to-purple-50/30 dark:from-indigo-950/15 dark:to-purple-950/5 border border-indigo-100/40 dark:border-indigo-900/10 p-8 rounded-3xl shadow-sm dark:shadow-none space-y-8">
            <h4 className="font-sans font-bold text-slate-900 dark:text-white text-base tracking-tight border-b border-indigo-100/40 dark:border-indigo-900/20 pb-4">
              Key Academic &amp; Tech Metrics
            </h4>

            {/* Bento Tickers */}
            <div className="grid grid-cols-2 gap-6">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="font-sans text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Connection coordinates anchor */}
            <div className="pt-4 border-t border-indigo-100/40 dark:border-indigo-900/20 text-xs space-y-2.5 text-slate-400 dark:text-slate-500">
              <p className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-2 text-slate-400 shrink-0" />
                <span>Affiliation base: Lucknow, UP, India</span>
              </p>
              <p className="flex items-center">
                <Award className="w-3.5 h-3.5 mr-2 text-slate-400 shrink-0" />
                <span>B.Tech CSE Term: 2023 - 2027</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
