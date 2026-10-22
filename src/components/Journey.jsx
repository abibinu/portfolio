import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import BlurText from './BlurText';

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MACFAST, Tiruvalla",
    university: "Mahatma Gandhi University",
    duration: "2025 – 2027",
    status: "Candidate / In Progress",
    description: "Advanced computing, distributed database systems, software engineering methodologies, and scalable application architectures."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SAS, Konni",
    university: "Mahatma Gandhi University",
    duration: "2022 – 2025",
    status: "Graduated",
    description: "Foundational computer science principles, object-oriented programming (C#, Java, C++), algorithms, data structures, and web technologies."
  }
];

const experienceData = [
  {
    role: "Django Web Development Trainee",
    organization: "Faith InfoTech, Technopark, Thiruvananthapuram",
    duration: "1-Week Industrial Training",
    highlights: [
      "Developed a complete Clinic Management System in Django from requirements to working deployment.",
      "Applied Django's Model-View-Template (MVT) architecture, ORM models, and database integration.",
      "Engineered automated workflows and role-based permissions to streamline healthcare clinic administration."
    ],
    tech: ["Django", "Python", "SQLite/PostgreSQL", "HTML/CSS"]
  },
  {
    role: "Dreamvestor 2.0 Grand Finale Finalist",
    organization: "ASAP Kerala & KSIDC",
    duration: "State-Level Innovation Finalist",
    highlights: [
      "Recognized as a Grand Finale Finalist in Kerala's premier startup and innovation challenge.",
      "Showcased technical solution viability, market architecture, and software product design.",
      "Evaluated by industry leaders and state entrepreneurship authorities."
    ],
    tech: ["System Design", "Pitch", "Product Innovation"]
  }
];

const Journey = () => {
  return (
    <section id="journey" className="py-28 relative overflow-x-clip section-optimize">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 right-10 w-72 sm:w-80 h-72 sm:h-80 bg-purple-600/20 rounded-full blur-[65px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles size={13} />
            <span>Academic & Career Milestones</span>
          </motion.div>

          <BlurText
            text="Education & Industry Journey"
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
            A strong computer applications foundation matched with practical industrial training and state recognition.
          </motion.p>
        </div>

        {/* 2-Column Layout: Education & Experience */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="text-xs text-zinc-400 font-mono">Mahatma Gandhi University</p>
              </div>
            </div>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="p-7 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-blue-500/40 backdrop-blur-xl relative group transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      {item.duration}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                      <MapPin size={12} className="text-blue-400" />
                      {item.institution}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h4>
                  <p className="text-sm font-semibold text-purple-400 mb-3">
                    {item.university}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>Status: {item.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience & Industrial Training */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Experience & Training</h3>
                <p className="text-xs text-zinc-400 font-mono">Industry Engagements</p>
              </div>
            </div>

            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="p-7 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl relative group transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      {item.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {item.role}
                  </h4>
                  <p className="text-sm font-semibold text-zinc-400 mb-4">
                    {item.organization}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;
