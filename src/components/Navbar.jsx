import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download, FileText, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}assets/Abi_Binu_SoftwareDeveloper.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-6 flex justify-center pointer-events-none transition-all duration-300">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`
          pointer-events-auto
          flex items-center justify-between gap-4 sm:gap-8 px-5 py-2.5 sm:px-6 sm:py-3
          rounded-full border transition-all duration-500
          ${scrolled
            ? 'bg-zinc-950/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] scale-100 ring-1 ring-white/5'
            : 'bg-zinc-950/40 backdrop-blur-md border-white/10 scale-100'}
        `}
      >
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-1.5 text-lg sm:text-xl font-extrabold tracking-tight text-white group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 group-hover:scale-125 transition-transform" />
          <span>ABI<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> BINU</span></span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-wider text-zinc-400 hover:text-white uppercase transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Download Resume Button */}
          <a
            href={resumeUrl}
            download="Abi_Binu_SoftwareDeveloper.pdf"
            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 active:scale-95"
            title="Download Abi Binu's Resume"
          >
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-1 text-zinc-400 border-l border-white/10 pl-2">
            <a
              href="https://github.com/abibinu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/abi-binu-821560340/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              <Linkedin size={17} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center pointer-events-auto p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 text-zinc-400 hover:text-white rounded-full bg-white/5 border border-white/10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-6 text-center">
              <span className="text-xs uppercase font-mono tracking-widest text-zinc-500">Navigation</span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl sm:text-3xl font-bold text-zinc-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-6 flex flex-col items-center gap-4 w-full max-w-xs">
                <a
                  href={resumeUrl}
                  download="Abi_Binu_SoftwareDeveloper.pdf"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                >
                  <Download size={16} />
                  Download Resume (PDF)
                </a>

                <div className="flex gap-4 pt-2">
                  <a
                    href="https://github.com/abibinu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-full text-zinc-300 hover:text-white"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/abi-binu-821560340/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-full text-zinc-300 hover:text-white"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:abibinuofficial@gmail.com"
                    className="p-3 bg-white/5 border border-white/10 rounded-full text-zinc-300 hover:text-white"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
