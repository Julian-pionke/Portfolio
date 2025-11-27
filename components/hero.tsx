'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [yearsCount, setYearsCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const [companiesCount, setCompaniesCount] = useState(0)

  useEffect(() => {
    const animateCount = (setter: (value: number) => void, target: number, duration: number = 2000) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
    }

    const timer = setTimeout(() => {
      animateCount(setYearsCount, 8)
      animateCount(setProjectsCount, 50)
      animateCount(setCompaniesCount, 4)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8 relative">
          {/* 3D Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-lg animate-pulse [animation-delay:1s]"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-lg animate-pulse [animation-delay:2s]"></div>
          </div>

          <div className="space-y-6 transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-balance leading-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-slideInLeft">
              Building the future with <span className="text-primary drop-shadow-lg">AI & Cloud Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fadeIn [animation-delay:300ms]">
              8+ years building scalable microservices, healthcare platforms, and AI applications. Currently at Deloitte, previously at Google.
            </p>
          </div>

          <div className="flex gap-4 justify-center pt-6 animate-fadeIn [animation-delay:600ms]">
            <a 
              href="mailto:julian.p.27@outlook.com"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-2xl hover:shadow-primary/30 hover:scale-110 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in touch
            </a>
            <a 
              href="https://www.linkedin.com/in/julian-pionke-60b38339a/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-110 transform hover:-translate-y-1"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex gap-8 justify-center pt-12 border-t border-border/50 max-w-md mx-auto animate-fadeIn [animation-delay:900ms]">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-primary drop-shadow-lg">{yearsCount}+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-accent drop-shadow-lg">{projectsCount}+</p>
              <p className="text-sm text-muted-foreground">Projects Built</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-primary drop-shadow-lg">{companiesCount}</p>
              <p className="text-sm text-muted-foreground">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
