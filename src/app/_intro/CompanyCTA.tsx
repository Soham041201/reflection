"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useIntro } from "./IntroProvider";

export function CompanyCTA() {
  const { pendingCompany, setPendingCompany } = useIntro();

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 top-20 z-40 flex justify-center px-4"
    >
      <AnimatePresence>
        {pendingCompany && (
          <motion.a
            key={pendingCompany.url}
            href={pendingCompany.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setPendingCompany(null)}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto group flex items-center gap-3 rounded-full border border-primary/30 bg-background/90 px-5 py-3 font-serif text-base text-foreground shadow-lg shadow-primary/10 backdrop-blur transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`open ${pendingCompany.name} in a new tab`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span>open {pendingCompany.name}</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
