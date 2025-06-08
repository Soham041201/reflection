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

export default function ConvenientlyAbsurd() {
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
              <span className="text-muted-foreground">October 6, 2024</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">6 min read</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              Conveniently Absurd
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A philosophical examination of how we navigate the absurdity of
              existence by creating convenient narratives and meaning structures
              that help us function in an inherently meaningless world.
            </p>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none text-lg leading-relaxed">
          <p className="text-muted-foreground italic mb-8">
            For reader's context, I'm a 22-year-old software engineer who has
            interest in philosophy, software and music. This attempt is a way to
            pen my thoughts which I go through in my day-to-day life. This is my
            second article where I attempt to pen my thoughts on something
            rather unique: Absurdity.
          </p>

          <p>
            Life is conveniently unconventional. There are times when things are
            going as per your plan, and on the flip side, there are times when
            you have no clue what's happening with your life.
          </p>

          <p>
            I wouldn't call myself an absurdist; rather, I would say I am a
            convenient absurdist. I'm not an absurdist when things are going the
            way they are intended to go. And when they aren't, I become an
            absurdist all over again. This simple switch makes me fall in love
            with this mental model all over again. Over the last week or so, I
            have been going deep within my thoughts about this topic and felt
            like penning this down.
          </p>

          <p>
            Humans are absurd creatures, and most of us are absurd in our own
            ways. The reason why I say this is simple: we aren't sure about what
            we are exactly going to say while we are thinking about it.
          </p>

          <p>Confused? Let me break this down for you.</p>

          <p>
            Consider this: think about something you truly love. Now, say your
            thoughts out loud. The next thing I want you to do is write the same
            thing down. Not the thing which you are saying, but your thought. If
            you try to do this religiously, you will be fascinated to discover
            that all three contents are different in nature. Maybe slightly
            different, but different.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-8 text-xl italic text-primary">
            Thoughts act like prompts to your writings
          </blockquote>

          <p>
            Our brain is made up of millions of neural networks working in
            parallel. When we try to write our thoughts down on a piece of
            paper, I think it initially stimulates hundreds or thousands of
            neural networks within our brain to find the next perceptron to
            build a pattern.
          </p>

          <p>
            Life is about experiencing the same absurdisms over and over again.
            The only thing that changes is the people and the context around it.
          </p>

          <p>
            Absurdism, I feel, isn't real. This might feel paradoxical, but it's
            true! Nothing is actually absurd. It's just patterns which we cannot
            predict but have been happening in the universe for a long, long
            time. It might have happened to you for the first time, and that's
            great, but from the universe's perspective, that's just another
            glimpse of the past.
          </p>

          <p>
            From an analytical perspective, absurdism is what makes us human.
            The random incidences, the surprises, meeting new people who become
            the best of your friends is just what makes us human. It's all about
            the perspective you look at.
          </p>

          <p className="text-center font-serif text-xl mt-8">
            Food for thought.
          </p>
        </article>

        <MediumAttribution mediumUrl="https://medium.com/@sattigeri.soham/conveniently-absurd-25b4d63f66dd" />

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
                href="https://medium.com/@sattigeri.soham/conveniently-absurd-25b4d63f66dd"
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
