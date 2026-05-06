"use client";

import { useEffect, useRef, useState } from "react";
import { useIntro } from "./IntroProvider";
import { parseCue } from "./cues";

type Props = {
  src: string;
  srcType?: string;
  vttSrc: string;
  poster?: string;
};

export function IntroVideo({ src, srcType, vttSrc, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const trackRef = useRef<HTMLTrackElement | null>(null);
  const { handleSpokenCue } = useIntro();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const enableTrack = () => {
      if (trackEl.track) trackEl.track.mode = "hidden";
    };

    const handleCueChange = () => {
      const track = trackEl.track;
      if (!track) return;
      const active = track.activeCues;
      if (!active || active.length === 0) {
        handleSpokenCue(null, null);
        return;
      }
      const last = active[active.length - 1] as VTTCue;
      const payload = parseCue(last.text);
      if (!payload) {
        handleSpokenCue(null, null);
        return;
      }
      handleSpokenCue(payload.section, payload.company ?? null);
    };

    enableTrack();
    trackEl.addEventListener("load", enableTrack);
    if (trackEl.track) {
      trackEl.track.addEventListener("cuechange", handleCueChange);
    }

    return () => {
      trackEl.removeEventListener("load", enableTrack);
      if (trackEl.track) {
        trackEl.track.removeEventListener("cuechange", handleCueChange);
      }
    };
  }, [handleSpokenCue]);

  return (
    <div className="relative" role="region" aria-label="video introduction">
      <video
        ref={videoRef}
        className="block aspect-video w-full bg-black/80"
        poster={poster}
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={() =>
          setError("video failed to load — check /public/intro/")
        }
      >
        <source src={src} type={srcType} />
        <track
          ref={trackRef}
          kind="metadata"
          src={vttSrc}
          srcLang="en"
          label="cue points"
          default
        />
      </video>
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/15 via-background/40 to-transparent p-4 text-center backdrop-blur-sm">
          <span className="font-serif text-sm text-foreground">
            video coming soon
          </span>
          <span role="status" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {error}
          </span>
        </div>
      )}
    </div>
  );
}
