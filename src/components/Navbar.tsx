"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Home", href: "#top" },
  { label: "AI", href: "#ai-work" },
  { label: "Work", href: "#sample-work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(20, 20, 20, 0)", "rgba(20, 20, 20, 0.95)"],
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      style={{ backgroundColor: background }}
      className="fixed top-0 z-50 w-full"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
      />
      <nav className="mx-auto flex h-16 max-w-[1920px] items-center justify-between px-4 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-netflix-red md:text-3xl">
            SK
          </span>
          <span className="hidden text-sm font-semibold text-white/90 sm:inline">
            {profile.name}
          </span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded bg-netflix-red px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-600 md:text-sm"
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
