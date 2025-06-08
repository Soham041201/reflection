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

export default function InformationKnowledgeAndWisdom() {
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
              <span className="text-muted-foreground">October 13, 2024</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">5 min read</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              Information, Knowledge, and Wisdom
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              An exploration of the hierarchical relationship between
              information, knowledge, and wisdom. Understanding how data
              transforms into insight and eventually into profound understanding
              that guides our decisions.
            </p>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none text-lg leading-relaxed">
          <p className="text-muted-foreground italic mb-8">
            For reader's context, I'm a 22-year-old software engineer with
            interests in philosophy, software, and music. This article is an
            attempt to pen my thoughts on a topic I contemplate in my day-to-day
            life. It's my third piece where I explore ideas that often cross our
            minds. While most of these thoughts are just noise, a handful are
            worth sharing.
          </p>

          <p>
            Information, knowledge, and wisdom are integral parts of everyone's
            journey in this world. Information is the raw data available
            globally. Consider a machine learning model as an analogy:
            information is like a complete chunk of uncleaned dataset. This data
            can neither be utilized nor used to create something useful on its
            own. It needs to be refined.
          </p>

          <p>
            Selective information becomes knowledge. Knowledge is the refined
            version of information - consider it information without unnecessary
            data. Knowledge is the second-degree derivative of information,
            which people utilize. Whenever we're learning something new, we seek
            knowledge, not just information. To put it simply, information
            answers "what," while knowledge tries to answer "why."
          </p>

          <div className="bg-muted/20 p-6 rounded-lg my-8">
            <div className="space-y-4">
              <div>
                <strong className="text-primary">Information:</strong> What is
                the mind?
                <br />
                <strong className="text-primary">Knowledge:</strong> Why does
                our mind react to certain situations?
              </div>
              <div>
                <strong className="text-primary">Information:</strong> What is
                the meaning of God?
                <br />
                <strong className="text-primary">Knowledge:</strong> Why do we
                believe in God?
              </div>
            </div>
          </div>

          <p>
            Knowledge always delves deeper than information in terms of subject
            vastness. It has the potential to create millionaires and
            billionaires and crack the code of "luck."
          </p>

          <p>
            Wisdom, however, is a completely different phenomenon. It's not
            about the information you collect or the knowledge you have; it
            comes from within. In my view, wisdom is a byproduct of processing
            all the information and knowledge accumulated over years, resulting
            in something extremely pure and visionary.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-8 text-xl italic text-primary">
            Wisdom can never be passed on. It can only be created within
          </blockquote>

          <p>
            Wisdom can never be directly passed on; it can only be created
            within oneself. Wisdom consumed becomes knowledge, and knowledge
            consumed becomes information. Whenever a person attempts to impart
            wisdom to the world, it transforms into knowledge. Wisdom can never
            be a two-way flow of intellectual energy - only one way. It can only
            be an outflow of thoughts brewed in your existence.
          </p>

          <p>
            Returning to the machine learning analogy: information is the raw
            dataset, knowledge is the cleaned dataset used to train the model,
            while wisdom represents the predictions and outputs from the model.
            (This is an extremely simplified example and not entirely accurate,
            but I think you get the idea.) The catch here is that in the case of
            real humans, the parameters and variables are in a black box. That's
            what makes wisdom scarce and unique. Wisdom can never be generated
            by any transformer models due to this fact - not now, and perhaps
            never.
          </p>

          <p className="text-center font-serif text-xl mt-8">
            food for thought.
          </p>
        </article>

        <MediumAttribution mediumUrl="https://medium.com/@sattigeri.soham/information-knowledge-and-wisdom-4d9b196c66c2" />

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
                href="https://medium.com/@sattigeri.soham/information-knowledge-and-wisdom-4d9b196c66c2"
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
