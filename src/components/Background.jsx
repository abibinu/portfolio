import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      {/* Dynamic Ambient Gradient Orbs (Vibrant on both Mobile & Desktop) */}
      <div className="absolute top-[-5%] left-[-15%] sm:left-[-10%] w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] rounded-full bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-transparent blur-[65px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-15%] sm:right-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-gradient-to-bl from-purple-600/30 via-pink-600/15 to-transparent blur-[65px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-[60%] left-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-gradient-to-tr from-cyan-600/25 via-blue-600/20 to-transparent blur-[65px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] rounded-full bg-gradient-to-tl from-purple-600/30 via-indigo-600/20 to-transparent blur-[65px] sm:blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 brightness-50 contrast-150" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
    </div>
  );
};

export default Background;
