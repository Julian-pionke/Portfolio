const skillCategories = [
  {
    category: "Backend",
    skills: ["Python (FastAPI, Flask)", "Node.js (Express)", "TensorFlow", "gRPC", "GraphQL", "RESTAPIs", "Celery"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Redux", "TailwindUI", "Material UI", "TypeScript", "Flutter"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["GCP (VertexAI, Cloud Run, Pub/Sub, Firestore)", "AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Terraform"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firestore", "Redis", "BigQuery", "Cloud SQL"]
  },
  {
    category: "Specializations",
    skills: ["Healthcare Standards (FHIR, HL7, HIPAA)", "AI/ML Integration", "Microservices Architecture", "Security & Compliance", "Payment Systems (Stripe, PayPal)"]
  }
]

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-border/40">
      <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="font-semibold text-lg">{cat.category}</h3>
            <ul className="space-y-2">
              {cat.skills.map((skill, i) => (
                <li key={i} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary">▪</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
