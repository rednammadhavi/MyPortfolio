import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <About />
        <Skills />
        <Projects />
        <Connect />
      </div>
      <Footer />

    </>
  )
}

export default App
