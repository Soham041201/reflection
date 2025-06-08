import Link from "next/link";

interface MediumAttributionProps {
  mediumUrl: string;
}

export default function MediumAttribution({
  mediumUrl,
}: MediumAttributionProps) {
  return (
    <section className="mb-12 text-center">
      <p className="text-sm text-muted-foreground">
        Originally published on{" "}
        <Link
          href={mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors underline"
        >
          Medium
        </Link>
      </p>
    </section>
  );
}
