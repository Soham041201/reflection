"use client";

import { ReactNode } from "react";
import { IntroProvider } from "./IntroProvider";
import { IntroOverlay } from "./IntroOverlay";
import { CompanyCTA } from "./CompanyCTA";

export function IntroLayer({ children }: { children: ReactNode }) {
  return (
    <IntroProvider>
      {children}
      <IntroOverlay
        src="/intro/intro.mp4"
        srcType="video/mp4"
        vttSrc="/intro/intro.vtt?v=3"
        poster="/opengraph.png"
      />
      <CompanyCTA />
    </IntroProvider>
  );
}
