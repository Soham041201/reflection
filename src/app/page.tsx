import Link from "next/link";

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

export default function Home() {
  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      {/* Hero Section */}
      <section className="mb-[8rem] mt-[6rem]">
        <h1 className="text-7xl mb-8 leading-tight">soham sattigeri</h1>
        <div className="text-2xl md:text-3xl mb-8 text-muted-foreground">
          <p>
            founding team software engineer at{" "}
            <span className="text-primary">kily.ai</span>
          </p>
        </div>
        <p className="text-xl max-w-3xl leading-relaxed text-muted-foreground">
          building and shipping products for crafting next generation ads.
        </p>
      </section>

      <div className="section-divider"></div>

      {/* Quick Links */}
      <section className="mb-[8rem]">
        <h2 className="text-3xl mb-8">explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/about"
            className="group p-6 border border-border rounded-lg hover:bg-muted/20 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <ArrowIcon />
              <h3 className="text-xl font-serif">about</h3>
            </div>
            <p className="text-muted-foreground">
              journey, education, and what drives me
            </p>
          </Link>

          <Link
            href="/work"
            className="group p-6 border border-border rounded-lg hover:bg-muted/20 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <ArrowIcon />
              <h3 className="text-xl font-serif">work</h3>
            </div>
            <p className="text-muted-foreground">
              experience at kodo, dukaan, and teaching
            </p>
          </Link>

          <Link
            href="/projects"
            className="group p-6 border border-border rounded-lg hover:bg-muted/20 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <ArrowIcon />
              <h3 className="text-xl font-serif">projects</h3>
            </div>
            <p className="text-muted-foreground">
              web apps, flutter projects, and contributions
            </p>
          </Link>

          <Link
            href="/writing"
            className="group p-6 border border-border rounded-lg hover:bg-muted/20 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <ArrowIcon />
              <h3 className="text-xl font-serif">writing</h3>
            </div>
            <p className="text-muted-foreground">
              thoughts on tech, philosophy, and growth
            </p>
          </Link>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Featured Content */}
      <section className="mb-[8rem]">
        <h2 className="text-3xl mb-8">featured</h2>

        <div className="space-y-6">
          <div className="p-6 border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                current
              </span>
              <h3 className="text-xl font-serif">
                associate software engineer at kodo
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              promoted from internship, currently shipping production features
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <span>view experience</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="p-6 border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                teaching
              </span>
              <h3 className="text-xl font-serif">full-stack bootcamp</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              2-day intensive workshop: html to advanced javascript bundling
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <span>learn more</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Connect */}
      <section className="mb-[6rem]">
        <h2 className="text-3xl mb-8">let's connect</h2>
        <div className="p-8 bg-muted/20 rounded-lg text-center">
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            interested in collaborating on projects, discussing ideas, or just
            having a chat about tech and philosophy?
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:sattigeri.soham@gmail.com"
              className="btn-tangerine inline-flex items-center gap-2"
            >
              <span>get in touch</span>
              <ArrowIcon />
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/soham-sattigeri-062bb1179/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span>linkedin</span>
                <ArrowIcon />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span>more ways to connect</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
