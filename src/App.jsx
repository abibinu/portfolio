import React, { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Certificates = lazy(() => import('./components/Certificates'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to ensure a smooth transition
    // and wait for everything to mount properly.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative text-white">
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <Background />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-96" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Certificates />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
