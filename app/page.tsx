import Header from '@/components/header'
import Hero from '@/components/hero'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import CustomSection from '@/components/custom-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-0">
        <Hero />
        <Experience />
        <Projects />

        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
