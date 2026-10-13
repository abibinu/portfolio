import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, CheckCircle2, Coffee, Zap } from 'lucide-react';

const devLogs = [
  { text: "$ git checkout main --quiet", type: "cmd" },
  { text: "$ dotnet build AegisTrader.sln -c Release", type: "cmd" },
  { text: "✔ Clean Architecture & SOLID contracts compiled", type: "success" },
  { text: "$ python3 -m arbix.scalper --feed=MetaTrader5", type: "cmd" },
  { text: "✔ Low-latency market streaming engine online", type: "success" },
  { text: "$ npx vite build --target=production", type: "cmd" },
  { text: "✔ Hydrating React 19 & WebGL shader pipelines", type: "success" },
  { text: "☕ Injecting caffeine... 0 bugs detected on first build!", type: "fun" },
  { text: "🚀 System ready! Launching Abi Binu's Portfolio...", type: "ready" },
];

const Loader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(10);
  const [visibleCount, setVisibleCount] = useState(1);
  const scrollRef = useRef(null);

  // Auto scroll terminal output smoothly
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleCount]);

  useEffect(() => {
    const timeouts = [];

    // Smooth, calibrated step timings (~2.2s total so it's snappy and readable without lagging)
    const schedule = [
      { delay: 100, count: 1, p: 15 },
      { delay: 320, count: 2, p: 28 },
      { delay: 560, count: 3, p: 42 },
      { delay: 820, count: 4, p: 58 },
      { delay: 1100, count: 5, p: 70 },
      { delay: 1380, count: 6, p: 82 },
      { delay: 1660, count: 7, p: 90 },
      { delay: 1940, count: 8, p: 96 },
      { delay: 2200, count: 9, p: 100 },
    ];

    schedule.forEach(({ delay, count, p }) => {
      const t = setTimeout(() => {
        setVisibleCount(count);
        setPercent(p);
      }, delay);
      timeouts.push(t);
    });

    // Hold at 100% for 350ms so user registers completion, then smoothly transition
    const finalT = setTimeout(() => {
      finishLoading();
    }, 2650);
    timeouts.push(finalT);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.35, ease: "easeInOut" }
      }}
      className="fixed inset-0 bg-[#050508] z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none font-mono will-change-[opacity]"
    >
      {/* Lightweight subtle gradient background (No heavy blur filters) */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Main Terminal Window with STRICT FIXED dimensions */}
      <div className="relative w-full max-w-2xl h-[380px] sm:h-[410px] bg-[#0c0d14] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col will-change-transform">
        
        {/* Terminal Header Bar */}
        <div className="h-11 px-4 py-2.5 bg-[#13141f] border-b border-zinc-800 flex items-center justify-between shrink-0">
          {/* macOS window controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
          </div>

          {/* Window Title */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-semibold tracking-wide">
            <Terminal size={13} className="text-blue-400" />
            <span>abi@workstation: ~/portfolio</span>
            <span className="text-zinc-600">|</span>
            <span className="text-indigo-400">git:(main) ⚡</span>
          </div>

          {/* Skip button */}
          <button
            onClick={finishLoading}
            className="text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer px-2.5 py-0.5 rounded bg-zinc-800/80 border border-zinc-700 hover:bg-zinc-700"
          >
            Skip →
          </button>
        </div>

        {/* Terminal Body with fixed flex layout */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between overflow-hidden min-h-0">
          <div className="flex-1 flex flex-col min-h-0 space-y-2">
            {/* Developer Banner */}
            <div className="text-zinc-500 text-xs pb-2 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <span>ABI BINU • FULL-STACK & BACKEND ENGINE</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE
              </span>
            </div>

            {/* Scrolling Log Stream inside fixed container */}
            <div 
              ref={scrollRef} 
              className="flex-1 overflow-y-auto space-y-1.5 font-mono pt-1 pr-1 min-h-0"
            >
              {devLogs.slice(0, visibleCount).map((log, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 leading-relaxed text-xs sm:text-sm"
                >
                  {log.type === "cmd" && (
                    <span className="text-zinc-300">
                      <span className="text-blue-400 font-bold">&gt; </span>
                      {log.text.replace("$ ", "")}
                    </span>
                  )}
                  {log.type === "success" && (
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="shrink-0 text-emerald-400" />
                      <span>{log.text.replace("✔ ", "")}</span>
                    </span>
                  )}
                  {log.type === "fun" && (
                    <span className="text-amber-300 flex items-center gap-1.5 font-medium">
                      <Coffee size={13} className="shrink-0 text-amber-400" />
                      <span>{log.text}</span>
                    </span>
                  )}
                  {log.type === "ready" && (
                    <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                      <Zap size={13} className="shrink-0 text-cyan-400" />
                      <span>{log.text}</span>
                    </span>
                  )}
                </div>
              ))}

              {/* Active blinking prompt line */}
              <div className="flex items-center gap-1.5 text-zinc-400 pt-1 text-xs sm:text-sm">
                <span className="text-blue-400 font-bold">&gt;</span>
                <span className="text-zinc-500 text-xs">
                  {percent < 100 ? "compiling assets..." : "ready"}
                </span>
                <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-0.5" />
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar & Stats - Fixed to bottom */}
          <div className="pt-3 border-t border-zinc-800 space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400 flex items-center gap-1.5">
                <Cpu size={12} className="text-purple-400" />
                <span>BUILDING PRODUCTION ARTIFACTS</span>
              </span>
              <span className="text-blue-400 font-bold">{percent}%</span>
            </div>

            {/* Glowing Segmented Progress Bar */}
            <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-200 ease-out will-change-[width]"
                style={{ width: `${percent}%` }}
              />
            </div>

            {/* Developer Quote / Easter Egg */}
            <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
              <span>// "It works on my machine!" ☕</span>
              <span className="text-emerald-400/90 font-semibold">0 errors • 0 warnings</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
