import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Certificates from '@/components/Certificate'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
    </main>
  )
} 