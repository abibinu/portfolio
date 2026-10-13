import React, { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Journey = lazy(() => import('./components/Journey'));
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const ResumeSection = lazy(() => import('./components/ResumeSection'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="relative text-white selection:bg-blue-500/30 selection:text-white">
        <CursorGlow />
        <Background />
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-64" />}>
            <About />
          </Suspense>
          <Suspense fallback={<div className="h-64" />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div className="h-64" />}>
            <Journey />
          </Suspense>
          <Suspense fallback={<div className="h-64" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div className="h-64" />}>
            <Certificates />
          </Suspense>
          <Suspense fallback={<div className="h-64" />}>
            <ResumeSection />
          </Suspense>
          <Suspense fallback={<div className="h-64" />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
