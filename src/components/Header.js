import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full overflow-x-hidden">
      <nav className="w-full flex items-center justify-between py-3 px-4 md:px-8">
        
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2 min-w-0">
          <img
            src="/assets/avatar/Logos of all events- TECHFEST/ANVESHAN_FINAL_2.png"
            alt="Anveshan logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain shrink-0"
          />
          <span className="text-sm sm:text-base md:text-2xl font-extrabold text-pink-600 truncate">
            ANVESHAN
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:underline">
              Events
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:underline">
              Team
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon (for now just visual) */}
        <button className="md:hidden text-xl font-bold">
          ☰
        </button>

      </nav>
    </header>
  );
}
