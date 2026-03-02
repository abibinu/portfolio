import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-t-2 border-b-2 border-blue-500"
        />

        {/* Inner rotating ring (reverse) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-16 h-16 rounded-full border-l-2 border-r-2 border-purple-500"
        />

        {/* Center Logo/Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-fit h-fit text-2xl font-black tracking-tighter text-white"
        >
          AB<span className="text-blue-500">.</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs uppercase tracking-[0.3em] font-medium">Initializing Portfolio</span>
        <div className="w-32 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
