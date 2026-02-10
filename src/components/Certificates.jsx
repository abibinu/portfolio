import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import BlurText from './BlurText';

const certificates = [
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~46JXGA6MMQP0/CERTIFICATE_LANDING_PAGE~46JXGA6MMQP0.jpeg",
    link: "https://coursera.org/share/2c552bbe2aa3f411e579f1e904b9321e",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Supervised Machine Learning: Regression",
    issuer: "IBM",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RNWSAVHTJJOL/CERTIFICATE_LANDING_PAGE~RNWSAVHTJJOL.jpeg",
    link: "https://coursera.org/share/4d6af204632cdfe942ec6797ca0ef14f",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Introduction to Security Principles in Cloud Computing",
    issuer: "Google Cloud",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SK4A77UFDC5C/CERTIFICATE_LANDING_PAGE~SK4A77UFDC5C.jpeg",
    link: "https://coursera.org/share/cc51084c7a1bcb2f757f99360b66c2ff",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~P06JTV5QBQM2/CERTIFICATE_LANDING_PAGE~P06JTV5QBQM2.jpeg",
    link: "https://coursera.org/share/4d1023f4121b7acbe26986b42418c04b",
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative aspect-video overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div className="p-6 relative space-y-4">
        <div className="flex items-center gap-2 text-blue-400">
          <Award size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">{cert.issuer}</span>
        </div>
        <h4 className="text-xl font-bold leading-tight group-hover:text-white transition-colors">
          {cert.title}
        </h4>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors group/link"
        >
          Verify Certificate
          <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-32 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4"
          >
            Achievements
          </motion.h2>
          <BlurText
            text="Professional Certifications"
            className="text-4xl md:text-6xl font-bold"
            tag="h3"
            animateBy="words"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
