import Image from 'next/image'

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Deloitte",
    period: "October 2023 – Present",
    highlights: [
      "Architected CareLinkAI, a cloud-based healthcare platform integrating Python FastAPI, React, and GCP",
      "Optimized AI-driven health monitoring pipeline using TensorFlow and VertexAI, enhancing diagnostic analysis by 35%",
      "Developed FHIR/HL7 API connectors for secure hospital data exchange with OAuth2.0 authorization",
      "Enhanced real-time clinician dashboards using Next.js and predictive analytics from large-scale patient data",
      "Configured secure file handling with Cloud Storage and Firestore, ensuring GDPR and HIPAA compliance"
    ]
  },
  {
    title: "Software Engineer",
    company: "Google",
    period: "May 2021 – September 2023",
    highlights: [
      "Architected core components of NotebookLM, a SaaS research assistant with AI-powered document summarization",
      "Developed RAG pipelines leveraging Gemini LLM and PaLM APIs for citation-linked insights",
      "Integrated secure document ingestion using Cloud Storage, Cloud Functions, and BigQuery, improving throughput by 40%",
      "Designed intuitive chat experiences using Next.js and Material UI with seamless LLM integration",
      "Refactored legacy Node.js components into microservices orchestrated via Kubernetes and Docker"
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "Deviniti",
    period: "July 2019 – March 2021",
    highlights: [
      "Developed backend APIs for ShopEase, an AWS-based e-commerce platform using Node.js and Express",
      "Built dynamic storefronts with React and Next.js, improving catalog rendering by 28%",
      "Integrated secure payment systems using Stripe API and PayPal SDK with serverless Lambda handling",
      "Configured CI/CD pipelines with AWS CodePipeline for automated deployments and asset delivery",
      "Resolved API latency issues through query optimization and MongoDB indexing"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Ramp Network",
    period: "July 2017 – August 2019",
    highlights: [
      "Developed non-custodial payment infrastructure connecting fiat and crypto using React.js and Flask",
      "Automated onboarding workflows for partner wallets via REST APIs, reducing manual integration time by 25%",
      "Configured blockchain payment flows across AWS EC2, Lambda, and S3 for high-volume transactions",
      "Implemented OpenBanking APIs and AML/KYC verification in backend services"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border/40">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div className="flex items-center gap-3">
                <a 
                  href={
                    exp.company === "Google" ? "https://www.google.com" :
                    exp.company === "Deloitte" ? "https://www.deloitte.com" :
                    exp.company === "Deviniti" ? "https://www.deviniti.com" :
                    exp.company === "Ramp Network" ? "https://rampnetwork.com" : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-lg overflow-hidden bg-white flex items-center justify-center p-3 hover:scale-105 transition-transform duration-200"
                >
                  {exp.company === "Deloitte" && (
                    <Image src="/deloitte-logo-0.png" alt="Deloitte" width={64} height={64} className="object-contain" />
                  )}
                  {exp.company === "Google" && (
                    <Image src="/Google_2015_logo.svg.webp" alt="Google" width={64} height={64} className="object-contain" />
                  )}
                  {exp.company === "Deviniti" && (
                    <Image src="/65705444cb788152b1e9e589_logo-deviniti.svg" alt="Deviniti" width={64} height={64} className="object-contain" />
                  )}
                  {exp.company === "Ramp Network" && (
                    <Image src="/ramp-networks-logo-svg-vector.svg" alt="Ramp Network" width={64} height={64} className="object-contain" />
                  )}
                </a>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <a 
                    href={
                      exp.company === "Google" ? "https://www.google.com" :
                      exp.company === "Deloitte" ? "https://www.deloitte.com" :
                      exp.company === "Deviniti" ? "https://www.deviniti.com" :
                      exp.company === "Ramp Network" ? "https://rampnetwork.com" : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {exp.company}
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
            </div>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-muted-foreground flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
