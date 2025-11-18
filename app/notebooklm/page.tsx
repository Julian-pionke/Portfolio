import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function NotebookLM() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 pt-24">

        
        <h1 className="text-5xl font-bold mb-8 font-sans">NotebookLM</h1>
        
        <p className="text-lg leading-relaxed mb-8 max-w-2xl">
          I architected core components of NotebookLM, a SaaS research assistant built with Python, Node.js, and React, delivering AI-powered grounded document summarization and retrieval-augmented generation (RAG) pipelines.
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <button className="px-4 py-2 border border-border rounded hover:bg-accent/10 transition-colors">
            Architecture
          </button>
          <button className="px-4 py-2 border border-border rounded hover:bg-accent/10 transition-colors">
            RAG Pipeline
          </button>
          <button className="px-4 py-2 border border-border rounded hover:bg-accent/10 transition-colors">
            Cloud Infrastructure
          </button>
          <button className="px-4 py-2 border border-border rounded hover:bg-accent/10 transition-colors">
            AI Integration
          </button>
        </div>
      </section>

      {/* NotebookLM Highlights Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a href="https://www.youtube.com/watch?si=EixjyB9Ivvan9QFK&v=Hio8VGQMlZ4&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-6 rounded-lg transition-all duration-300 hover:opacity-70 hover:translate-y-1 block">
            <div className="flex items-start gap-4">
              <img 
                alt="" 
                className="object-cover rounded-lg flex-shrink-0" 
                style={{width: '159px', height: '85px'}}
                src="/first.png" 
              />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-medium">Podcast •</span>
                  <span> Sequoia Training Data</span>
                </p>
                <p className="text-base">Raiza and I discuss the journey building NotebookLM.</p>
              </div>
            </div>
          </a>
          
          <a href="https://time.com/7094935/google-notebooklm/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-6 rounded-lg transition-all duration-300 hover:opacity-70 hover:translate-y-1 block">
            <div className="flex items-start gap-4">
              <img 
                alt="" 
                className="object-cover rounded-lg flex-shrink-0" 
                style={{width: '159px', height: '85px'}}
                src="/second.png" 
              />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-medium">NotebookLM</span>
                  <span> • Winner!</span>
                </p>
                <p className="text-base">Recognized as one of TIME's Best Inventions of 2024.</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Architecture</h2>
        
        {/* Architecture Overview Image */}
        <div className="w-full mb-12">
          <img 
            src="/architecture.png" 
            alt="NotebookLM Architecture Overview" 
            className="w-full h-auto rounded-lg border border-border"
          />
        </div>
      </section>



      {/* RAG Pipeline Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">RAG Pipeline & Document Processing</h2>
        
        <p className="text-base leading-relaxed text-muted-foreground mb-8">
          The RAG (Retrieval-Augmented Generation) pipeline is the heart of NotebookLM's intelligence. Documents are ingested, indexed, and processed through a sophisticated flow that ensures every generated insight is grounded in the source material.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-accent pl-6">
            <h4 className="font-semibold mb-2">Document Ingestion</h4>
            <p className="text-muted-foreground">Multi-format support (PDF, DOCX, TXT) with secure upload handling via Google Cloud Storage. Files are processed through Cloud Functions for format normalization.</p>
          </div>
          
          <div className="border-l-4 border-accent pl-6">
            <h4 className="font-semibold mb-2">Vector Embedding & Indexing</h4>
            <p className="text-muted-foreground">Documents are chunked and embedded using Gemini embeddings, then indexed in BigQuery ML for efficient semantic search and retrieval.</p>
          </div>
          
          <div className="border-l-4 border-accent pl-6">
            <h4 className="font-semibold mb-2">Citation-Linked Generation</h4>
            <p className="text-muted-foreground">When users interact through chat, the system retrieves relevant document segments and passes them to Gemini LLM, which generates responses while maintaining source citations.</p>
          </div>
          
          <div className="border-l-4 border-accent pl-6">
            <h4 className="font-semibold mb-2">Multi-Modal Output</h4>
            <p className="text-muted-foreground">Beyond text responses, the system generates study guides, summaries, and Audio Overviews using text-to-speech synthesis with source attribution.</p>
          </div>
        </div>
      </section>

      {/* Chat Experience Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Chat & Interaction Design</h2>
        
        <p className="text-base leading-relaxed text-muted-foreground mb-8">
          Worked closely with product teams to design intuitive chat experiences powered by Next.js and Material UI. The interface enables seamless interaction with AI-powered insights while maintaining full visibility into source documents.
        </p>

        <div className="grid gap-6">
          <div className="border border-border rounded p-6">
            <h4 className="font-semibold mb-2">Real-time Streaming Responses</h4>
            <p className="text-sm text-muted-foreground">Server-sent events (SSE) enable live response streaming, providing instant feedback as the LLM generates insights with inline citations.</p>
          </div>
          
          <div className="border border-border rounded p-6">
            <h4 className="font-semibold mb-2">Citation Integration</h4>
            <p className="text-sm text-muted-foreground">Every response includes direct links to source segments, enabling users to verify claims and explore deeper context with single clicks.</p>
          </div>
          
          <div className="border border-border rounded p-6">
            <h4 className="font-semibold mb-2">Context Awareness</h4>
            <p className="text-sm text-muted-foreground">Multi-turn conversations maintain conversation history and document context, allowing the AI to understand nuanced follow-up questions across sessions.</p>
          </div>

          <div className="border border-border rounded p-6">
            <h4 className="font-semibold mb-2">User Feedback Loop</h4>
            <p className="text-sm text-muted-foreground">Analyzed user feedback pipelines through Pub/Sub and Dataflow, automating model-driven feature ranking and response optimization.</p>
          </div>
        </div>
      </section>

      {/* Observability Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Production & Reliability</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Observability & Monitoring</h3>
            <p className="text-muted-foreground mb-4">
              Configured observability and alerting through Cloud Monitoring and Error Reporting, ensuring low-latency, high-reliability responses for millions of users during public beta launches.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">A/B Testing & Model Optimization</h3>
            <p className="text-muted-foreground mb-4">
              Executed A/B testing frameworks using Cloud Run and Firestore, validating LLM model improvements across multilingual datasets and optimizing response quality in real-time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Enterprise Security & SSO</h3>
            <p className="text-muted-foreground mb-4">
              Improved authentication and SSO support using OAuth2.0, Firebase Auth, and Identity Platform for secure enterprise access. Documented technical architecture and ML data governance models for enterprise and compliance audits.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Impact & Recognition</h2>
        
        <div className="bg-muted/30 border border-border rounded p-8">
          <p className="text-lg leading-relaxed mb-6">
            NotebookLM was recognized as one of TIME's Best Inventions of 2024, becoming a viral AI product that transformed how millions of users synthesize and learn from information. The product demonstrated that thoughtful engineering combined with user-centric design could unlock entirely new possibilities in AI-powered productivity.
          </p>
          
          <div className="space-y-3">
            <p><strong>Users impacted:</strong> Millions of students, researchers, and knowledge workers</p>
            <p><strong>Processing capability:</strong> 40% improvement in document processing throughput</p>
            <p><strong>Deployment:</strong> Global GKE clusters handling massive scale during viral growth</p>
            <p><strong>Recognition:</strong> TIME's Best Inventions of 2024</p>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-border" id="takeaways">
        <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">1. AI-Native Architecture</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building net-new, AI-native products requires fundamentally rethinking traditional architectures. NotebookLM wasn't just "AI on top of existing tools"—it required reimagining data pipelines, retrieval systems, and user interactions from first principles to bridge the gap between state-of-the-art research and human problems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">2. Source Grounding is Essential</h3>
            <p className="text-muted-foreground leading-relaxed">
              The most powerful insight from building NotebookLM was that users don't just want AI responses—they want verifiable, source-grounded intelligence. The RAG pipeline with citation linking transformed the product from a generic AI chatbot into a trusted research assistant.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">3. Scale with Intention</h3>
            <p className="text-muted-foreground leading-relaxed">
              Going viral taught us that infrastructure must be intentional from day one. Using GKE with proper observability, auto-scaling policies, and disaster recovery ensured NotebookLM could scale from thousands to millions of users without degradation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">4. User Feedback Drives Everything</h3>
            <p className="text-muted-foreground leading-relaxed">
              The most impactful features (like inline citations) came directly from analyzing user feedback pipelines. By instrumenting user behavior and automating feature ranking, we could quickly identify what mattered most and iterate with confidence.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
