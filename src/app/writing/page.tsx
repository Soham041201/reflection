"use client";

import Link from "next/link";
import { useState } from "react";

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

const ResearchCard = ({
  paper,
  index,
  isExpanded,
  onToggle,
}: {
  paper: any;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <article className="group p-6 border border-border rounded-xl hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-card">
      {/* Compact Header */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-sm rounded-full font-medium border border-emerald-200">
            research publication
          </span>
          <span className="text-muted-foreground text-sm font-medium">
            {paper.year}
          </span>
        </div>

        <h3 className="text-xl mb-3 leading-tight font-semibold group-hover:text-primary transition-colors">
          {paper.title}
        </h3>

        <div className="space-y-2 mb-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Authors:</span>{" "}
            {paper.authors.map((author: string, i: number) => (
              <span
                key={i}
                className={
                  author.includes("Soham") ? "text-primary font-semibold" : ""
                }
              >
                {author}
                {i < paper.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>

          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Published in:</span>{" "}
            {paper.journal}
          </p>

          {paper.volume && (
            <p className="text-xs text-muted-foreground font-medium">
              {paper.volume}
            </p>
          )}
        </div>
      </div>

      {/* Quick Preview */}
      {!isExpanded && (
        <div className="mb-4">
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {paper.abstract}
          </p>
        </div>
      )}

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mb-4 space-y-4">
          {/* Full Abstract */}
          <div>
            <h4 className="text-base font-semibold mb-2">Abstract</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {paper.abstract}
            </p>
          </div>

          {/* Keywords */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-foreground">
              Keywords
            </h4>
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((keyword: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs rounded-lg font-medium border border-blue-200 hover:shadow-sm transition-all"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-base font-semibold mb-2">Key Achievements</h4>
            <ul className="space-y-1">
              {paper.achievements.map((achievement: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">•</span>
                  <span className="text-muted-foreground text-sm">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution */}
          <div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Institution:</span>{" "}
              {paper.institution}
            </p>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-5 border-t border-border/50">
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 px-4 py-2 text-primary hover:text-primary/80 hover:bg-primary/5 rounded-lg transition-all font-medium"
        >
          <span className="text-sm">
            {isExpanded ? "show less" : "read more"}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div className="flex gap-3">
          {paper.doi ? (
            <a
              href={paper.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-lg hover:from-primary/20 hover:to-primary/10 transition-all font-medium border border-primary/20 hover:shadow-sm"
            >
              <span>view paper</span>
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
            </a>
          ) : (
            <span className="text-xs text-muted-foreground px-4 py-2">
              paper unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default function Writing() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleToggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const researchPapers = [
    {
      title:
        "Thaat Classification Using Recurrent Neural Networks with Long Short-Term Memory and Support Vector Machine",
      authors: [
        "Swati Shilaskar",
        "Shripad Bhatlawande",
        "Shivam Shinde",
        "Soham Sattigeri",
      ],
      journal:
        "International Journal on Recent and Innovation Trends in Computing and Communication",
      volume: "Vol. 11 No. 10",
      year: "2023",
      doi: "https://doi.org/10.17762/ijritcc.v11i10.8680",
      abstract:
        "This research paper introduces a groundbreaking method for music classification, emphasizing thaats rather than the conventional raga-centric approach. A comprehensive range of audio features, including amplitude envelope, RMSE, STFT, spectral centroid, MFCC, spectral bandwidth, and zero-crossing rate, is meticulously used to capture thaats' distinct characteristics in Indian classical music. The study predicts emotional responses linked with the identified thaats, achieving 85% accuracy with RNN-LSTM and 78% with SVM.",
      keywords: [
        "music classification",
        "MFCC",
        "thaats",
        "signal processing",
        "HMM",
        "SVM",
        "RNN-LSTM",
      ],
      institution: "Vishwakarma Institute of Technology, Pune",
      achievements: [
        "85% accuracy with RNN-LSTM model",
        "78% accuracy with SVM model",
        "Innovative thaat-based approach to Indian classical music",
      ],
    },
    {
      title: "Real-time Audio Communication using WebRTC and MERN Stack",
      authors: ["Soham Sattigeri", "Shripad Bhatlawande"],
      journal:
        "Proceedings of International Conference on Paradigms of Communication, Computing and Data Analytics (PCCDA 2023), Springer",
      volume: "pp 335–342, Algorithms for Intelligent Systems",
      year: "2023",
      doi: "https://doi.org/10.1007/978-981-99-4626-6_28",
      abstract:
        "Real-time apps must be implemented by developers because of the rise in web-based communication. The project that examines the use of the WebRTC protocol is presented in the proposed article. The project is judged on how well it performs and scales, as well as how well it can accommodate various user situations and use cases. The program is a good example of a scalable application because it has an 85% success rate. Although nearly all apps now use VoIP (Voice Over Internet Protocol) to transport data online, this paper proposes a more straightforward method using WebRTC. The evaluation's findings show that the implementation can support more than 70 concurrent users while also offering low latency, high-quality audio transmission.",
      keywords: [
        "WebRTC",
        "MERN Stack",
        "Real-time Communication",
        "Audio Streaming",
        "VoIP",
        "Web Development",
        "Scalable Applications",
      ],
      institution: "Vishwakarma Institute of Technology, Pune",
      achievements: [
        "85% success rate in scalable application performance",
        "Support for 70+ concurrent users",
        "Low latency, high-quality audio transmission",
        "More straightforward approach compared to traditional VoIP methods",
        "Published in Springer's Algorithms for Intelligent Systems series",
      ],
    },
  ];

  const posts = [
    {
      title: "The Joy of Writing Code",
      slug: "the-joy-of-writing-code",
      type: "blog",
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
      type: "blog",
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
      type: "blog",
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
      type: "blog",
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

  const categories = [
    "all",
    "philosophy",
    "research",
    "productivity",
    "career",
    "tech",
  ];

  // Filter posts and papers based on selected category
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const filteredResearchPapers =
    selectedCategory === "all" || selectedCategory === "research"
      ? researchPapers
      : [];

  return (
    <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
      <div className="max-w-4xl">
        {/* Header */}
        <section className="mb-16 mt-8">
          <h1 className="text-6xl mb-8">writing</h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            thoughts on philosophy, technology, research, and career growth.
            exploring the intersection of academic study, practical development,
            and the human experience of building software.
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
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-all capitalize font-medium ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "border-border hover:bg-muted/20 hover:border-muted-foreground/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        {filteredPosts.filter((post) => post.featured).length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl mb-8">featured articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <div key={post.slug} className="group">
                    <Link href={`/writing/${post.slug}`} className="group">
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
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Section divider only if featured posts exist */}
        {filteredPosts.filter((post) => post.featured).length > 0 && (
          <div className="section-divider"></div>
        )}

        {/* Research Publications */}
        {filteredResearchPapers.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl mb-8">research publications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResearchPapers.map((paper, index) => (
                <ResearchCard
                  key={`research-${index}`}
                  paper={paper}
                  index={index}
                  isExpanded={expandedCard === index}
                  onToggle={() => handleToggleCard(index)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Section divider only if research papers exist and posts exist */}
        {filteredResearchPapers.length > 0 && filteredPosts.length > 0 && (
          <div className="section-divider"></div>
        )}

        {/* All Posts */}
        {filteredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl mb-8">all articles</h2>

            <div className="space-y-6">
              {filteredPosts.map((post) => (
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
        )}

        {/* No Results Message */}
        {selectedCategory !== "all" &&
          filteredPosts.length === 0 &&
          filteredResearchPapers.length === 0 && (
            <section className="mb-16">
              <div className="text-center py-12">
                <h3 className="text-2xl mb-4 text-muted-foreground">
                  No content found
                </h3>
                <p className="text-muted-foreground mb-6">
                  No articles or research papers found for the "
                  {selectedCategory}" category.
                </p>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="btn-tangerine-outline"
                >
                  View all content
                </button>
              </div>
            </section>
          )}

        {/* Section divider only if there's content above */}
        {(filteredPosts.length > 0 ||
          filteredResearchPapers.length > 0 ||
          (selectedCategory !== "all" &&
            filteredPosts.length === 0 &&
            filteredResearchPapers.length === 0)) && (
          <div className="section-divider"></div>
        )}

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
