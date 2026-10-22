import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Sparkles, Trophy, CheckCircle, Shield, Brain, Code } from 'lucide-react';
import BlurText from './BlurText';

const certificates = [
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp & Microsoft",
    platform: "Microsoft Developer Division",
    link: "https://drive.google.com/file/d/1Ym36SmFeuZxEWAHvam5b4RUNsm6SD_6C/view?usp=sharing",
    tag: "Microsoft Certified",
    icon: Award,
    highlight: true,
    color: "from-purple-500/20 to-blue-500/10 border-purple-500/30 text-purple-300"
  },
  {
    title: "Dreamvestor 2.0 Grand Finale Finalist",
    issuer: "ASAP Kerala & KSIDC",
    platform: "Kerala Startup Mission & KSIDC",
    link: "https://drive.google.com/file/d/1gNevugKs8sqXrYWabcH1Q25zCNAOuGNW/view?usp=sharing",
    tag: "State Achievement",
    icon: Trophy,
    highlight: true,
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400"
  },
  {
    title: "Security Principles in Cloud Computing",
    issuer: "Google",
    platform: "Coursera",
    link: "https://coursera.org/share/cc51084c7a1bcb2f757f99360b66c2ff",
    tag: "Cloud Security",
    icon: Shield,
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/20 text-blue-400"
  },
  {
    title: "Python for Data Science",
    issuer: "IIT Madras",
    platform: "NPTEL / Swayam",
    link: "https://drive.google.com/file/d/1jIzg4Z9O9N3RtduPMy3Z1F49o-s6fkcr/view?usp=sharing",
    tag: "Premier Institute",
    icon: Code,
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/20 text-emerald-400"
  },
  {
    title: "Viksit Bharat 2047: International Conference",
    issuer: "MACFAST (Dept. of Computer Applications)",
    platform: "Research & Technology Conference",
    link: "https://drive.google.com/file/d/1R3v1vuD5P-Go8GRodKoE6q2E62-S16lc/view?usp=sharing",
    tag: "Conference & Research",
    icon: Trophy,
    color: "from-red-500/20 to-amber-500/10 border-red-500/30 text-red-400"
  },
  {
    title: "Generative AI: Prompt Engineering",
    issuer: "IBM",
    platform: "Coursera",
    link: "https://coursera.org/share/4d1023f4121b7acbe26986b42418c04b",
    tag: "Artificial Intelligence",
    icon: Brain,
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/20 text-purple-400"
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    platform: "Coursera",
    link: "https://coursera.org/share/2c552bbe2aa3f411e579f1e904b9321e",
    tag: "Machine Learning",
    icon: Brain,
    color: "from-purple-500/20 to-blue-500/10 border-purple-500/20 text-purple-400"
  },
  {
    title: "Supervised Machine Learning: Regression",
    issuer: "IBM",
    platform: "Coursera",
    link: "https://coursera.org/share/4d6af204632cdfe942ec6797ca0ef14f",
    tag: "Machine Learning",
    icon: Brain,
    color: "from-indigo-500/20 to-purple-500/10 border-indigo-500/20 text-indigo-400"
  },
  {
    title: "Full Stack Web Development (MERN Stack)",
    issuer: "Industry Specialization",
    platform: "Full-Stack Development",
    link: "https://drive.google.com/file/d/1W9IiM2AN9PWNAqZwyjCBBDERbPuZQ4_a/view?usp=sharing",
    tag: "Web Architecture",
    icon: Code,
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/20 text-cyan-400"
  },
  {
    title: "UNXT Soft Skill Development Program",
    issuer: "SGBS Unnati Foundation",
    platform: "Professional Excellence",
    link: "https://drive.google.com/file/d/1Z3tEW_o44VKPW5gvBmitq1wtXELa8AxJ/view?usp=drive_link",
    tag: "Leadership",
    icon: CheckCircle,
    color: "from-zinc-500/20 to-zinc-500/10 border-white/10 text-zinc-300"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-28 relative overflow-x-clip section-optimize">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[65px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles size={13} />
            <span>Verified Credentials</span>
          </motion.div>

          <BlurText
            text="Certifications & Recognitions"
            tag="h2"
            className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 justify-center"
            animateBy="words"
            delay={70}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-400 text-base sm:text-lg"
          >
            Rigorous programs completed with Google, IBM, IIT Madras, and State Startup Initiatives.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`
                  p-7 sm:p-8 rounded-3xl bg-zinc-950/80 border backdrop-blur-xl relative flex flex-col justify-between group transition-all duration-300
                  ${cert.highlight
                    ? 'border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-zinc-950 to-zinc-950 shadow-xl shadow-amber-500/5 hover:border-amber-400/60'
                    : 'border-white/10 hover:border-white/25'}
                `}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.color} border`}>
                      <Icon size={22} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 border border-white/10 text-zinc-300">
                      {cert.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {cert.title}
                  </h3>

                  <p className="text-zinc-400 text-sm font-medium mb-6">
                    Issued by <span className="text-zinc-200 font-semibold">{cert.issuer}</span> • {cert.platform}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 group/link transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-zinc-500">
                      Course Specialization
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-zinc-600 uppercase">
                    Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
