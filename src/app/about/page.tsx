export default function About() {
  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-4xl">
        {/* Header */}
        <section className="mb-16 mt-8">
          <h1 className="text-6xl mb-8">about me</h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            passionate software engineer building impactful web experiences and
            sharing knowledge with the developer community.
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Introduction */}
        <section className="mb-16">
          <p className="text-xl leading-relaxed mb-6">
            hi, i'm soham! currently working as an associate software engineer
            at
            <span className="text-primary font-medium"> kodo</span>, where i
            build production-ready features and collaborate with talented teams
            to create meaningful digital experiences.
          </p>
          <p className="text-xl leading-relaxed mb-6">
            my journey in tech started with a curiosity about how websites work,
            which led me to dive deep into full-stack development. i love the
            intersection of design and functionality, always striving to create
            applications that are both beautiful and performant.
          </p>
          <p className="text-xl leading-relaxed">
            beyond coding, i'm passionate about teaching and mentoring. i've
            conducted bootcamps and workshops, sharing knowledge about modern
            web technologies and helping aspiring developers kickstart their
            careers.
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
            <p className="text-muted-foreground mb-2">bachelor's degree</p>
            <p className="text-lg">
              gained strong foundations in computer science, data structures,
              algorithms, and software engineering principles.
            </p>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">what drives me</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">continuous learning</h3>
              <p className="text-muted-foreground">
                technology evolves rapidly, and i believe in staying curious and
                adapting to new tools and methodologies.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">quality craft</h3>
              <p className="text-muted-foreground">
                i take pride in writing clean, maintainable code and creating
                experiences that users genuinely enjoy.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl mb-3 text-primary">knowledge sharing</h3>
              <p className="text-muted-foreground">
                teaching and mentoring others not only helps the community but
                also strengthens my own understanding.
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
              when i'm not coding, you'll find me exploring new technologies,
              reading about industry trends, or planning my next workshop. i
              believe in maintaining a healthy work-life balance and enjoy
              connecting with fellow developers in the community.
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
