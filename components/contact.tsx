export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border/40">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl">
            I'm always interested in discussing new projects, engineering challenges, and opportunities to build innovative solutions. Feel free to reach out.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="mailto:julian.p.27@outlook.com"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Email me
          </a>
          <a 
            href="https://www.linkedin.com/in/julian-pionke-60b38339a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border rounded-md font-medium hover:bg-muted transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  )
}
