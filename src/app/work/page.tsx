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
  // Add custom CSS animations
  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;

  // Insert styles
  if (typeof document !== "undefined") {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = animationStyles;
    if (!document.head.querySelector("style[data-work-animations]")) {
      styleSheet.setAttribute("data-work-animations", "true");
      document.head.appendChild(styleSheet);
    }
  }
  const workExperience = [
    {
      company: "kily.ai",
      role: "founding team engineer",
      period: "2025 - present",
      link: "https://kily.ai",
      description:
        "as a part of the founding time, i'm currently spending my time building the infra for the ads ecosystem. my major work revolves around building data pipelines and services to ingest and process data from various sources.",
      achievements: [
        "build the entire e2e data pipeline from `git init` to ingest data from amazon ads, amazon sp, blinkit, swiggy instamart, etc currently which handles a traffic of around 100k records per day.",
        "rewritten the entire chat interface from http stream API to websocket API to handle real-time communication with the users.",
        "worked on the categorization system of search keywords to categorise them into classes giving users insight on their ads performance.",
        "revamped the entire front-end interface to support API caching, middleware integration, and other features to improve the user experience.",
      ],
      current: true,
    },
    {
      company: "kodo",
      role: "associate software engineer",
      period: "2023 - 2025",
      link: "https://kodo.com",
      description:
        "internship turned fulltime, kodo was my first gig as an engineer where i build (or atleast tried to) the next generation form platform",
      achievements: [
        "Engineered custom components in Formio to support the unique requirements of the P2P process, ensuring efficient handling of form data and integration with existing systems.",
        "Designed and optimized microservices communication using RabbitMQ, ensuring reliable, asynchronous message processing between procurement services for improved scalability and fault tolerance.",
      ],
      current: false,
    },
    {
      company: "dukaan",
      role: "software engineer intern",
      period: "2023",
      link: "https://dukaan.com",
      description:
        "worked on 'luna', a dukaan help chatbot for resolving customer support tickets",
      achievements: [
        "Built a Python back-end service using FastAPI, integrating WebSockets to handle 1,000+ daily conversations for over 5,000 sellers, ensuring real-time chatbot interactions.",
        "Implemented a Retrieval-Augmented Generation (RAG) pipeline with OpenAI and K-Nearest Neighbors (KNN), enhancing chatbot responses with contextual understanding.",
        "Developed a PostgreSQL-based indexer to structure vendor data, leveraging Pinecone for semantic vector embedding to optimize retrieval and fine-tuning.",
      ],
      current: false,
    },
    {
      company: "leazkart",
      role: "co-founder/cto",
      period: "2023 - 2024",
      link: "https://leazkart.com",
      description: "an attempt to build an airbnb but for vehicles",
      achievements: [
        "Led the end-to-end development of Leazkart's mobile application, mentoring a team while architecting complex features, and implemented a real-time vehicle availability system using WebSockets and Express.js.",
        "Demonstrated technical versatility by driving backend development and orchestrating a cost-effective DevOps infrastructure on Google Cloud Engine, including CI/CD pipelines and custom subnet architecture.",
        "Spearheaded the selection of an optimized technology stack, aligning it with business objectives and market demands, and collaborated closely with stakeholders to refine project requirements while recruiting and nurturing specialized talent.",
        "Assumed co-founder responsibilities, balancing technical leadership with strategic business management, conducting thorough market analyses, and maintaining strong investor relations through regular updates on product development and strategic initiatives.",
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
          <p className="text-xl text-muted-foreground leading-relaxed">
            my work has been revolving around early-stage startups in their 0-1
            stage. while i obsess over technology, i take ownership in my work
            in building tools for the long term.
          </p>
          <br />

          <p className="text-xl text-muted-foreground leading-relaxed">
            here are the few spaceships i have been a part of till date
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-8 transition-all duration-500 hover:transform hover:translate-y-[-2px]"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                  }}
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 flex items-center justify-center w-12">
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                        job.current
                          ? "bg-primary border-primary"
                          : "bg-background border-border group-hover:bg-primary group-hover:border-primary"
                      }`}
                    ></div>
                    {job.current && (
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary/20 animate-pulse"></div>
                    )}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 p-6 rounded-lg transition-all duration-300 group-hover:bg-muted/20 border border-transparent group-hover:border-primary/20">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-serif text-foreground hover:text-primary transition-colors duration-300 group-hover:underline"
                          >
                            {job.company}
                          </a>
                          {job.current && (
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full animate-pulse">
                              current
                            </span>
                          )}
                        </div>
                        <p className="text-xl text-primary mb-2 group-hover:text-primary/80 transition-colors">
                          {job.role}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 md:text-right flex-shrink-0">
                        <span className="text-sm text-muted-foreground font-mono bg-muted/30 px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                          {job.period}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg mb-4 font-serif text-primary opacity-90">
                        key contributions
                      </h4>
                      <div className="space-y-4">
                        {job.achievements.map((achievement, i) => (
                          <p
                            key={i}
                            className="text-muted-foreground leading-relaxed text-base border-l-2 border-muted/30 pl-4 group-hover:border-primary/30 transition-colors duration-300"
                            style={{
                              animation: `scaleIn 0.4s ease-out ${
                                index * 0.2 + i * 0.1 + 0.3
                              }s both`,
                            }}
                          >
                            {achievement}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

        {/* Connect */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">let's connect</h2>
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground mb-6">
              interested in collaborating or just having a chat?
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:sattigeri.soham@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors font-serif text-xl"
              >
                email
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
