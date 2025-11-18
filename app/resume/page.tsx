import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Resume() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Resume Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 pt-24">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold font-sans">Resume</h1>
          <a 
            href="/Julian Pionke.pdf" 
            download="Julian_Pionke_Resume.pdf"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Download PDF
          </a>
        </div>
        
        {/* Resume Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-12">
          {/* Header */}
          <div className="text-center border-b border-border pb-8">
            <h2 className="text-3xl font-bold mb-2">Julian Pionke</h2>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <span>Wrocław, Poland</span>
              <span>•</span>
              <span>julian.p.712@outlook.com</span>
              <span>•</span>
              <span>https://www.linkedin.com/in/julian-pionke-01a137397</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Summary</h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Full Stack Engineer with 8+ years of experience developing AI-driven healthcare, research, and commerce platforms using Python (FastAPI, Flask) and JavaScript (React, Next.js) across enterprise systems. Experienced in building scalable microservices, secure authentication flows, and cloud-native architectures on GCP, AWS, and containerized Kubernetes environments. Specialized in optimizing AI pipelines and data-centric applications integrating TensorFlow, Vertex AI, and SaaS components with modern DevOps automation and regulatory compliance.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Senior Software Engineer</h4>
                    <p className="text-lg text-muted-foreground">Deloitte</p>
                  </div>
                  <span className="text-muted-foreground">August 2024–Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-justify">
                  <li>Played key role in architecturing CareLink AI, a cloud-based healthcare platform integrating Python FastAPI, React, and Google Cloud Platform for predictive patient analytics.</li>
                  <li>Optimized AI-driven health monitoring pipeline using TensorFlow, MedPaLM-2, and Vertex AI, enhancing diagnostic analysis speed by 35% across clinical datasets.</li>
                  <li>Developed FHIR/HL7 API connectors enabling hospitals to securely exchange health records through FastAPI microservices and OAuth 2.0 authorization.</li>
                  <li>Enhanced real-time clinician dashboards using Next.js, Tailwind UI, and Chart.js, providing predictive visual insights from large-scale patient data.</li>
                  <li>Configured secure file handling with Cloud Storage and Firestore, ensuring compliance with GDPR and HIPAA requirements across all environments.</li>
                  <li>Streamlined deployment workflows through Cloud Build, Docker, and Kubernetes, supporting reliable scaling during public beta launches.</li>
                  <li>Refactored backend modules for modular microservice communication, leveraging Pub/Sub and Cloud Tasks for async processing of large EHR data streams.</li>
                  <li>Improved patient care timeline features by integrating Apple HealthKit and Fitbit API, extending multi-device data synchronization capabilities across mobile and web.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Senior Software Engineer</h4>
                    <p className="text-lg text-muted-foreground">Google</p>
                  </div>
                  <span className="text-muted-foreground">May 2021–August 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-justify">
                  <li>Architectured core components of NotebookLM, a SaaS research assistant built with Python, Node.js, and React, delivering AI-powered grounded document summarization.</li>
                  <li>Developed retrieval-augmented generation (RAG) pipelines leveraging Gemini LLM and PaLM APIs to generate citation-linked insights from uploaded materials.</li>
                  <li>Integrated secure document ingestion using Google Cloud Storage, Cloud Functions, and BigQuery, improving processing throughput by 40%.</li>
                  <li>Worked closely with product and research teams to design intuitive chat experiences powered by Next.js and Material UI.</li>
                  <li>Enhanced internal API gateways with FastAPI and gRPC, enabling scalable service-to-service communication across global deployments.</li>
                  <li>Configured observability and alerting through Cloud Monitoring and Error Reporting, ensuring low-latency, high-reliability responses for millions of users.</li>
                  <li>Refactored legacy Node.js components into microservices orchestrated via Kubernetes (GKE) and Docker, improving code isolation and deployment speed.</li>
                  <li>Analyzed user feedback pipelines through Pub/Sub and Dataflow, automating model-driven feature ranking and response optimization.</li>
                  <li>Executed A/B testing frameworks using Cloud Run and Firestore, validating LLM model improvements across multilingual datasets.</li>
                  <li>Improved authentication and SSO support using OAuth 2.0, Firebase Auth, and Identity Platform for secure enterprise access.</li>
                  <li>Documented technical architecture and ML data governance models for enterprise and compliance audits, enabling future scalability of NotebookLM's SaaS framework.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Software Engineer</h4>
                    <p className="text-lg text-muted-foreground">Deviniti</p>
                  </div>
                  <span className="text-muted-foreground">July 2019–March 2021</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-justify">
                  <li>Contributed in developing backend APIs for ShopEase, an AWS-based e-commerce platform using Node.js, Express, and MongoDB.</li>
                  <li>Built dynamic storefronts with React, Next.js, and Redux, improving catalog rendering times by 28% through optimized state management.</li>
                  <li>Integrated secure payment systems using Stripe API, PayPal SDK, and AWS Lambda for serverless transaction handling.</li>
                  <li>Configured CI/CD pipelines with AWS CodePipeline, CodeBuild, and S3 CloudFront for automated deployments and asset delivery.</li>
                  <li>Enhanced analytics dashboards using Chart.js and Recharts, providing store owners with visual insights into revenue and sales trends.</li>
                  <li>Resolved API latency issues by refactoring query logic and applying MongoDB indexes, improving data retrieval speed in real-time reports.</li>
                  <li>Customized admin dashboard features enabling business users to configure promotions and inventory alerts directly from the web interface.</li>
                  <li>Assisted senior engineers in transitioning monolithic modules into RESTful microservices for modular scalability and easier maintenance.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Junior Software Engineer</h4>
                    <p className="text-lg text-muted-foreground">Ramp Network</p>
                  </div>
                  <span className="text-muted-foreground">July 2017–August 2019</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-justify">
                  <li>Participated in developing non-custodial payment infrastructure connecting fiat and crypto using React.js, Python Flask, and PostgreSQL.</li>
                  <li>Automated onboarding workflows for partner wallets via REST APIs and OAuth 2.0, reducing manual integration time by 25%.</li>
                  <li>Assisted in configuring blockchain payment flows across AWS EC2, Lambda, and S3, improving scalability during high-volume transactions.</li>
                  <li>Refactored front-end components in React.js to improve modularity and state management for multi-currency payment forms.</li>
                  <li>Worked closely with compliance teams to implement Open Banking APIs and AML/KYC verification in backend services.</li>
                  <li>Maintained early product documentation for SDK integrations, ensuring developer partners could embed fiat-to-crypto on-ramps easily.</li>
                  <li>Analyzed transaction flow metrics via CloudWatch and Grafana, identifying throughput bottlenecks and optimizing API rate limits for stable payment operations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Backend:</h4>
                <p className="text-muted-foreground">Python (FastAPI, Flask), Node.js (Express), TensorFlow, gRPC, GraphQL, REST APIs, Celery, Pub/Sub, Kubernetes Jobs</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Frontend:</h4>
                <p className="text-muted-foreground">React, Next.js, Redux, Tailwind UI, Material UI, Chart.js, Recharts, TypeScript, Flutter</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Microservices & APIs:</h4>
                <p className="text-muted-foreground">FastAPI, Express, gRPC, GraphQL, FHIR/HL7, OAuth 2.0, OpenID Connect, WebSockets, API Gateway, Cloud Tasks</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cloud & DevOps:</h4>
                <p className="text-muted-foreground">GCP (Vertex AI, Cloud Run, Pub/Sub, Firestore, BigQuery, Cloud Functions), AWS (EC2, S3, Lambda, CloudFront, CodePipeline), Docker, Kubernetes</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Databases:</h4>
                <p className="text-muted-foreground">PostgreSQL, MongoDB, Cloud SQL, Firestore, Redis, BigQuery</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Messaging & Streaming:</h4>
                <p className="text-muted-foreground">Pub/Sub, Kafka, RabbitMQ, Cloud Tasks, Celery</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Testing & Quality:</h4>
                <p className="text-muted-foreground">Pytest, Jest, React Testing Library, Postman, Cypress, SonarQube</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Security & Compliance:</h4>
                <p className="text-muted-foreground">GDPR, HIPAA, IAM, JWT, Encryption, Key Management Service (KMS), Audit Logging</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tools & Platforms:</h4>
                <p className="text-muted-foreground">Git, GitHub Actions, Bitbucket, VS Code, JIRA, Notion, Figma</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Infrastructure & Monitoring:</h4>
                <p className="text-muted-foreground">Cloud Build, Prometheus, Grafana, Cloud Monitoring, Error Reporting, Logging, Terraform</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Project Methodologies:</h4>
                <p className="text-muted-foreground">Agile, Scrum, CI/CD, Code Review, TDD</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">E-commerce & Payments:</h4>
                <p className="text-muted-foreground">Stripe API, PayPal SDK, Open Banking API, PCI-DSS</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Healthcare Standards:</h4>
                <p className="text-muted-foreground">FHIR, HL7, HIPAA, GDPR, Vertex AI Medical APIs</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Master of Computer Science</h4>
                    <p className="text-lg text-muted-foreground">Trinity College Dublin (TCD), Dublin, Ireland</p>
                  </div>
                  <span className="text-muted-foreground">2015-2017</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Bachelor of Computer Science</h4>
                    <p className="text-lg text-muted-foreground">Trinity College Dublin (TCD), Dublin, Ireland</p>
                  </div>
                  <span className="text-muted-foreground">2011-2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}