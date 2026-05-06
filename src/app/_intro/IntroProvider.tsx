"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import type { CompanyMention } from "./cues";
import { resolveCueTarget } from "./cues";

type IntroState = {
  highlightedSection: string | null;
  pendingCompany: CompanyMention | null;
  registerSection: (id: string, el: HTMLElement | null) => void;
  scrollToSection: (id: string) => void;
  handleSpokenCue: (
    cueSection: string | null,
    company: CompanyMention | null
  ) => void;
  setPendingCompany: (company: CompanyMention | null) => void;
};

const IntroContext = createContext<IntroState | null>(null);

const PENDING_TARGET_TTL_MS = 5000;

export function IntroProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [highlightedSection, setHighlightedSection] = useState<string | null>(
    null
  );
  const [pendingCompany, setPendingCompanyState] =
    useState<CompanyMention | null>(null);

  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map());
  const pendingTargetRef = useRef<{
    sectionId: string;
    expires: number;
  } | null>(null);

  const scrollToElement = useCallback((el: HTMLElement) => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  const registerSection = useCallback(
    (id: string, el: HTMLElement | null) => {
      const map = sectionsRef.current;
      if (el) {
        map.set(id, el);
        const pending = pendingTargetRef.current;
        if (
          pending &&
          pending.sectionId === id &&
          Date.now() < pending.expires
        ) {
          pendingTargetRef.current = null;
          requestAnimationFrame(() => scrollToElement(el));
        }
      } else {
        map.delete(id);
      }
    },
    [scrollToElement]
  );

  const scrollToSection = useCallback(
    (id: string) => {
      const el = sectionsRef.current.get(id);
      if (el) scrollToElement(el);
    },
    [scrollToElement]
  );

  const setPendingCompany = useCallback((company: CompanyMention | null) => {
    setPendingCompanyState(company);
  }, []);

  const handleSpokenCue = useCallback(
    (cueSection: string | null, company: CompanyMention | null) => {
      if (!cueSection) {
        setHighlightedSection(null);
        setPendingCompanyState(null);
        return;
      }
      const { route, sectionId } = resolveCueTarget(cueSection);
      setHighlightedSection(sectionId);
      setPendingCompanyState(company);

      const onTargetRoute = pathname === route;
      if (onTargetRoute) {
        const el = sectionsRef.current.get(sectionId);
        if (el) {
          scrollToElement(el);
        } else {
          pendingTargetRef.current = {
            sectionId,
            expires: Date.now() + PENDING_TARGET_TTL_MS,
          };
        }
      } else {
        pendingTargetRef.current = {
          sectionId,
          expires: Date.now() + PENDING_TARGET_TTL_MS,
        };
        router.push(route);
      }
    },
    [pathname, router, scrollToElement]
  );

  const value = useMemo<IntroState>(
    () => ({
      highlightedSection,
      pendingCompany,
      registerSection,
      scrollToSection,
      handleSpokenCue,
      setPendingCompany,
    }),
    [
      highlightedSection,
      pendingCompany,
      registerSection,
      scrollToSection,
      handleSpokenCue,
      setPendingCompany,
    ]
  );

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  );
}

export function useIntro(): IntroState {
  const ctx = useContext(IntroContext);
  if (!ctx) throw new Error("useIntro must be used inside IntroProvider");
  return ctx;
}
