import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const close = () => setMenuOpen(false);

  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b border-white/10 ${menuOpen ? "bg-black/40" : "bg-black/70"}`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 font-body">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-heading tracking-wide text-white no-underline"
          >
            Nori's <span className="text-yellow-400">Stitches</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-wider text-gray-200">
            <Link
              to="/"
              className="hover:text-yellow-400 transition no-underline text-gray-200"
            >
              Home
            </Link>
            <a
              href="/#catalogue"
              className="hover:text-yellow-400 transition no-underline text-gray-200"
            >
              Catalogue
            </a>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition no-underline text-gray-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition no-underline text-gray-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col space-y-1 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-transform ${
                menuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Panel — outside header to avoid stacking context issues */}
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xl z-40"
          onClick={close}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 p-8 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside panel */}
        <button
          onClick={close}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition"
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 5L5 15M5 5l10 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="mt-24 flex flex-col space-y-6">
          <Link
            to="/"
            onClick={close}
            className="text-gray-200 hover:text-yellow-400 transition uppercase tracking-wider text-sm no-underline"
          >
            Home
          </Link>
          <a
            href="/#catalogue"
            onClick={close}
            className="text-gray-200 hover:text-yellow-400 transition uppercase tracking-wider text-sm no-underline"
          >
            Catalogue
          </a>
          <Link
            to="/about"
            onClick={close}
            className="text-gray-200 hover:text-yellow-400 transition uppercase tracking-wider text-sm no-underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={close}
            className="text-gray-200 hover:text-yellow-400 transition uppercase tracking-wider text-sm no-underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
