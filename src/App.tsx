import './App.css'
import { DotGrid } from './components/DotGrid'
import { Nav } from './components/Nav'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

function App() {

  return (
    <div className="relative min-h-screen">
      <DotGrid />
      <Nav />
      <main>
        <Hero/>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
