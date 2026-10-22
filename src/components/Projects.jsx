import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Sparkles, Code2, Layers, CheckCircle2 } from 'lucide-react';
import BlurText from './BlurText';

const projects = [
  {
    id: "01",
    featured: true,
    category: "enterprise",
    categoryLabel: "C# • .NET 10 • YARP",
    title: "Custom Lightweight API Gateway – Reverse Proxy & Traffic Controller",
    shortDesc: "High-throughput API Gateway using .NET 10 and YARP for dynamic routing, edge JWT security, and rate limiting.",
    bullets: [
      "Architected an API Gateway using .NET 10 and YARP to centralize dynamic routing, load balancing, and traffic control across downstream microservice clusters.",
      "Engineered centralized edge JWT validation and fixed-window rate limiting (System.Threading.RateLimiting) to mitigate unauthorized requests and DDoS traffic.",
      "Implemented distributed request tracing via dynamic X-Correlation-ID header injection and standardized JSON error handling for pipeline resilience."
    ],
    tech: ["C#", ".NET 10", "YARP", "ASP.NET Core", "Rate Limiting", "Distributed Tracing", "JWT"],
    image: `${import.meta.env.BASE_URL}assets/projects/api-gateway.jpg`,
    github: "https://github.com/abibinu/api-gateway",
    color: "from-cyan-500 via-blue-600 to-indigo-600"
  },
  {
    id: "02",
    featured: true,
    category: "enterprise",
    categoryLabel: "Enterprise & FinTech",
    title: "AegisTrader – Financial Simulation Platform",
    shortDesc: "Enterprise-grade financial simulation platform built with ASP.NET Core and React.js.",
    bullets: [
      "Engineered an enterprise-grade financial simulation platform using ASP.NET Core for backend operations and React.js for a responsive, interactive user interface.",
      "Designed a scalable PostgreSQL database architecture to efficiently store and query complex financial data.",
      "Implemented Clean Architecture principles to keep the codebase maintainable and data handling strictly controlled."
    ],
    tech: ["ASP.NET Core", "React.js", "PostgreSQL", "C#", "Clean Architecture"],
    image: `${import.meta.env.BASE_URL}assets/projects/aegistrader.jpg`,
    github: "https://github.com/abibinu/AegisTrader",
    color: "from-blue-600 via-indigo-600 to-cyan-500"
  },
  {
    id: "03",
    featured: true,
    category: "automation",
    categoryLabel: "FinTech & Automation",
    title: "m1-ob-scalper – Automated Market Data System",
    shortDesc: "Automated, high-frequency data parsing system interfacing directly with MetaTrader 5 feeds.",
    bullets: [
      "Developed an automated, high-frequency data parsing system in Python that interfaces directly with MetaTrader 5 real-time data feeds.",
      "Built logic-driven algorithms to process market data with low latency, automating decision workflows.",
      "Engineered resilient error recovery and socket connection management under high volatility."
    ],
    tech: ["Python", "MetaTrader 5", "Pandas", "Algorithms", "AsyncIO"],
    image: `${import.meta.env.BASE_URL}assets/projects/trading-bot.png`,
    github: "https://github.com/abibinu/arbix",
    color: "from-orange-500 via-amber-600 to-red-600"
  },
  {
    id: "04",
    featured: true,
    category: "mobile",
    categoryLabel: "Mobile & Health",
    title: "Mental Health App – Cross-Platform Companion",
    shortDesc: "Cross-platform mental wellness mobile application built with Flutter and Express.js.",
    bullets: [
      "Built a cross-platform mental health mobile application with Flutter for a consistent experience across devices.",
      "Constructed a secure Express.js (Node.js) backend API to handle user data, mood tracking, and application logic efficiently.",
      "Designed responsive and empathetic UI widgets with state-driven wellness prompts."
    ],
    tech: ["Flutter (Dart)", "Express.js", "Node.js", "PostgreSQL", "REST API"],
    image: `${import.meta.env.BASE_URL}assets/projects/mental-health-app.jpg`,
    github: "https://github.com/abibinu/MENTAL_HEALTH_APP",
    color: "from-purple-600 via-pink-600 to-indigo-600"
  },
  {
    id: "05",
    featured: true,
    category: "enterprise",
    categoryLabel: "Industrial Training • Django",
    title: "Clinic Management System – Faith InfoTech",
    shortDesc: "Healthcare clinic management web application developed at Technopark, Thiruvananthapuram.",
    bullets: [
      "Developed a clinic management system in Django within a one-week programme, delivering a working application from requirements to completion.",
      "Applied Django's MVT architecture, models and database integration to manage clinic data, doctor appointments, and patient workflows.",
      "Built role-based administrative dashboards for multi-department staff."
    ],
    tech: ["Django", "Python", "MVT Architecture", "PostgreSQL", "Tailwind CSS"],
    image: `${import.meta.env.BASE_URL}assets/projects/clinic-management.jpg`,
    github: "https://github.com/abibinu/CMS_PROJECT",
    color: "from-teal-600 via-emerald-600 to-cyan-700"
  },
  {
    id: "06",
    featured: false,
    category: "mobile",
    categoryLabel: "Full-Stack Web App",
    title: "E-Commerce Platform",
    shortDesc: "High-speed digital marketplace with seamless authentication and product catalogues.",
    bullets: [
      "Engineered full digital storefront with categorized catalog browsing and secure checkout workflows.",
      "Integrated NoSQL MongoDB collections for scalable product records and session management.",
      "Optimized page loads and responsive UI layouts for mobile and desktop shoppers."
    ],
    tech: ["PHP / React", "MongoDB", "Tailwind CSS", "REST API"],
    image: `${import.meta.env.BASE_URL}assets/projects/ecommerce.jpg`,
    github: "https://github.com/abibinu/E-COMMERCE_SITE",
    color: "from-blue-600 to-indigo-800"
  },
  {
    id: "07",
    featured: false,
    category: "automation",
    categoryLabel: "Machine Learning Solution",
    title: "ML Disease Prediction Pipeline",
    shortDesc: "Predictive diagnostic machine learning system trained on comprehensive medical data.",
    bullets: [
      "Engineered machine learning classification pipelines evaluating multi-symptom medical inputs.",
      "Exported high-performance FastAPI inference endpoints for rapid prediction delivery.",
      "Achieved high accuracy across symptom correlation metrics."
    ],
    tech: ["Python", "Scikit-Learn", "FastAPI", "Pandas"],
    image: `${import.meta.env.BASE_URL}assets/projects/ml-disease.jpg`,
    github: "https://github.com/abibinu/ML_projects",
    color: "from-emerald-600 to-teal-800"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "enterprise", label: "Enterprise & C#" },
  { id: "automation", label: "Python & Automation" },
  { id: "mobile", label: "Mobile & Full-Stack" },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 bg-black relative overflow-hidden section-optimize">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-gradient-to-bl from-blue-600/25 via-indigo-600/20 to-transparent rounded-full blur-[65px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles size={13} />
            <span>Featured Case Studies</span>
          </motion.div>

          <BlurText
            text="Selected Software Projects"
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
            Real-world enterprise systems, high-frequency algorithms, and full-stack solutions highlighted in my resume.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`
                px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
                ${filter === cat.id
                  ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5 hover:bg-zinc-800'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 sm:p-10 lg:p-12 rounded-[2.5rem] bg-zinc-950/80 border border-white/10 hover:border-white/20 backdrop-blur-2xl transition-all duration-500 group shadow-2xl"
                >
                  <div className={`grid lg:grid-cols-12 gap-10 lg:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    
                    {/* Project Information */}
                    <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                      {/* Top Badges */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-black font-mono text-zinc-700">
                          {project.id}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-wider">
                          {project.categoryLabel}
                        </span>
                        {project.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            Resume Highlight
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Bullets directly matching resume */}
                      <ul className="space-y-3">
                        {project.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                            <span className="text-blue-400 mt-1 shrink-0 font-bold">▹</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-medium text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="pt-4 flex items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md active:scale-95"
                        >
                          <Github size={16} />
                          <span>View Code</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>

                    {/* Project Visual / Browser Mockup */}
                    <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 shadow-2xl group/img">
                        
                        {/* Mockup Top Window Bar */}
                        <div className="px-4 py-3 bg-zinc-950/90 border-b border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500/80" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <span className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                          <span className="text-[11px] font-mono text-zinc-500 truncate max-w-[200px]">
                            {project.title.toLowerCase().replace(/\s+/g, '-')}
                          </span>
                          <div className="w-8" />
                        </div>

                        {/* Image Preview */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity" />
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;
