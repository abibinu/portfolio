import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles, Terminal, ShieldCheck, Database, Award } from 'lucide-react';
import DarkVeil from './DarkVeil';
import BlurText from './BlurText';

const Hero = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}assets/Abi_Binu_SoftwareDeveloper.pdf`;
  const profileImg = `${import.meta.env.BASE_URL}assets/profile.png`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background DarkVeil Shader */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <DarkVeil
          hueShift={0}
          resolutionScale={0.75}
          speed={0.7}
        />
      </div>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none z-1" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none z-1" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Main Name & Title with BlurText */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <h2 className="text-xs sm:text-sm uppercase tracking-[0.35em] font-mono text-zinc-400 font-semibold">
                  Hello, I am
                </h2>
                <div className="h-px w-12 bg-gradient-to-r from-blue-500/50 to-transparent" />
              </div>
              
              <BlurText
                text="ABI BINU"
                tag="h1"
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] justify-center lg:justify-start"
                animateBy="letters"
                delay={50}
              />

              {/* Ultra-Aesthetic Software Developer Centerpiece */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                <div className="relative group cursor-default">
                  {/* Glowing aura */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-2xl blur-md opacity-50 group-hover:opacity-85 transition duration-500" />
                  
                  {/* Badge Container */}
                  <div className="relative px-5 py-2.5 bg-zinc-950/90 rounded-2xl border border-blue-500/40 backdrop-blur-xl flex items-center gap-3 shadow-2xl">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Terminal size={16} />
                    </span>
                    <span className="text-base sm:text-lg font-black tracking-wider uppercase bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                      Software Developer
                    </span>
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-indigo-400/80" />
                    <span className="hidden sm:inline-block text-xs font-mono text-zinc-400 tracking-wide">
                      Clean Architecture
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md">
                  <Sparkles size={13} className="text-amber-400" />
                  <span>Enterprise & FinTech Systems</span>
                </div>
              </motion.div>
            </div>

            {/* Dynamic Role Tagline with BlurText */}
            <BlurText
              text="Architecting Enterprise Backends & Intelligent Systems."
              tag="p"
              className="text-lg sm:text-xl font-medium text-zinc-300 tracking-tight justify-center lg:justify-start"
              animateBy="words"
              delay={70}
            />

            {/* Resume Summary Text */}
            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Software Developer & MCA candidate skilled in <span className="text-zinc-200 font-medium">C#, ASP.NET Core, YARP, React, Python</span>, and <span className="text-zinc-200 font-medium">PostgreSQL</span>. Building production-ready software grounded in Clean Architecture—from high-throughput API gateways and secure microservices to real-time automated data processing systems.
            </p>

            {/* Primary Action Buttons including Resume Download */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
              {/* Download Resume (Primary Emphasis) */}
              <motion.a
                href={resumeUrl}
                download="Abi_Binu_SoftwareDeveloper.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 font-mono uppercase">PDF</span>
              </motion.a>

              {/* View Projects */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </motion.a>

              {/* Contact Me */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <span>Let's Talk</span>
              </motion.a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-zinc-400 text-sm">
              <span className="font-mono text-xs uppercase text-zinc-500">Connect:</span>
              <a
                href="https://github.com/abibinu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Github size={16} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/abi-binu-821560340/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin size={16} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:abibinuofficial@gmail.com"
                className="hover:text-purple-400 flex items-center gap-1.5 transition-colors"
              >
                <Mail size={16} />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture & Holographic Badge Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square max-w-full">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl animate-pulse-ring" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500/40 via-purple-500/30 to-cyan-500/40 opacity-70 blur-md" />

              {/* Main Profile Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 bg-zinc-950/80 shadow-2xl backdrop-blur-xl group">
                <img
                  src={profileImg}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = './assets/profile.png';
                  }}
                  alt="Abi Binu - Software Developer"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 sm:-right-6 px-3.5 py-2 rounded-2xl bg-zinc-900/90 border border-blue-500/30 backdrop-blur-xl shadow-xl flex items-center gap-2"
              >
                <ShieldCheck size={18} className="text-blue-400" />
                <span className="text-xs font-bold text-white tracking-wide">Clean Architecture</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-3 sm:-left-6 px-3.5 py-2 rounded-2xl bg-zinc-900/90 border border-purple-500/30 backdrop-blur-xl shadow-xl flex items-center gap-2"
              >
                <Database size={18} className="text-purple-400" />
                <span className="text-xs font-bold text-white tracking-wide">ASP.NET • PostgreSQL</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { label: "Credentials", val: "10+ Certifications", sub: "IBM, Google & IIT Madras" },
            { label: "Core Stack", val: "C# • Python • React", sub: "ASP.NET Core & Django" },
            { label: "Architecture", val: "Clean Code & REST", sub: "Enterprise & Scalable DBs" },
            { label: "Achievement", val: "Grand Finalist", sub: "Dreamvestor 2.0 (KSIDC)" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all group">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1 group-hover:text-blue-400 transition-colors">
                {stat.label}
              </span>
              <p className="text-base sm:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                {stat.val}
              </p>
              <p className="text-xs text-zinc-400 truncate mt-0.5">
                {stat.sub}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
