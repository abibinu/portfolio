import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Certificates = lazy(() => import('./components/Certificates'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="relative text-white">
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
