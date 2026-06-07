import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Linkedin, MapPin, DownloadCloud, Briefcase, Calendar, Award } from 'lucide-react';
import { personalInfo, educationList, skillsList, projectsList, achievementsList } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-8">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]"
          >
            {/* Modal Control Header (Non-printable) */}
            <div className="print:hidden flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-sans font-semibold text-slate-800 dark:text-white">
                  ATS-Optimized Resume Preview
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrint}
                  id="print-btn"
                  className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/50 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print &amp; Save PDF</span>
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Block */}
            <div className="overflow-y-auto flex-1 p-8 sm:p-12 text-slate-800 bg-white" id="resume-printable-area">
              
              {/* PRINT INSTRUCTIONS DISPLAYED IN PREVIEW ONLY */}
              <div className="print:hidden bg-indigo-50 border border-indigo-100 rounded-lg p-3.5 mb-8 text-xs text-indigo-900 text-center">
                💡 <strong>Tip:</strong> Click <strong>"Print &amp; Save PDF"</strong> above, then select <strong>"Save as PDF"</strong> in your browser print dialogue to get a high-quality PDF copy formatted perfectly!
              </div>

              {/* Printable Core Resume Sheet */}
              <div className="max-w-[800px] mx-auto space-y-8 font-sans">
                {/* Resume Header Section */}
                <div className="border-b-2 border-indigo-600 pb-5 text-center">
                  <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-950">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm font-semibold text-indigo-600 mt-1 uppercase tracking-wider">
                    {personalInfo.title} | {personalInfo.subtitle}
                  </p>
                  
                  {/* Connection Metas */}
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-[13px] text-slate-600 font-medium">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 text-slate-400 mr-1 shrink-0" />
                      {personalInfo.location}
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center hover:text-indigo-600 hover:underline"
                    >
                      <Mail className="w-4 h-4 text-slate-400 mr-1 shrink-0" />
                      {personalInfo.email}
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-indigo-600 hover:underline"
                    >
                      <Linkedin className="w-4 h-4 text-slate-400 mr-1 shrink-0" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                {/* Professional Objective */}
                <div>
                  <h2 className="text-base font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                    Professional Objective
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To secure a challenging Software Engineering role or Internship at an innovative tech organization. 
                    Looking to apply deep-rooted principles of computer science, strong logical analysis, and object-oriented 
                    programming skills to support complex development assignments while learning rapidly from top-tier mentors.
                  </p>
                </div>

                {/* Education Section */}
                <div>
                  <h2 className="text-base font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                    Education
                  </h2>
                  <div className="space-y-4">
                    {educationList.map((edu) => (
                      <div key={edu.id} className="flex justify-between items-start text-sm">
                        <div className="space-y-0.5">
                          <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                          <p className="text-slate-700 italic">{edu.institution}</p>
                          <p className="text-xs text-indigo-600 font-semibold">{edu.grade}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-mono text-xs font-medium text-slate-500 flex items-center justify-end">
                            <Calendar className="w-3.5 h-3.5 mr-1" />
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Block */}
                <div>
                  <h2 className="text-base font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                    Technical Core Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1.5 border-b border-dashed border-slate-200 pb-1">
                        Programming Languages
                      </h3>
                      <p className="text-slate-600 text-xs">
                        Java, JavaScript (ES6+), Core Programming.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1.5 border-b border-dashed border-slate-200 pb-1">
                        Web Technologies
                      </h3>
                      <p className="text-slate-600 text-xs">
                        HTML5, CSS3, React.js, Tailwind CSS.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1.5 border-b border-dashed border-slate-200 pb-1">
                        Soft Competencies
                      </h3>
                      <p className="text-slate-600 text-xs">
                        Problem Solving, DSA Fundamentals, Technical Communication, Adaptability, Agile Collaboration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects Accomplished */}
                <div>
                  <h2 className="text-base font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                    Academic Projects
                  </h2>
                  <div className="space-y-4">
                    {projectsList.map((proj) => (
                      <div key={proj.id} className="space-y-1.5">
                        <div className="flex justify-between items-baseline">
                          <h3 className="text-sm font-bold text-slate-900">
                            {proj.title}
                          </h3>
                          <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50/80 px-2 py-0.5 rounded">
                            {proj.techStack.join(', ')}
                          </span>
                        </div>
                        <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1 leading-relaxed">
                          {proj.description.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Accomplishments */}
                <div>
                  <h2 className="text-base font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                    Achievements &amp; Mindset
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs text-slate-600 pl-1">
                    {achievementsList.map((ach) => (
                      <div key={ach.id} className="flex items-start mb-1.5">
                        <Award className="w-4 h-4 text-indigo-500 mr-2 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-slate-900">{ach.title}</p>
                          <p className="text-[11px] leading-normal">{ach.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Self Declaration & Signature */}
                <div className="pt-4 border-t border-slate-100 flex justify-between items-end text-xs text-slate-500">
                  <div>
                    <p><strong>Location:</strong> Lucknow, India</p>
                    <p><strong>Website:</strong> Digital Online Portfolio</p>
                  </div>
                  <div className="text-right">
                    <p className="italic text-slate-600">Pratibha Singh</p>
                    <p className="font-mono text-[10px]">Verifiably Signed</p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Modal Footer (Non-printable) */}
            <div className="print:hidden flex justify-end items-center px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 mr-auto">
                Ready for top tech applications (Google, Microsoft, Amazon)
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white rounded-lg transition-colors border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
