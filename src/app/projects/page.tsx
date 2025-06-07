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
      title: "ShopIt",
      description:
        "A shop application designed to integrate with customers, built using Flutter/Dart. Features customer interaction capabilities and mobile-first design for seamless shopping experiences.",
      category: "mobile",
      status: "completed",
      highlights: [
        "customer integration and interaction features",
        "mobile-first design with flutter",
        "cross-platform compatibility",
        "intuitive user interface for shopping",
      ],
      githubUrl: "https://github.com/Soham041201/ShopIt",
    },
    {
      title: "Web Chat Application",
      description:
        "A real-time web chat application built with Node.js and WebSockets. Enables instant messaging with live communication features and responsive web interface.",
      category: "full-stack",
      status: "completed",
      highlights: [
        "real-time messaging with websockets",
        "node.js backend architecture",
        "responsive web interface",
        "instant communication features",
      ],
      githubUrl: "https://github.com/Soham041201/Web-Chat-App",
    },
    {
      title: "Firebase Integration Project",
      description:
        "A project exploring Firebase services and cloud integration. Demonstrates modern backend-as-a-service implementation with real-time data handling.",
      category: "backend",
      status: "completed",
      highlights: [
        "firebase services integration",
        "cloud-based data management",
        "real-time database operations",
        "scalable backend architecture",
      ],
      githubUrl: "https://github.com/Soham041201/FireBase",
    },
    {
      title: "NoteMe - Automated Note Maker",
      description:
        "An automated note-making application that streamlines the process of creating and organizing notes. Contributes to improved productivity and note management.",
      category: "productivity",
      status: "open source",
      highlights: [
        "automated note generation",
        "organized note management system",
        "productivity enhancement features",
        "collaborative development (forked project)",
      ],
      githubUrl: "https://github.com/Soham041201/noteme-1",
    },
  ];

  const openSourceContributions = [
    {
      project: "Snake Game",
      description:
        "contributed to classic snake game implementation with improved features",
      type: "game development",
      githubUrl: "https://github.com/Soham041201/Snake-Game",
    },
    {
      project: "Studify",
      description: "participated in educational platform development",
      type: "education tech",
      githubUrl: "https://github.com/Soham041201/Studify",
    },
  ];

  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-4xl">
        {/* Header */}
        <section className="mb-16 mt-8">
          <h1 className="text-6xl mb-8">projects</h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            building meaningful applications that solve real problems and
            showcase modern web development practices.
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
                    >
                      <GithubIcon />
                      <span className="text-sm">code</span>
                    </a>
                    {project.status !== "open source" && (
                      <button className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-200">
                        <ExternalLinkIcon />
                        <span className="text-sm">demo</span>
                      </button>
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
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Open Source */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">open source contributions</h2>

          <div className="space-y-4">
            {openSourceContributions.map((contribution, index) => (
              <div key={index} className="p-6 border border-border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl">{contribution.project}</h3>
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        {contribution.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {contribution.description}
                    </p>
                  </div>

                  <a
                    href={contribution.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted/20 transition-colors mt-4 md:mt-0"
                  >
                    <GithubIcon />
                    <span className="text-sm">view</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted/20 rounded-lg">
            <h3 className="text-xl mb-3">contributing to the community</h3>
            <p className="text-muted-foreground leading-relaxed">
              i believe in giving back to the open source community that has
              helped me learn and grow. i regularly contribute to projects,
              whether through code contributions, documentation improvements, or
              helping with issue resolution. always looking for new projects to
              contribute to and collaborate with fellow developers.
            </p>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* CTA */}
        <section className="mb-16">
          <div className="p-8 bg-muted/20 rounded-lg text-center">
            <h2 className="text-3xl mb-4">have a project in mind?</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              i'm always interested in collaborating on exciting projects or
              contributing to meaningful open source initiatives. let's build
              something amazing together!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:sattigeri.soham@gmail.com"
                className="btn-tangerine inline-flex items-center gap-2"
              >
                <span>start a conversation</span>
                <ArrowIcon />
              </a>
              <a
                href="https://github.com/Soham041201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <GithubIcon />
                <span>view all projects</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
