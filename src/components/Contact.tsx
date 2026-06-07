import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, MapPin, Send, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormStatus('submitting');
    // Simulate API webhook dispatch
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleReset = () => {
    setFormStatus('idle');
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/20 text-slate-800 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="font-mono text-[10px] tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
            Inquiries
          </span>
          <h2 className="font-sans text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Panel: Instant Connection Anchors */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-sans text-xl sm:text-2xl font-black text-slate-950 dark:text-white tracking-tight">
                Let's discuss academic collaborations, tech initiatives, or roles.
              </h3>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                I am actively looking for software engineering internship opportunities. Direct inquiries, technical conversations, and portfolio feedback are always appreciated.
              </p>
            </div>

            {/* Anchors Cards stack */}
            <div className="space-y-4">
              {/* Mail card anchor */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4.5 bg-slate-50 hover:bg-indigo-50/50 dark:bg-slate-950 dark:hover:bg-indigo-950/20 border border-slate-200/40 dark:border-slate-900 rounded-2xl group transition-all duration-300"
              >
                <div className="flex items-center justify-center w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-850 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:scale-105 transition-transform duration-200 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs truncate">
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Email Inquiry</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 truncate block sm:inline">{personalInfo.email}</span>
                </div>
              </a>

              {/* LinkedIn card anchor */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4.5 bg-slate-50 hover:bg-indigo-50/50 dark:bg-slate-950 dark:hover:bg-indigo-950/20 border border-slate-200/40 dark:border-slate-900 rounded-2xl group transition-all duration-300"
              >
                <div className="flex items-center justify-center w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-850 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:scale-105 transition-transform duration-200 shadow-xs">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Professional Network</span>
                  <span className="font-bold text-slate-00 dark:text-slate-200 hover:underline">/in/pratibha-singh-18b7b628b</span>
                </div>
              </a>

              {/* Map location coordinate block */}
              <div
                className="flex items-center space-x-4 p-4.5 bg-slate-50 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-900 rounded-2xl"
              >
                <div className="flex items-center justify-center w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-850 text-indigo-600 dark:text-indigo-400 rounded-xl shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">Placement Location</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Functional Form with status management */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-900 p-6 sm:p-8 rounded-3xl shadow-sm dark:shadow-none flex flex-col justify-center">
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-12"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-sans text-xl font-bold text-slate-950 dark:text-white">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="font-sans text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, Pratibha will receive your message in her simulated console mailbox and respond shortly.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center space-x-1.5 px-4.5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-850 dark:hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  <span>Send another message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullname_form_id" className="font-sans font-semibold text-xs text-slate-500 dark:text-slate-400">
                      Full Name
                    </label>
                    <input
                      id="fullname_form_id"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4.5 py-3 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email_form_id" className="font-sans font-semibold text-xs text-slate-500 dark:text-slate-400">
                      Email Address
                    </label>
                    <input
                      id="email_form_id"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4.5 py-3 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject_form_id" className="font-sans font-semibold text-xs text-slate-500 dark:text-slate-400">
                    Subject
                  </label>
                  <input
                    id="subject_form_id"
                    type="text"
                    required
                    placeholder="Inquiry Topic"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4.5 py-3 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5 flex flex-col">
                  <label htmlFor="message_form_id" className="font-sans font-semibold text-xs text-slate-500 dark:text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message_form_id"
                    rows={4}
                    required
                    placeholder="Write details about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4.5 py-3 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {/* submit trigger */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={formStatus === 'submitting'}
                  className="w-full h-11 flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 active:scale-98 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-600/10 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>{formStatus === 'submitting' ? 'Transmitting Inbound...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
