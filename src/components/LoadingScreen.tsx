import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-white"
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Terminal Hexagon Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.1, 1], opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20 mb-6"
        >
          <Terminal className="w-8 h-8 text-white" />
          <span className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-35 blur animate-pulse" />
        </motion.div>

        {/* Dynamic Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans text-xl font-bold tracking-tight text-white mb-2"
        >
          PRATIBHA SINGH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-mono text-xs text-slate-400 tracking-wider uppercase mb-8"
        >
          Initializing Portfolio . . .
        </motion.p>

        {/* Loading Progress Bar */}
        <div className="w-48 h-[3px] bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  );
}
