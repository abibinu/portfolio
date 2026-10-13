import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Mail, MapPin, Phone, Github, Linkedin, MessageSquare, Copy, Check, Sparkles, Download, ArrowUpRight } from 'lucide-react';
import BlurText from './BlurText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const resumeUrl = `${import.meta.env.BASE_URL}assets/Abi_Binu_SoftwareDeveloper.pdf`;

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const telegramMessage = `
📨 New Contact Form Message
---------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📑 Subject: ${formData.subject || 'General Inquiry'}
💬 Message: ${formData.message}
    `.trim();

    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '8611302141:AAEDibBH2XOdozOZOZz8v--aPfaLrwH3MvM';
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '6498749733';

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: telegramMessage })
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Telegram send failed:', data);
        throw new Error(data.description || 'Failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden section-optimize">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles size={13} />
            <span>Direct Communication</span>
          </motion.div>

          <BlurText
            text="Let's Build Something Exceptional Together"
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
            Whether you have an engineering role, a software consultation, or an ambitious project, my inbox and phone are always open.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-blue-500/30 backdrop-blur-xl transition-all group">
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-0.5">
                      Email Address
                    </span>
                    <a
                      href="mailto:abibinuofficial@gmail.com"
                      className="text-sm sm:text-base md:text-lg font-bold text-white hover:text-blue-400 transition-colors truncate block"
                      title="abibinuofficial@gmail.com"
                    >
                      abibinuofficial@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard('abibinuofficial@gmail.com', 'email')}
                  className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-purple-500/30 backdrop-blur-xl transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-0.5">
                      Phone / WhatsApp
                    </span>
                    <a
                      href="tel:+918590657748"
                      className="text-base sm:text-lg font-bold text-white hover:text-purple-400 transition-colors whitespace-nowrap block"
                    >
                      +91 85906 57748
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={() => copyToClipboard('+918590657748', 'phone')}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy phone number"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                  <a
                    href="https://wa.me/918590657748"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors text-xs font-bold inline-flex items-center gap-1.5"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl flex items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <MapPin size={20} className="sm:w-[22px] sm:h-[22px]" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-0.5">
                  Location
                </span>
                <p className="text-base sm:text-lg font-bold text-white">
                  Keralam, India
                </p>
                <p className="text-xs text-zinc-400 font-mono truncate">
                  Available for Remote & Relocation
                </p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-3">
              <a
                href="https://github.com/abibinu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl sm:rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all text-xs font-bold min-w-0"
              >
                <Github size={15} className="shrink-0" />
                <span className="truncate">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/abi-binu-821560340/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl sm:rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all text-xs font-bold min-w-0"
              >
                <Linkedin size={15} className="shrink-0" />
                <span className="truncate">LinkedIn</span>
              </a>
              <a
                href={resumeUrl}
                download="Abi_Binu_SoftwareDeveloper.pdf"
                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl sm:rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30 transition-all text-xs font-bold min-w-0"
              >
                <Download size={14} className="shrink-0" />
                <span className="truncate">Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] bg-zinc-950/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry, Job opportunity, Technical consultation"
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team, tech stack, or project goals..."
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check size={18} className="text-emerald-400" />
                    <span>Message Dispatched Successfully!</span>
                  </>
                ) : status === 'error' ? (
                  <span>Dispatch Issue — Please Email Directly</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

            </form>
          </motion.div>

        </div>

        {/* Global Footer */}
        <footer className="mt-28 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <p>© {new Date().getFullYear()} Abi Binu. Designed & Engineered with Clean Architecture.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href={resumeUrl} download="Abi_Binu_SoftwareDeveloper.pdf" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-1">
              <Download size={13} />
              <span>Resume PDF</span>
            </a>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
