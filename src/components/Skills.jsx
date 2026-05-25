import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

const techStack = [
  "React", "C#", ".NET", "ASP.NET Core", "Java", "Django", "ML", "Node.js", "Express.js",
  "PostgreSQL", "MongoDB", "C++", "AWS", "Docker",
  "Git", "Python", "Flutter"
];

const Skills = () => {
  const sectionRef = useRef(null);

  return (
    <section id="skills" ref={sectionRef} className="py-12 overflow-hidden bg-black relative section-optimize">
      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4"
        >
          My Skills
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <BlurText
            text="The Secret Sauce"
            tag="h3"
            className="text-4xl md:text-6xl font-bold"
          />


        </div>
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        {/* Marquee 1 */}
        <div className="flex whitespace-nowrap overflow-hidden py-4 border-y border-white/5">
          <div className="flex gap-12 items-center text-5xl md:text-7xl font-black uppercase text-white/10 animate-marquee-forward">
            {Array(4).fill(techStack).flat().map((tech, i) => (
              <span key={i} className="hover:text-blue-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee 2 - Reverse */}
        <div className="flex whitespace-nowrap overflow-hidden py-4">
          <div className="flex gap-12 items-center text-5xl md:text-7xl font-black uppercase text-white/20 animate-marquee-backward">
            {[...Array(4)].fill([...techStack].reverse()).flat().map((tech, i) => (
              <span key={i} className="hover:text-purple-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 grid md:grid-cols-3 gap-12 relative z-10">
        {[
          { title: "Front-end Development", desc: "Designing and implementing responsive, user-centric web interfaces using React, Next.js, and modern CSS. Focused on core web vitals, accessible design, and fluid transitions." },
          { title: "Back-end Engineering", desc: "Developing enterprise-grade backends, robust Web APIs, and secure microservices using ASP.NET Core (C#), Node.js, and Python. Proficient in relational and document databases." },
          { title: "DevOps & Architecture", desc: "Optimizing delivery pipelines and cloud systems utilizing Docker, AWS, CI/CD, and Git. Prioritizing scalable architectures, robust data modeling, and clean code standards." }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all"
          >
            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
