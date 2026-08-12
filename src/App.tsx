import './App.css'
import { Nav } from './components/Nav'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

function App() {

  return (
    <main>
      <Nav />
      <main>
        <Hero/>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </main>
  )
}

export default App
