import Link from "next/link";
import MediumAttribution from "@/components/MediumAttribution";

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
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function TheJoyOfWritingCode() {
  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-3xl">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              className="w-4 h-4 rotate-180"
            >
              <path
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </svg>
            <span>back to writing</span>
          </Link>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                philosophy
              </span>
              <span className="text-muted-foreground">October 20, 2024</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">4 min read</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              The Joy of Writing Code
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A reflection on the fundamental excitement that drives quality
              software craftsmanship. Exploring how earning money through
              software is the outcome, not the goal, and what it means to truly
              love the craft of coding.
            </p>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none text-lg leading-relaxed">
          <p className="text-muted-foreground italic mb-8">
            For reader's context, I'm a 22-year-old software engineer with
            interests in philosophy, software, and music. This article is an
            attempt to pen my thoughts on a topic I contemplate in my day-to-day
            life. It's my fourth piece where I reflect on my professional
            journey from an eagle's eye view. As always, while most of these
            thoughts are just noise, a handful are worth sharing.
          </p>

          <p>
            Having immersed myself in the world of tech and software for about
            two years now, including internships, I've often contemplated what
            crafting good software (note: software, not just code) is all about.
            My journey of writing software began in my freshman year of college,
            and this unwavering devotion to software craftsmanship continues to
            this day. During my time as a Teaching Assistant under one of my
            professors in my pre-final year of engineering, and while conducting
            workshops, I would often elaborate on the sheer joy of writing code.
          </p>

          <p>
            It's this fundamental excitement that drives me to write
            high-quality code. I frequently share this perspective with my
            juniors who are embarking on their coding journey.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-8 text-xl italic text-primary">
            Earning money through software is the outcome, not the goal.
          </blockquote>

          <p>
            As a young professional, you build projects and software simply for
            the joy of creation. While you gain invaluable expertise through
            this process, the crucial aspect is falling in love with the process
            itself. In tech, I believe, money cannot be the primary motivation
            for learning.
          </p>

          <p>
            Furthermore, crafting code is akin to constructing with LEGO blocks.
            When you begin building a website, for instance, it's like
            connecting two LEGO pieces. Gradually, these pieces take shape,
            forming a complete structure. The joy a toddler experiences while
            building a house with LEGO mirrors the satisfaction an engineer
            feels after deploying software to production.
          </p>

          <p>
            While exploring any new technology, I search for those "Aha!"
            moments. Whether it's unraveling the intricacies of browser
            architecture, deciphering the underlying mechanisms of Kubernetes,
            or exploring any other technology, these moments of revelation are
            precious. This is also a note to my future self - Soham 15–20 years
            from now - who might be reading this article while being comfortable
            in life, still searching for the next moment of technical
            enlightenment.
          </p>

          <p>
            If you're still reading this, I sincerely thank you for your
            support. With this modest article, I complete my first month of
            publishing articles every weekend. This practice has not only helped
            me articulate my thoughts but has also enabled me to think more
            clearly about my goals and objectives.
          </p>

          <p className="text-center font-serif text-xl mt-8">Peace.</p>
        </article>

        <MediumAttribution mediumUrl="https://medium.com/@sattigeri.soham/the-joy-of-writing-code-662a8312f2cd" />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                className="w-4 h-4 rotate-180"
              >
                <path
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
              <span>all articles</span>
            </Link>

            <div className="flex gap-4">
              <a
                href="https://medium.com/@sattigeri.soham/the-joy-of-writing-code-662a8312f2cd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span>view on medium</span>
                <ExternalLinkIcon />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span>discuss this article</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
