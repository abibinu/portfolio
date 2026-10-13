import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Globe, Layers, Cpu, Award, CheckCircle2, Clock, MapPin, Sparkles, Languages } from 'lucide-react';
import BlurText from './BlurText';

const About = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}assets/Abi_Binu_SoftwareDeveloper.pdf`;

  // Live Kerala (IST) time
  const [istTime, setIstTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black/60 section-optimize">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles size={13} />
            <span>Profile Overview</span>
          </motion.div>
          
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-400">
              Software Developer with a focus on
            </h3>
            <BlurText
              text="Clean Architecture & High Reliability"
              tag="h2"
              className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight justify-center md:justify-start"
              animateBy="words"
              delay={70}
            />
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Card 1: Professional Summary (Large Highlight) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-3 p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Layers size={22} />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                Professional Summary
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
              Building production-ready software with strict design patterns & scalable data pipelines.
            </h3>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Software Developer and Master of Computer Applications (MCA) candidate, Dreamvestor 2.0 Grand Finale finalist, with IBM, Google and IIT Madras certifications. Skilled in <span className="text-white font-medium">C#, ASP.NET Core, React, Django, Python and PostgreSQL</span>, with hands-on experience in backend architecture, secure REST APIs, and full-stack application development.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {['Clean Architecture', 'REST APIs', 'ASP.NET Core', 'Python & Django', 'PostgreSQL', 'High-Frequency Automation'].map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-zinc-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Download Resume Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 lg:col-span-1 p-8 rounded-3xl bg-gradient-to-b from-blue-900/30 via-zinc-950 to-zinc-950 border border-blue-500/30 backdrop-blur-xl relative flex flex-col justify-between group hover:border-blue-400/50 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-blue-400">
                  <FileText size={24} />
                </div>
                <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                  PDF Available
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Official Resume</h4>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Download verified resume with complete academic records, enterprise projects, technical skills & certifications.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={resumeUrl}
                download="Abi_Binu_SoftwareDeveloper.pdf"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all duration-300 active:scale-95"
              >
                <Download size={15} />
                Download CV (PDF)
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span>Preview Online</span>
              </a>
            </div>
          </motion.div>

          {/* Card 3: Enterprise Architecture & Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-1 lg:col-span-2 p-8 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl relative group hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Cpu size={20} />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                Engineering Standard
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Clean Architecture & Modularity</h4>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Enforcing strong separation between Domain models, Application use cases, and Infrastructure. Ensures every endpoint, database query, and business rule is testable and maintainable for long-term production operations.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5 text-purple-400">
                <CheckCircle2 size={14} />
                <span>Domain Driven</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-400">
                <CheckCircle2 size={14} />
                <span>Strict API Contracts</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Languages Spoken */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 lg:col-span-1 p-8 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl relative group hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Languages size={20} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                  Languages
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Communication</h4>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center justify-between text-zinc-300">
                  <span>Malayalam</span>
                  <span className="text-xs font-mono text-zinc-500">Native</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span>English</span>
                  <span className="text-xs font-mono text-cyan-400">Professional</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span>Hindi</span>
                  <span className="text-xs font-mono text-zinc-500">Working</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 mt-4 border-t border-white/5 pt-3">
              Clear technical communicator across multi-cultural teams.
            </p>
          </motion.div>

          {/* Card 5: Location & Remote Collaboration with Live Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="md:col-span-1 lg:col-span-1 p-8 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl relative group hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MapPin size={20} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                  Location & Time
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Kerala, India</h4>
              <p className="text-xs text-zinc-400 mb-4">Available for remote & hybrid opportunities</p>
              
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <Clock size={14} className="text-emerald-400" />
                  <span className="font-mono">IST (UTC+5:30)</span>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-400">
                  {istTime || 'Loading...'}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Flexible overlap with US / EU / APAC</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
