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

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "docconnect",
      description:
        "docconnect is an multi platform application which helps patients to securely share their past medical data to doctors to help them make better decisions.",
      category: "multi-platform",
      status: "in progress",
      highlights: [
        "past records management secure with end to end encryption",
        "AI first doctor assistant to give doctor better context about the patient",
        "medication reminders, test lambs integration and a lot more",
      ],
      demoUrl: "https://www.docconnect.life/#",
    },
    {
      title: "sab sunno",
      description:
        "an AI native realtime voice chat application to seamlessly integrate with your knowledge base and give you real insights in your conversations",
      category: "full-stack",
      status: "in progress",
      highlights: [
        "real-time voice chat with websockets",
        "node.js backend architecture",
        "AI first voice chat assistant",
        "instant communication features",
      ],
      demoUrl: "https://splendid-dasik-09a897.netlify.app/home",
    },
  ];

  const openSourceContributions = [];

  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-4xl">
        {/* Header */}
        <section className="mb-16 mt-8">
          <h1 className="text-6xl mb-8">projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            while most of the projects i have worked on are not public, here are
            the few projects which are ongoing and open source. these projects
            have been solely made for curiosity and scratching the itch of
            building something.
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">featured work</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-8 border border-border rounded-lg hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl">{project.title}</h3>
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          project.status === "completed"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                            : project.status === "in progress"
                            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-4 md:mt-0">
                    {project.status !== "open source" && (
                      <a
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLinkIcon />
                        <span className="text-sm">demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg mb-3 text-primary">key features</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.title === "docconnect" && (
                  <div className="border-t border-border/50 pt-6">
                    <div className="flex items-start gap-3 p-4rounded-lg">
                      <div className="flex-1">
                        <h5 className="text-base font-medium mb-2 text-foreground">
                          why docconnect?
                        </h5>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          healthcare data fragmentation costs lives and billions
                          of dollars. discover the deeper story behind this
                          solution.
                        </p>
                        <a
                          href="/writing/docconnect-revolutionizing-healthcare"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                        >
                          <span>read the full story here</span>
                          <ArrowIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground mt-8">
            you can view all my github contributions{" "}
            <a
              href="https://github.com/Soham041201"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-serif"
            >
              here
            </a>
            .
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Open Source */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">open source contributions</h2>

          <div className="p-8 bg-muted/20 rounded-lg text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              come back again here later – this section is being updated with my
              latest open source contributions and community involvement.
            </p>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Connect */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">stay connected</h2>
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground mb-6">
              follow my work and connect across platforms.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:sattigeri.soham@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors font-serif text-xl"
              >
                email
              </a>
              <a
                href="https://github.com/Soham041201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-serif text-xl"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/soham-sattigeri-062bb1179/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-serif text-xl"
              >
                linkedin
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
