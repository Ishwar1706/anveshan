"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`w-full overflow-x-hidden fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent`}>
        <nav className="w-full flex items-center justify-between py-3 px-4 md:px-8">

          {/* Left: Logo + Title */}
          <div className="flex items-center gap-2 min-w-0">
            <img
              src="/assets/avatar/Logos of all events- TECHFEST/ANVESHAN_FINAL_2.png"
              alt="Anveshan logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain shrink-0"
            />
            <span className="text-sm sm:text-base md:text-2xl font-extrabold text-yellow-100 truncate">
              ANVESHAN
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 items-center text-blue-200">
            
            <li><Link href="/">Home</Link></li>
            <li><Link href="/events">Register & Explore</Link></li>
            <li><Link href="/team">Organizing Committee</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl font-bold text-blue-200"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-transparent">
            <ul className="flex flex-col items-center gap-4 py-6">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" onClick={() => setMenuOpen(false)}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/team" onClick={() => setMenuOpen(false)}>
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Spacer to preserve document flow when header is fixed */}
      <div className="h-14 md:h-16" aria-hidden="true" />
    </>
  );
}
