import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img src="/assets/avatar/Logos of all events- TECHFEST/ANVESHAN_FINAL_2.png" alt="Anveshan logo" className="w-10 h-10 object-contain" />
          <div className="logo text-2xl font-extrabold text-pink-600">ANVESHAN</div>
        </div>

        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
         {/* <li>
            <Link href="/about-us" className="hover:underline">
              About Us
            </Link>
          </li> */}
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
      </nav>
    </header>
  );
}
