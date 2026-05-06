import { ReactNode } from "react";
import { Header } from "./Header";
import { IntroLayer } from "@/app/_intro/IntroLayer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col wavy-background">
      <Header />
      <IntroLayer>
        <main className="flex-grow">{children}</main>
      </IntroLayer>
    </div>
  );
}
