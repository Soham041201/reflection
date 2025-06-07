"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.transition = "background-color 0.3s ease, color 0.3s ease";
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="py-4">
      <div className="reflection-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div
              className="w-4 h-4 rounded-full border border-primary bg-transparent mr-1 cursor-pointer transition-all duration-300 hover:scale-110"
              onClick={toggleTheme}
              title="Light Mode"
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-primary cursor-pointer transition-all duration-300 hover:scale-110"
              onClick={toggleTheme}
              title="Dark Mode"
            ></div>
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-2xl font-serif">soham sattigeri</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="link-hover font-serif">
              about
            </Link>
            <Link href="/work" className="link-hover font-serif">
              work
            </Link>
            <Link href="/projects" className="link-hover font-serif">
              projects
            </Link>
            <Link href="/writing" className="link-hover font-serif">
              writing
            </Link>
            <Link href="/contact" className="link-hover font-serif">
              contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
