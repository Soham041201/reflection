"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { IntroVideo } from "./IntroVideo";

type Props = {
  src: string;
  srcType?: string;
  vttSrc: string;
  poster?: string;
};

export function IntroOverlay({ src, srcType, vttSrc, poster }: Props) {
  const [dismissed, setDismissed] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const prefersReduced = useReducedMotion();

  if (dismissed) return null;

  return (
    <motion.aside
      role="complementary"
      aria-label="floating video introduction"
      initial={prefersReduced ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8 transition-[width] duration-300 ${
        minimized ? "w-[min(70vw,16rem)]" : "w-[min(92vw,22rem)] md:w-[26rem]"
      }`}
    >
      <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5 backdrop-blur-xl dark:bg-background/60 dark:ring-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/30 blur-3xl"
        />

        <div className="relative">
          <IntroVideo
            src={src}
            srcType={srcType}
            vttSrc={vttSrc}
            poster={poster}
          />

          <div
            className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-2 bg-gradient-to-b from-black/55 via-black/20 to-transparent px-3 py-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/85">
              · live intro
            </span>
            <div
              role="toolbar"
              aria-label="overlay controls"
              className="pointer-events-auto flex items-center gap-1"
            >
              <button
                type="button"
                onClick={() => setMinimized((m) => !m)}
                aria-label={minimized ? "expand video" : "minimize video"}
                aria-pressed={minimized}
                className="rounded-full p-1.5 text-white/85 transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  {minimized ? (
                    <path
                      d="M3 3h4M3 3v4M13 13h-4M13 13v-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M3 8h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label="close video"
                className="rounded-full p-1.5 text-white/85 transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
