import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className='bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'>
      <Navbar />

      <section id="home" className="pt-8"><Home /></section>
      <section id="about" className="pt-8"><About /></section>
      <section id="skills" className="pt-8"><Skills /></section>
      <section id="projects" className="pt-8"><Projects /></section>
      <section id="connect" className="pt-8"><Connect /></section>

      <Footer />
    </div>
  );
}

export default App;
