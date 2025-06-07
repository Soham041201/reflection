const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
    style={{ width: "16px", height: "16px" }}
    className="w-4 h-4"
  >
    <path
      d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
      data-name="Right"
    />
  </svg>
);

export default function Work() {
  const workExperience = [
    {
      company: "kodo",
      role: "associate software engineer",
      period: "2023 - present",
      description:
        "currently shipping cool stuff and building production-ready features",
      achievements: [
        "promoted from internship to full-time role",
        "collaborating with cross-functional teams",
        "developing scalable web applications",
      ],
      current: true,
    },
    {
      company: "dukaan",
      role: "software engineer intern",
      period: "2023",
      description:
        "worked on dukaan help, a chatbot for resolving customer support tickets",
      achievements: [
        "built chatbot for customer support automation",
        "collaborated with talented team members",
        "gained experience in customer-facing products",
      ],
      current: false,
    },
  ];

  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-4xl">
        {/* Header */}
        <section className="mb-16 mt-8">
          <h1 className="text-6xl mb-8">work</h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            building software solutions and growing as a developer in
            early-stage companies focused on innovation.
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">experience</h2>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="relative">
                <div className="p-6 border border-border rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl">{job.company}</h3>
                        {job.current && (
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full">
                            current
                          </span>
                        )}
                      </div>
                      <p className="text-xl text-primary mb-2">{job.role}</p>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <span className="text-sm text-muted-foreground font-mono">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg mb-3">key contributions</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary mt-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Teaching */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">teaching & mentoring</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">full-stack bootcamp</h3>
              <p className="text-muted-foreground mb-4">
                conducted 2-day intensive bootcamp covering html basics to
                advanced javascript bundling techniques.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>• modern web development workflows</p>
                <p>• javascript fundamentals to advanced concepts</p>
                <p>• hands-on project-based learning</p>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">developer mentoring</h3>
              <p className="text-muted-foreground mb-4">
                helping aspiring developers transition into tech through
                guidance and knowledge sharing.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>• career guidance and portfolio reviews</p>
                <p>• technical interview preparation</p>
                <p>• open source contribution guidance</p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Professional Growth */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">growth & learning</h2>

          <div className="p-6 bg-muted/20 rounded-lg">
            <h3 className="text-xl mb-4">current focus areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-primary">
                  technical skills
                </h4>
                <p className="text-muted-foreground text-base">
                  deepening expertise in full-stack development, system design,
                  and modern web technologies.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-primary">soft skills</h4>
                <p className="text-muted-foreground text-base">
                  improving communication, team collaboration, and technical
                  leadership capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="p-8 bg-muted/20 rounded-lg text-center">
            <h2 className="text-3xl mb-4">let's work together</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              interested in collaborating or discussing opportunities? let's
              connect and explore how we can build something great.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:sattigeri.soham@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <span>get in touch</span>
                <ArrowIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/soham-sattigeri-062bb1179/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span>connect on linkedin</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
