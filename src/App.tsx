import { BackToTop } from './components/BackToTop'
import { About } from './components/About'
import { BeyondCode } from './components/BeyondCode'
import { Contact } from './components/Contact'
import { CursorGlow } from './components/CursorGlow'
import { DeveloperTraits } from './components/DeveloperTraits'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowIThink } from './components/HowIThink'
import { Milestones } from './components/Milestones'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-deep text-fg antialiased">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowIThink />
        <Skills />
        <Projects />
        <DeveloperTraits />
        <BeyondCode />
        <Milestones />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
