import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState("Initializing systems...");

  useEffect(() => {
    let currentPercent = 0;
    let timeoutId = null;

    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 4;
      currentPercent = Math.min(currentPercent + increment, 100);
      setPercent(currentPercent);

      if (currentPercent >= 100) {
        clearInterval(interval);
        setStatus("System Ready");
        timeoutId = setTimeout(() => {
          finishLoading();
        }, 500);
      } else if (currentPercent >= 85) {
        setStatus("Starting WebGL engine...");
      } else if (currentPercent >= 55) {
        setStatus("Loading components...");
      } else if (currentPercent >= 25) {
        setStatus("Compiling shaders...");
      }
    }, 70);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" }
      }}
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center font-sans overflow-hidden select-none"
    >
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center z-10">
        {/* Glowing Spinner */}
        <div className="relative w-24 h-24 mb-10 flex items-center justify-center">
          {/* Pulsing ring */}
          <motion.div 
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 border border-blue-500/10 rounded-full"
          />
          {/* Spinners */}
          <div 
            className="absolute inset-0 rounded-full border-4 border-white/5 border-t-blue-500 border-r-purple-500" 
            style={{ 
              animation: 'loader-spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite' 
            }} 
          />
        </div>

        {/* Text and Percentage */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-black tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 uppercase">
            ABI BINU
          </h1>
          <div className="text-gray-500 text-xs font-mono tracking-widest uppercase h-4">
            {status}
          </div>
          {/* Progress bar container */}
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mx-auto mt-6">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ width: '0%' }}
              animate={{ width: `${percent}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="text-blue-400 font-mono text-sm tracking-wider mt-2 font-bold">
            {percent}%
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
