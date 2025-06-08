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

export default function Writing() {
  const posts = [
    {
      title: "The Joy of Writing Code",
      slug: "the-joy-of-writing-code",
      mediumUrl:
        "https://medium.com/@sattigeri.soham/the-joy-of-writing-code-662a8312f2cd",
      description:
        "A reflection on the fundamental excitement that drives quality software craftsmanship. Exploring how earning money through software is the outcome, not the goal, and what it means to truly love the craft of coding.",
      category: "philosophy",
      date: "October 20, 2024",
      readTime: "4 min read",
      featured: true,
    },
    {
      title: "Information, Knowledge, and Wisdom",
      slug: "information-knowledge-and-wisdom",
      mediumUrl:
        "https://medium.com/@sattigeri.soham/information-knowledge-and-wisdom-4d9b196c66c2",
      description:
        "An exploration of the hierarchical relationship between information, knowledge, and wisdom. Understanding how data transforms into insight and eventually into profound understanding that guides our decisions.",
      category: "philosophy",
      date: "October 13, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "Conveniently Absurd",
      slug: "conveniently-absurd",
      mediumUrl:
        "https://medium.com/@sattigeri.soham/conveniently-absurd-25b4d63f66dd",
      description:
        "A philosophical examination of how we navigate the absurdity of existence by creating convenient narratives and meaning structures that help us function in an inherently meaningless world.",
      category: "philosophy",
      date: "October 6, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      title: "Life is Delusional",
      slug: "life-is-delusional",
      mediumUrl:
        "https://medium.com/@sattigeri.soham/life-is-delusional-f52f0939d953",
      description:
        "A contemplation on the necessary delusions we maintain to find purpose and direction. Examining how our constructed realities and beliefs shape our experience of existence.",
      category: "philosophy",
      date: "September 29, 2024",
      readTime: "4 min read",
      featured: false,
    },
  ];

  const categories = ["all", "philosophy", "productivity", "career", "tech"];

  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-4xl">
        {/* Header */}
        <section className="mb-16 mt-8">
          <h1 className="text-6xl mb-8">writing</h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            thoughts on philosophy, technology, career growth, and life lessons
            from my journey as a software engineer. exploring the intersection
            of code, consciousness, and human experience.
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Medium Profile Link */}
        <section className="mb-12">
          <div className="p-6 border border-border rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">M</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Medium Publication</h3>
                <p className="text-muted-foreground">
                  Read my latest philosophical musings and technical insights
                </p>
              </div>
            </div>
            <Link
              href="https://medium.com/@sattigeri.soham"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Follow me on Medium</span>
              <ArrowIcon />
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-border hover:bg-muted/20 transition-colors capitalize"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">featured articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts
              .filter((post) => post.featured)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/writing/${post.slug}`}
                  className="group"
                >
                  <article className="p-6 border border-border rounded-lg hover:bg-muted/20 transition-colors h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {post.date}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm">read more</span>
                      <ArrowIcon />
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* All Posts */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">all articles</h2>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group block"
              >
                <article className="p-6 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <h3 className="text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <ArrowIcon />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {post.date}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Writing Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">my writing philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">
                philosophical exploration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                i explore the intersection of technology and human experience,
                questioning assumptions and seeking deeper understanding of our
                digital age and its impact on consciousness.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">
                authentic reflection
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                my writing comes from genuine curiosity and personal experience.
                i share honest reflections on the absurdities, delusions, and
                joys of modern life and software development.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">practical wisdom</h3>
              <p className="text-muted-foreground leading-relaxed">
                while exploring philosophical concepts, i aim to provide
                actionable insights that can be applied to daily life and
                professional growth as a software engineer.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">continuous learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                writing is my way of processing thoughts and sharing the journey
                of growth. i believe in learning in public and contributing to
                the collective understanding of our craft.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter/Subscribe */}
        <section className="mb-16">
          <div className="p-8 bg-muted/20 rounded-lg text-center">
            <h2 className="text-3xl mb-4">stay connected</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              follow my writing journey on medium and connect across platforms.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="https://medium.com/@sattigeri.soham"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tangerine"
              >
                follow on medium
              </Link>
              <Link
                href="https://x.com/SattigeriSoham"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted/20 transition-colors"
              >
                follow on x
              </Link>
              <Link
                href="https://github.com/Soham041201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span>github</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
