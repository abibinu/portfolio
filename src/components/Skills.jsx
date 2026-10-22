import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Cpu,
  Layers,
  Workflow,
  Route,
  Activity,
  Network
} from 'lucide-react';
import {
  SiDotnet,
  SiPython,
  SiReact,
  SiPostgresql,
  SiDjango,
  SiDocker,
  SiMongodb,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiRedis,
  SiSqlite,
  SiDart
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa';
import BlurText from './BlurText';

// Stream 1: Forward flow
const outsideTrack1 = [
  { name: "C#", icon: TbBrandCSharp, color: "#a855f7", bg: "rgba(168,85,247,0.12)", tag: "Language" },
  { name: "ASP.NET Core", icon: SiDotnet, color: "#818cf8", bg: "rgba(129,140,248,0.12)", tag: "Backend" },
  { name: "YARP (Proxy)", icon: Route, color: "#38bdf8", bg: "rgba(56,189,248,0.12)", tag: "Networking" },
  { name: "React.js", icon: SiReact, color: "#38bdf8", bg: "rgba(56,189,248,0.12)", tag: "Frontend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#60a5fa", bg: "rgba(96,165,250,0.12)", tag: "Database" },
  { name: "Django", icon: SiDjango, color: "#34d399", bg: "rgba(52,211,153,0.12)", tag: "Framework" },
  { name: "Docker", icon: SiDocker, color: "#38bdf8", bg: "rgba(56,189,248,0.12)", tag: "DevOps" },
  { name: "AWS", icon: FaAws, color: "#fb923c", bg: "rgba(251,146,60,0.12)", tag: "Cloud" },
  { name: "Clean Architecture", icon: ShieldCheck, color: "#c084fc", bg: "rgba(192,132,252,0.12)", tag: "Design" },
  { name: "Microservices", icon: Network, color: "#a78bfa", bg: "rgba(167,139,250,0.12)", tag: "Architecture" },
];

// Stream 2: Backward flow
const outsideTrack2 = [
  { name: "Python", icon: SiPython, color: "#facc15", bg: "rgba(250,204,21,0.12)", tag: "AI / Trading" },
  { name: "Flutter", icon: SiFlutter, color: "#22d3ee", bg: "rgba(34,211,238,0.12)", tag: "Mobile" },
  { name: "Node.js", icon: SiNodedotjs, color: "#4ade80", bg: "rgba(74,222,128,0.12)", tag: "Runtime" },
  { name: "SQL Server / SQLite", icon: SiSqlite, color: "#60a5fa", bg: "rgba(96,165,250,0.12)", tag: "Database" },
  { name: "MongoDB", icon: SiMongodb, color: "#4ade80", bg: "rgba(74,222,128,0.12)", tag: "NoSQL" },
  { name: "Git & GitHub", icon: SiGit, color: "#f87171", bg: "rgba(248,113,113,0.12)", tag: "VCS" },
  { name: "Rate Limiting", icon: ShieldCheck, color: "#f43f5e", bg: "rgba(244,63,94,0.12)", tag: "Security" },
  { name: "Distributed Tracing", icon: Activity, color: "#2dd4bf", bg: "rgba(45,212,191,0.12)", tag: "Observability" },
  { name: "REST APIs", icon: Server, color: "#818cf8", bg: "rgba(129,140,248,0.12)", tag: "Architecture" },
  { name: "Dart", icon: SiDart, color: "#0284c7", bg: "rgba(2,132,199,0.12)", tag: "Language" },
];

const skillCategories = [
  {
    id: "backend",
    name: "Backend & Architecture",
    icon: Server,
    skills: [
      { name: "ASP.NET Core", desc: "Enterprise REST APIs, dependency injection, high-throughput financial backends", level: "Proficient" },
      { name: "YARP (Reverse Proxy)", desc: "Dynamic routing, edge reverse proxy, load balancing across downstream clusters in .NET 10", level: "Advanced" },
      { name: "Microservices & Rate Limiting", desc: "Centralized edge JWT validation, fixed-window rate limiting, DDoS mitigation", level: "Core Practice" },
      { name: "Distributed Tracing", desc: "Dynamic X-Correlation-ID header injection, structured JSON error handling & pipeline resilience", level: "Proficient" },
      { name: "Django", desc: "MVT architecture, ORM optimization, clinic management systems, rapid prototyping", level: "Advanced" },
      { name: "Express.js (Node.js)", desc: "Lightweight, event-driven microservices & authentication layers", level: "Proficient" },
      { name: "Clean Architecture", desc: "Domain-Driven Design, separation of concerns, testable modular structures", level: "Core Practice" },
    ]
  },
  {
    id: "languages",
    name: "Core Languages",
    icon: Code2,
    skills: [
      { name: "C#", desc: "Type-safe OOP, LINQ, asynchronous programming, enterprise .NET ecosystem", level: "Primary" },
      { name: "Python", desc: "Data processing, algorithms, MetaTrader 5 trading systems, automated pipelines", level: "Advanced" },
      { name: "JavaScript (ES6+)", desc: "Modern frontend logic, asynchronous state, Node backend utilities", level: "Advanced" },
      { name: "Dart", desc: "Cross-platform mobile state management, reactive widgets with Flutter", level: "Proficient" },
    ]
  },
  {
    id: "frontend",
    name: "Frontend & Mobile",
    icon: Smartphone,
    skills: [
      { name: "React.js", desc: "Component architecture, hooks, state workflows, responsive dark-mode dashboards", level: "Primary" },
      { name: "Flutter", desc: "Single-codebase mobile applications for Android & iOS with smooth 60fps UI", level: "Advanced" },
      { name: "HTML5 / CSS3", desc: "Semantic markup, modern layout models, responsive glassmorphism & Tailwind", level: "Expert" },
    ]
  },
  {
    id: "devops",
    name: "Databases & Cloud DevOps",
    icon: Database,
    skills: [
      { name: "PostgreSQL", desc: "Relational modeling, indexing, ACID compliance for financial & clinical apps", level: "Primary" },
      { name: "SQL Server / SQLite", desc: "Relational schemas, ACID transactions, embedded mobile and local storage", level: "Proficient" },
      { name: "MongoDB", desc: "Document collections, flexible schemas, NoSQL high-speed queries", level: "Proficient" },
      { name: "Docker", desc: "Containerized application environments, reproducible dev and deployment setups", level: "Proficient" },
      { name: "AWS", desc: "Cloud computing infrastructure fundamentals, S3, EC2 hosting", level: "Certified" },
      { name: "Git / GitHub", desc: "Version control, branching workflows, PR reviews, CI/CD integration", level: "Daily Use" },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("backend");

  return (
    <section id="skills" className="py-28 bg-black relative overflow-hidden section-optimize">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[280px] sm:h-[350px] bg-gradient-to-r from-blue-600/25 via-purple-600/20 to-cyan-500/15 rounded-full blur-[65px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with BlurText */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles size={13} />
            <span>Technical Mastery</span>
          </motion.div>

          <BlurText
            text="Engineering Stack & Core Competencies"
            tag="h2"
            className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 justify-center"
            animateBy="words"
            delay={60}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-400 text-base sm:text-lg"
          >
            Production-honed technical proficiencies gliding seamlessly from low-level algorithms to enterprise cloud architecture.
          </motion.p>
        </div>

      </div>

      {/* CREATIVE OUTSIDE-TO-OUTSIDE ANIMATION WITH ICONS */}
      {/* Full-width container that bleeds beyond both screen edges */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden mb-20 marquee-container py-4">
        {/* Left and right atmospheric fades: skills emerge from outside and leave outside */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-r from-black via-black/85 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-l from-black via-black/85 to-transparent z-20" />

        {/* Track 1: Gliding Left-to-Right */}
        <div className="flex whitespace-nowrap overflow-hidden mb-5">
          <div className="flex gap-4 sm:gap-6 items-center animate-marquee-forward">
            {[...outsideTrack1, ...outsideTrack1, ...outsideTrack1, ...outsideTrack1].map((skill, i) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-blue-400/50 hover:bg-zinc-900/90 shadow-xl backdrop-blur-xl transition-all duration-300 group cursor-default select-none shrink-0"
                  style={{
                    boxShadow: `0 4px 20px ${skill.bg}`
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300"
                    style={{ background: skill.bg, color: skill.color }}
                  >
                    <IconComponent size={22} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                      {skill.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Track 2: Gliding Right-to-Left (Opposite direction) */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-4 sm:gap-6 items-center animate-marquee-backward">
            {[...outsideTrack2, ...outsideTrack2, ...outsideTrack2, ...outsideTrack2].map((skill, i) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-purple-400/50 hover:bg-zinc-900/90 shadow-xl backdrop-blur-xl transition-all duration-300 group cursor-default select-none shrink-0"
                  style={{
                    boxShadow: `0 4px 20px ${skill.bg}`
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-6 duration-300"
                    style={{ background: skill.bg, color: skill.color }}
                  >
                    <IconComponent size={22} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                      {skill.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillCategories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer
                  ${isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'}
                `}
              >
                <IconComponent size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories
            .find((c) => c.id === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-blue-500/40 backdrop-blur-xl group hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-zinc-300 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {skill.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>Production Ready</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            ))}
        </div>

        {/* Clean Architecture Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck size={16} />
                <span>Design Philosophy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Clean Architecture & High-Maintainability Code
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Rather than writing tangled business logic, I implement Clean Architecture and SOLID principles across C# (.NET) and Python applications. This guarantees loose coupling, effortless unit testing, and resilience against database or framework migrations.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-full md:w-auto">
                <div className="text-xs uppercase font-mono text-zinc-400 mb-2">Core Tenets</div>
                <ul className="space-y-1.5 text-xs text-zinc-300 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Domain-Driven Boundaries
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> Inversion of Control
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> Robust Exception Pipelines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
