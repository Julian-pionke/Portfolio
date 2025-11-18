'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-100/80 backdrop-blur-md border-b border-border/40' 
          : 'bg-gray-100/50 backdrop-blur-sm border-b border-border/20'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity duration-200"
        >
          Julian Pionke
        </Link>
        <div className="flex items-center gap-8">
          <a 
            href="/#experience" 
            onClick={(e) => {
              e.preventDefault()
              if (window.location.pathname !== '/') {
                window.location.href = '/#experience'
              } else {
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group cursor-pointer"
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="/#projects" 
            onClick={(e) => {
              e.preventDefault()
              if (window.location.pathname !== '/') {
                window.location.href = '/#projects'
              } else {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group cursor-pointer"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <Link 
            href="/notebooklm" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
          >
            NotebookLM
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/resume" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
          >
            Resume
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <a 
            href="https://www.linkedin.com/in/julian-pionke-01a137397" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
          >
            LinkedIn
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </nav>
    </header>
  )
}
