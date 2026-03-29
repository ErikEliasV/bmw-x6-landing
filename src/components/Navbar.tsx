"use client";

import { useCallback, useEffect, useState } from "react";
import BmwLogo from "./BmwLogo";

const links = [
  { label: "Design", href: "#design" },
  { label: "Interior", href: "#interior" },
  { label: "Tecnologia", href: "#technology" },
  { label: "Dados", href: "#specs" },
];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function smoothScrollTo(targetY: number) {
  let current = window.scrollY;
  let raf = 0;
  const tick = () => {
    current = lerp(current, targetY, 0.07);
    if (Math.abs(current - targetY) < 1) {
      window.scrollTo(0, targetY);
      return;
    }
    window.scrollTo(0, current);
    raf = requestAnimationFrame(tick);
  };
  const stop = () => { cancelAnimationFrame(raf); };
  window.addEventListener("wheel", stop, { once: true, passive: true });
  window.addEventListener("touchstart", stop, { once: true, passive: true });
  raf = requestAnimationFrame(tick);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (!el) return;
      smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - 80);
    },
    []
  );

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const handleMobileClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      closeMenu();
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (!el) return;
      setTimeout(() => {
        smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - 80);
      }, 350);
    },
    []
  );

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const linkColor = "text-bmw-muted hover:text-bmw-white";
  const hamburgerColor = "bg-bmw-text";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between transition-all duration-600 ${
          scrolled ? "nav-scrolled px-8 py-4" : "nav-default px-8 py-6"
        }`}
        style={{ transitionTimingFunction: "var(--ease-spring)" }}
      >
        <a href="#">
          <BmwLogo className="w-12 h-12 transition-transform duration-500 hover:scale-108" />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`relative text-[0.85rem] font-medium uppercase tracking-wider transition-colors duration-400 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-bmw-blue after:transition-all after:duration-500 hover:after:w-full ${linkColor}`}
                style={{ transitionTimingFunction: "var(--ease-spring)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://configure.bmw.pt/pt_PT/configure/G06/41EX/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-bmw-blue text-white rounded-full text-[0.8rem] font-semibold uppercase tracking-wider transition-all duration-500 hover:bg-bmw-blue-deep hover:scale-104 active:scale-97"
              style={{ transitionTimingFunction: "var(--ease-spring)" }}
            >
              Configurar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </li>
        </ul>

        <button
          className="md:hidden relative z-200 w-8 h-6 bg-transparent border-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span
            className={`absolute left-0 w-full h-0.5 ${hamburgerColor} transition-all duration-400`}
            style={{
              top: menuOpen ? "50%" : "0",
              transform: menuOpen ? "translateY(-50%) rotate(45deg)" : "none",
              transitionTimingFunction: "var(--ease-spring)",
            }}
          />
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 ${hamburgerColor} transition-opacity duration-400`}
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className={`absolute left-0 w-full h-0.5 ${hamburgerColor} transition-all duration-400`}
            style={{
              bottom: menuOpen ? "50%" : "0",
              transform: menuOpen ? "translateY(50%) rotate(-45deg)" : "none",
              transitionTimingFunction: "var(--ease-spring)",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-150 flex flex-col items-center justify-center gap-8 mobile-menu-overlay transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto mobile-menu-active"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "var(--ease-spring)" }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleMobileClick(e, link.href)}
            className="mobile-menu-link font-display text-[2rem] font-bold text-bmw-white no-underline"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://configure.bmw.pt/pt_PT/configure/G06/41EX/"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu-link font-display text-[2rem] font-bold text-bmw-blue no-underline"
        >
          Configurar
        </a>
      </div>
    </>
  );
}
