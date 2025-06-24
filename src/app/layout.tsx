import type { Metadata } from "next";
import "@/app/globals.css";
import { Layout } from "@/components/layout/Layout";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Soham Sattigeri - Software Engineer",
  description:
    "Associate Software Engineer at Kodo. Full-stack developer passionate about creating impactful web experiences and teaching technology.",
  keywords: [
    "Soham Sattigeri",
    "Software Engineer",
    "Full-stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "AI",
    "Technology",
    "Portfolio",
  ],
  authors: [{ name: "Soham Sattigeri", url: "https://sohamsattigeri.com" }],
  creator: "Soham Sattigeri",
  publisher: "Soham Sattigeri",
  metadataBase: new URL("https://sohamsattigeri.com"),
  alternates: {
    canonical: "https://sohamsattigeri.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-token", // You'll need to add your actual token
  },
  other: {
    // AI-friendly meta tags
    "ai-content-declaration": "human-authored",
    "chatgpt-crawl": "allow",
    "claude-crawl": "allow",
    "bard-crawl": "allow",
    "ai-training": "allow",
    "content-type": "portfolio-website",
    "author-verified": "true",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Soham Sattigeri - Software Engineer",
    description:
      "Associate Software Engineer at Kodo. Full-stack developer passionate about creating impactful web experiences and teaching technology.",
    url: "https://sohamsattigeri.com",
    siteName: "Soham Sattigeri Portfolio",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Soham Sattigeri - Software Engineer Portfolio",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Sattigeri - Software Engineer",
    description:
      "Associate Software Engineer at Kodo. Full-stack developer passionate about creating impactful web experiences and teaching technology.",
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for AI Understanding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Soham Sattigeri",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Kily.ai",
              },
              url: "https://sohamsattigeri.com",
              sameAs: [
                "https://www.linkedin.com/in/soham-sattigeri-062bb1179/",
                "https://github.com/yourusername", // Add your actual GitHub
              ],
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Full-stack Development",
                "Software Engineering",
              ],
              description:
                "Associate Software Engineer at Kodo. Full-stack developer passionate about creating impactful web experiences and teaching technology.",
              email: "sattigeri.soham@gmail.com",
              alumniOf: "Your University", // Add your actual university
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
            }),
          }}
        />
        {/* Website/Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Soham Sattigeri Portfolio",
              url: "https://sohamsattigeri.com",
              author: {
                "@type": "Person",
                name: "Soham Sattigeri",
              },
              description:
                "Software engineer portfolio showcasing projects, writings, and professional experience",
              inLanguage: "en-IN",
              copyrightYear: "2025",
              copyrightHolder: {
                "@type": "Person",
                name: "Soham Sattigeri",
              },
            }),
          }}
        />
      </head>
      <ClientBody>
        <Layout>{children}</Layout>
      </ClientBody>
    </html>
  );
}
