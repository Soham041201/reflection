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

export default function LifeIsDelusional() {
  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <nav className="mb-8">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-base"
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
            back to writing
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              philosophy
            </span>
            <span className="text-muted-foreground">September 29, 2024</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
              4 min read
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
            Life is Delusional
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A contemplation on the necessary delusions we maintain to find
            purpose and direction. Examining how our constructed realities and
            beliefs shape our experience of existence.
          </p>
        </header>

        <div className="section-divider mb-12"></div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            For reader's context, I'm a 22-year-old software engineer who has
            interest in philosophy, software and music. This attempt is a way to
            pen my thoughts which I go through in my day-to-day life. Since this
            is my first article, this might be a little novice and inarticulate.
            There might not be any fancy lines, famous quotes or pictures, but I
            will try my best to keep the content interesting.
          </p>

          <p className="leading-relaxed mb-8">
            Before even starting out with this article, in my mind, this article
            has gotten millions of views, hundreds and thousands of shares, and
            a lot of comments. This is how delusional we have become in reality.
            A while back, I used to think that it's just me, but now I have come
            to a consensus that it's true for most of us.
          </p>

          <p className="leading-relaxed mb-8">
            Computer Science undergrad freshmen, while learning their first
            "Hello world" program (the most basic computer program) feel
            programming is easy and getting into any big tech is a piece of
            cake. People who go to the gym for merely two days start staring at
            themselves in the mirrors for two hours, checking if there is any
            fat loss or muscle growth.
          </p>

          <p className="leading-relaxed mb-8">
            When I sit down and try to think about the reason why this might be
            happening to all of us, a few lines of thought come to my mind.
          </p>

          <h2 className="text-3xl mb-6 mt-12">Success before process</h2>

          <p className="leading-relaxed mb-8">
            All of us, in some part of the brain, want to taste the butter
            without boiling the milk. What this means is, we wish to see success
            but not go through the hard work and dedication that it takes to
            reach there. Due to social media (blaming everything on social media
            has become so easy, isn't it?), success is vividly visible all over
            the internet without any context. Be it successful entrepreneurs,
            artists, CEOs, everyone's success is visible with a click. This
            overexposure of knowledge leads to delusion.
          </p>

          <p className="leading-relaxed mb-8">
            Spirituality talks about delusion as well. As I perceive it, "being
            in the present" is just the simpler way of saying, "Buddy, don't be
            delusional". The famous quote in the Bhagavad Gita:
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/20 italic">
            <p className="text-xl leading-relaxed">
              कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भुर्मा ते
              संगोऽस्त्वकर्मणि ॥
            </p>
          </blockquote>

          <p className="leading-relaxed mb-8">
            was said around 5000 years ago, which means even our ancestors were
            delusional!
          </p>

          <p className="leading-relaxed mb-8">
            The dilemma here is that the ideas of "living in the present" and
            "not thinking about the future" form a double-edged sword when taken
            out of context. Consciousness, the driving force of human
            civilization, plays a major role here. Living in the present without
            consciousness is the worst thing that can happen to anyone in
            society.
          </p>

          <p className="leading-relaxed mb-8">
            Crimes are an excellent example of this analogy. A criminal does not
            think about the future and commits something heinous which the
            person is going to regret for the rest of their life. Well, in this
            case, is being delusional good?
          </p>

          <p className="leading-relaxed mb-8">
            Steve Jobs, in one of his excerpts, talks about the difference
            between doers and thinkers where he elaborates on why someone should
            focus on doing rather than thinking.
          </p>

          <h2 className="text-3xl mb-6 mt-12">The flip side of delusion</h2>

          <p className="leading-relaxed mb-8">
            Life is all about paradoxes, and delusion isn't an exception as
            well.
          </p>

          <p className="leading-relaxed mb-8">
            Osho, in one of his discourses, talks about an instance in Lord
            Mahavir's life. According to him, Osho says, "Take one step and you
            have reached your destination". To an analytical mind, this sounds
            absurd. But if we think deeper, this actually makes a lot of sense.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/20">
            <p className="text-lg leading-relaxed italic">
              Thoughts are perceived from the perspective of the author.
            </p>
          </blockquote>

          <p className="leading-relaxed mb-8">
            Mahavir, being an enlightened person, would have been in his divine
            world when he might have said this. For him and his disciples, it
            makes absolute sense! This thought presumes that you are focused and
            determined and so full of consciousness, that all you need to do is
            take one step in the right direction.
          </p>

          <p className="leading-relaxed mb-8">
            Bringing this thought to today, the chances of a person going to the
            gym are higher if the person takes a gym subscription compared to
            the person who doesn't. I would like to go half a step back. Just
            merely thinking about going to the gym is better than not even
            thinking about it. This hypothesis takes us back to the same
            paradox:
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/20">
            <p className="text-xl leading-relaxed">
              Is being delusional good? Or is being delusional bad?
            </p>
          </blockquote>

          <p className="leading-relaxed mb-8 italic text-center">
            food for thought.
          </p>
        </article>

        <div className="section-divider my-12"></div>

        <MediumAttribution mediumUrl="https://medium.com/@sattigeri.soham/life-is-delusional-f52f0939d953" />

        {/* Navigation */}
        <section className="mb-16">
          <div className="flex justify-between items-center">
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
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
              all articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>get in touch</span>
              <ArrowIcon />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
