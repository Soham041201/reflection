export default function About() {
  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-4xl">
        {/* Header */}
        <section className="mb-16 mt-8">
          <h1 className="text-6xl mb-8">about me</h1>
        </section>

        <div className="section-divider"></div>

        {/* Introduction */}
        <section className="mb-16">
          <p className="text-xl leading-relaxed mb-6">
            hi, i'm soham sattigeri! these days i have been spending my time
            understanding the ads ecosystem in the era of ai and quick-commerce.
            i am a nerd for philosophy and love to code.
          </p>
          <p className="text-xl leading-relaxed mb-6">
            my journey in tech started with a angela yu's flutter course, which
            had me drolling down in the world of computer science and
            engineering. since then, i have worked in a bunch of startups, had
            my own stint at a failed startup as a cto and 2 years later, i'm
            here.
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">education</h2>
          <div className="p-6 border border-border rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-medium">
                vishwakarma institute of technology
              </h3>
              <span className="text-muted-foreground">pune, india</span>
            </div>
            <p className="text-muted-foreground mb-2">
              bachelor's degree ~ electronics and telecommunication engineering
            </p>
            <p className="text-lg">
              while my degree has no relevance to what i work in, my interests
              in soldering wires, breaking rasberry pies and playing with 8081
              microcontrollers continue till date.
            </p>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">what drives me</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">1st principles</h3>
              <p className="text-muted-foreground">
                i may not know everything, but i know how to distil a topic into
                smaller problems. this mental model helps me understand the root
                of things and build solutions that are more robust and scalable.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">
                agency over accountability
              </h3>
              <p className="text-muted-foreground">
                i believe in taking ownership of my work and being accountable
                for the results. results &gt;&gt; process.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">curiosity</h3>
              <p className="text-muted-foreground">
                i believe in staying curious and learning new things. i believe
                in the power of curiosity and the ability to ask the right
                questions.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Fun Facts */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">beyond code</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-4">
              when i'm not coding, you'll find me sipping on a cup hot brew of
              coffee, reading about fancy technologies or watching sam altman
              talking about AGI. i love reading and enjoy spending time with
              students to understand their thoughts and their approach in
              learning.
            </p>
            <p className="text-xl leading-relaxed">
              i'm always excited to discuss new ideas, collaborate on
              interesting projects, or simply chat about the latest developments
              in web technology over a cup of coffee.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
