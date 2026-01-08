import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;