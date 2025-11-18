'use client'

import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "NotebookLM",
    company: "Google",
    period: "May 2021 – September 2023",
    description: "SaaS research assistant with AI-powered document summarization and citation-linked insights. I architected core components using Python, Node.js, and React, delivering grounded document analysis powered by Gemini LLM.",
    role: "Software Engineer",
    tech: ["Python", "Node.js", "React", "Gemini LLM", "BigQuery", "Kubernetes", "GCP"],
    achievements: [
      "Built retrieval-augmented generation (RAG) pipelines for citation-linked insights",
      "40% throughput improvement in document processing with Cloud Functions and BigQuery",
      "Designed intuitive chat experiences powered by Next.js and Material UI",
      "Refactored legacy Node.js components into microservices with Kubernetes and Docker"
    ],
    image: "https://www.jasonspielman.com/_assets/v10/0b1a3ce96146be128291be13b7c2c0c6dade3c26.png",
    featured: true
  },
  {
    id: 2,
    title: "CareLinkAI",
    company: "Deloitte",
    period: "October 2023 – Present",
    description: "Cloud-based healthcare platform integrating AI-driven patient analytics with real-time clinician dashboards. Architected scalable microservices on GCP with FHIR/HL7 API connectors for secure hospital data exchange.",
    role: "Senior Software Engineer",
    tech: ["Python", "FastAPI", "React", "Next.js", "TensorFlow", "GCP", "Kubernetes"],
    achievements: [
      "35% improvement in diagnostic analysis speed using TensorFlow and MedPaLM-2",
      "Developed FHIR/HL7 API connectors with OAuth2.0 for secure hospital data exchange",
      "Enhanced real-time dashboards with predictive analytics and visualization",
      "Ensured GDPR and HIPAA compliance across all cloud environments"
    ],
    image: "/fa8f93218422789.67a16f2a031ca.png"
  },
  {
    id: 3,
    title: "ShopEase",
    company: "Deviniti",
    period: "July 2019 – March 2021",
    description: "AWS-based e-commerce platform with real-time inventory management and advanced analytics. Built dynamic storefronts with React and Next.js, integrating secure payment systems and comprehensive admin dashboards.",
    role: "Junior Software Engineer",
    tech: ["Node.js", "Express", "React", "Next.js", "MongoDB", "Stripe", "AWS"],
    achievements: [
      "28% improvement in catalog rendering performance through optimized state management",
      "Integrated secure payment systems with Stripe and PayPal using AWS Lambda",
      "Built analytics dashboards providing revenue insights with Chart.js and Recharts",
      "Resolved API latency issues through query optimization and MongoDB indexing"
    ],
    image: "/eCommerce-App-Architecture-on-AWS.png"
  },
  {
    id: 4,
    title: "Ramp Network",
    company: "Ramp Network",
    period: "July 2017 – August 2019",
    description: "Non-custodial payment infrastructure connecting fiat and crypto. Developed onboarding workflows and blockchain payment flows, ensuring high-volume transaction scalability with AWS infrastructure.",
    role: "Software Engineer Intern",
    tech: ["React.js", "Python", "Flask", "PostgreSQL", "AWS", "Blockchain"],
    achievements: [
      "25% reduction in manual integration time through automated REST API onboarding",
      "Configured OpenBanking APIs and AML/KYC verification in backend services",
      "Improved payment scalability during high-volume transactions on AWS EC2 and Lambda",
      "Analyzed transaction metrics via CloudWatch and Grafana, optimizing API rate limits"
    ],
    image: "/rampnetwork.png"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <h2 className="text-4xl font-bold mb-2">Projects</h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Key projects and products I've architected and built across healthcare, AI research, e-commerce, and fintech.
      </p>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${project.featured ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center pb-20 border-b border-border/40 last:border-b-0 last:pb-0 px-8 py-12 rounded-lg bg-blue-50`}
          >
            <div className="w-full md:w-1/2 flex-shrink-0">
              {project.title === "NotebookLM" ? (
                <Link href="/notebooklm" className="block">
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border border-border/40 hover:border-primary/40 transition-colors cursor-pointer">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain"
                      priority={project.featured}
                    />
                  </div>
                </Link>
              ) : (
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border border-border/40">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain"
                    priority={project.featured}
                  />
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  {project.title === "NotebookLM" ? (
                    <Link href="/notebooklm">
                      <h3 className="text-3xl font-bold hover:text-primary transition-colors cursor-pointer">{project.title}</h3>
                    </Link>
                  ) : (
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  )}
                  {project.featured && (
                    <div className="relative inline-block">
                      <span className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        FEATURED
                      </span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-30 animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground items-center">
                  <div className="flex items-center gap-2">
                    <a 
                      href={
                        project.company === "Google" ? "https://www.google.com" :
                        project.company === "Deloitte" ? "https://www.deloitte.com" :
                        project.company === "Deviniti" ? "https://www.deviniti.com" :
                        project.company === "Ramp Network" ? "https://rampnetwork.com" : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5 h-5 rounded-sm overflow-hidden bg-white flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                      {project.company === "Google" && (
                        <svg viewBox="0 0 24 24" className="w-4 h-4">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      )}
                      {project.company === "Deloitte" && (
                        <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">D</span>
                        </div>
                      )}
                      {project.company === "Deviniti" && (
                        <div className="w-4 h-4 bg-purple-600 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">D</span>
                        </div>
                      )}
                      {project.company === "Ramp Network" && (
                        <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center">
                          <span className="text-white text-xs font-bold">R</span>
                        </div>
                      )}
                    </a>
                    <a 
                      href={
                        project.company === "Google" ? "https://www.google.com" :
                        project.company === "Deloitte" ? "https://www.deloitte.com" :
                        project.company === "Deviniti" ? "https://www.deviniti.com" :
                        project.company === "Ramp Network" ? "https://rampnetwork.com" : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {project.company}
                    </a>
                  </div>
                  <span>•</span>
                  <span>{project.role}</span>
                  <span>•</span>
                  <span>{project.period}</span>
                </div>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary flex-shrink-0 mt-1">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full border border-border/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
