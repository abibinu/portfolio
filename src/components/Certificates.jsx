import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import BlurText from './BlurText';

const certificates = [
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    link: "https://coursera.org/share/2c552bbe2aa3f411e579f1e904b9321e",
    platform: "Coursera"
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    link: "https://coursera.org/share/4d6af204632cdfe942ec6797ca0ef14f",
    platform: "Coursera"
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    link: "https://coursera.org/share/cc51084c7a1bcb2f757f99360b66c2ff",
    platform: "Coursera"
  },
  {
    title: "Using Databases with Python",
    issuer: "University of Michigan",
    link: "https://coursera.org/share/4d1023f4121b7acbe26986b42418c04b",
    platform: "Coursera"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-32 px-4 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4"
          >
            Accomplishments
          </motion.h2>
          <BlurText
            text="Official Certificates"
            tag="h3"
            className="text-4xl md:text-6xl font-bold"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="mb-6 p-3 w-fit bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  <Award className="text-blue-400" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-2 leading-tight">{cert.title}</h4>
                <p className="text-gray-400 mb-6">{cert.issuer} • {cert.platform}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors w-fit group/link"
              >
                View Certificate
                <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
