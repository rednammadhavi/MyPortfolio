import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className='bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'>
      <Navbar />

      <section id="home" className="scroll-mt-10"><Home /></section>
      <section id="about" className="scroll-mt-10"><About /></section>
      <section id="skills" className="scroll-mt-10"><Skills /></section>
      <section id="projects" className="scroll-mt-10"><Projects /></section>

      <Footer />
    </div>
  );
}

export default App;
