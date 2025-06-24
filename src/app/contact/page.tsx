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

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
  </svg>
);

export default function Contact() {
  const contactMethods = [
    {
      platform: "Email",
      description: "best for project inquiries and collaborations",
      contact: "sattigeri.soham@gmail.com",
      href: "mailto:sattigeri.soham@gmail.com",
      icon: <EmailIcon />,
      primary: true,
    },
    {
      platform: "LinkedIn",
      description: "professional networking and career updates",
      contact: "linkedin.com/in/soham-sattigeri-062bb1179",
      href: "https://www.linkedin.com/in/soham-sattigeri-062bb1179/",
      icon: <LinkedInIcon />,
      primary: false,
    },
    {
      platform: "GitHub",
      description: "code repositories and open source work",
      contact: "github.com/Soham041201",
      href: "https://github.com/Soham041201",
      icon: <GithubIcon />,
      primary: false,
    },
    {
      platform: "Twitter / X",
      description: "thoughts and quick updates",
      contact: "@SattigeriSoham",
      href: "https://x.com/SattigeriSoham",
      icon: <TwitterIcon />,
      primary: false,
    },
    {
      platform: "Medium",
      description: "philosophical writings and technical insights",
      contact: "@sattigeri.soham",
      href: "https://medium.com/@sattigeri.soham",
      icon: <MediumIcon />,
      primary: false,
    },
  ];

  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-4xl">
        {/* Header */}
        <section className="mb-16 mt-8">
          <h1 className="text-6xl mb-8">let's connect</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            open to discussing projects, collaborations, or simply chatting
            about technology and development.
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Quick Contact */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">get in touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.platform}
                href={method.href}
                target={method.platform !== "Email" ? "_blank" : undefined}
                rel={
                  method.platform !== "Email"
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group p-6 border border-border rounded-lg hover:bg-muted/20 hover:border-primary/30 transition-all duration-200 ${
                  method.primary ? "ring-2 ring-primary/20 bg-primary/5" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-medium">{method.platform}</h3>
                      {method.primary && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          preferred
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3 text-base leading-relaxed">
                      {method.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors">
                      <span className="text-sm font-mono">
                        {method.contact}
                      </span>
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Location & Availability */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl mb-6">availability</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary">📍</span>
                  <div>
                    <p className="font-medium">pune, india</p>
                    <p className="text-muted-foreground text-sm">
                      ist (utc+5:30)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">💼</span>
                  <div>
                    <p className="font-medium">
                      founding software engineer at kily.ai
                    </p>
                    <p className="text-muted-foreground text-sm">
                      currently shipping cool stuff
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">☕</span>
                  <div>
                    <p className="font-medium">open for coffee</p>
                    <p className="text-muted-foreground text-sm">
                      feel free to reach out anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl mb-6">let's build together</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                whether you're a developer, founder, or have an interesting
                project idea, let's start a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:sattigeri.soham@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <EmailIcon />
                  <span>send email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/soham-sattigeri-062bb1179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted/20 transition-colors"
                >
                  <LinkedInIcon />
                  <span>connect</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
