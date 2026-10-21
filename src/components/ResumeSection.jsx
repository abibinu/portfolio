import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, CheckCircle2, Sparkles, Shield, User, Briefcase, GraduationCap } from 'lucide-react';
import BlurText from './BlurText';

const ResumeSection = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}assets/Abi_Binu_SoftwareDeveloper.pdf`;

  return (
    <section className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden section-optimize">
      {/* Decorative gradient bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-zinc-950/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Description & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Curriculum Vitae</span>
              </div>

              <BlurText
                text="Get a Copy of My Updated Resume"
                tag="h2"
                className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight justify-center lg:justify-start"
                animateBy="words"
                delay={60}
              />

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Looking for a dedicated Software Developer for your engineering team or high-impact project? Download my full CV featuring comprehensive technical skillsets, project breakdowns, Clean Architecture benchmarks, and education history.
              </p>

              {/* Highlights bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                {[
                  "ATS-Optimized Format",
                  "Verified Certifications (Microsoft, Google, IIT)",
                  "Clean Architecture & C# (.NET)",
                  "API Gateways & Enterprise Systems",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <motion.a
                  href={resumeUrl}
                  download="Abi_Binu_SoftwareDeveloper.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-500/25 transition-all duration-300"
                >
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Resume (PDF)</span>
                </motion.a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm sm:text-base text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span>View in New Tab</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="text-[11px] font-mono text-zinc-500">
                Format: PDF • File size: ~285 KB • Last updated: 2026
              </p>
            </div>

            {/* Right Column: Interactive Resume Visual Preview Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ y: -6, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-sm rounded-3xl bg-zinc-900/90 border border-white/15 p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl group"
              >
                {/* Header of Resume Preview */}
                <div className="pb-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm">
                      AB
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">ABI BINU</p>
                      <p className="text-zinc-400 text-[11px] font-mono">Software Developer</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                    ACTIVE
                  </span>
                </div>

                {/* Body Snapshot */}
                <div className="py-4 space-y-3.5 text-xs text-zinc-300">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-400 font-bold block mb-1">
                      Target Role
                    </span>
                    <p className="text-zinc-200 font-medium">Software Developer / Backend Engineer</p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-purple-400 font-bold block mb-1">
                      Key Proficiencies
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {["C#", ".NET 10", "YARP", "ASP.NET Core", "React", "Python", "PostgreSQL", "Clean Arch"].map(t => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 font-bold block mb-1">
                      Education & Honors
                    </span>
                    <p className="text-[11px] text-zinc-400 font-mono">
                      MCA (2025–2027) • MACFAST<br />
                      Dreamvestor 2.0 Finale Finalist (KSIDC)
                    </p>
                  </div>
                </div>

                {/* Card Footer Status */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-500">
                    Abi_Binu_SoftwareDeveloper.pdf
                  </span>
                  <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Verified PDF
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
