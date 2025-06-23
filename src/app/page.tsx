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
        <h1 className="text-7xl mb-8 leading-tight">
          hi friend, i'm soham sattigeri
        </h1>
        <div className="text-xl md:text-2xl mb-8 text-muted-foreground">
          <p>
            i'm currently a founding team engineer at{" "}
            <a
              href="https://kily.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              kily.ai
            </a>
            , where i'm building and shipping a bunch of services for the ads
            ecosystem.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Quick Links */}
      <section className="mb-[8rem]">
        <h2 className="text-xl md:text-2xl mb-8">here's a bit more about me</h2>
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
              thoughts on tech, philosophy, research, and growth
            </p>
          </Link>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Featured Articles */}
      <section className="mb-[8rem]">
        <h2 className="text-3xl mb-8">recent writings</h2>

        <div className="space-y-4">
          <Link
            href="/writing/life-is-delusional"
            className="group flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted/20 hover:border-primary/30 transition-all duration-300"
          >
            <ArrowIcon />
            <div>
              <h3 className="text-xl font-serif group-hover:text-primary transition-colors">
                Life is Delusional
              </h3>
              <p className="text-muted-foreground text-sm">
                a contemplation on the necessary delusions we maintain to find
                purpose
              </p>
            </div>
          </Link>

          <Link
            href="/writing/conveniently-absurd"
            className="group flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted/20 hover:border-primary/30 transition-all duration-300"
          >
            <ArrowIcon />
            <div>
              <h3 className="text-xl font-serif group-hover:text-primary transition-colors">
                Conveniently Absurd
              </h3>
              <p className="text-muted-foreground text-sm">
                navigating absurdity by creating convenient narratives and
                meaning structures
              </p>
            </div>
          </Link>

          <Link
            href="/writing/information-knowledge-and-wisdom"
            className="group flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted/20 hover:border-primary/30 transition-all duration-300"
          >
            <ArrowIcon />
            <div>
              <h3 className="text-xl font-serif group-hover:text-primary transition-colors">
                Information, Knowledge, and Wisdom
              </h3>
              <p className="text-muted-foreground text-sm">
                exploring how data transforms into insight and profound
                understanding
              </p>
            </div>
          </Link>

          <Link
            href="/writing/the-joy-of-writing-code"
            className="group flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted/20 hover:border-primary/30 transition-all duration-300"
          >
            <ArrowIcon />
            <div>
              <h3 className="text-xl font-serif group-hover:text-primary transition-colors">
                The Joy of Writing Code
              </h3>
              <p className="text-muted-foreground text-sm">
                reflecting on the fundamental excitement that drives quality
                software craftsmanship
              </p>
            </div>
          </Link>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Connect */}
      <section className="mb-[6rem]">
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
            <Link
              href="/contact"
              className="text-primary hover:text-primary/80 transition-colors font-serif text-xl"
            >
              more ways to connect
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
