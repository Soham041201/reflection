import type { Metadata } from "next";
import "@/app/globals.css";
import { Layout } from "@/components/layout/Layout";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Soham Sattigeri - Software Engineer",
  description:
    "Associate Software Engineer at Kodo. Full-stack developer passionate about creating impactful web experiences and teaching technology.",
  metadataBase: new URL("https://sohamsattigeri.com"),
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
      },
    ],
    locale: "en-IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <Layout>{children}</Layout>
      </ClientBody>
    </html>
  );
}
