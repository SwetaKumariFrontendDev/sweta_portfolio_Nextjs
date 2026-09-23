"use client";

import { motion } from "framer-motion";
import { heroFeatured, profile } from "@/data/portfolio";
export default function Hero() {
  const f = heroFeatured;

  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-end overflow-hidden pb-24 pt-28 md:min-h-[92vh] md:pb-32"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${f.gradient} animate-hero-shift`}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(229,9,20,0.25),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-netflix-redBright"
          >
            {profile.tagline} · {profile.location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            {f.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            {profile.headline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 md:text-base"
          >
            {profile.bio}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={f.href ?? "#sample-work"}
              className="inline-flex items-center gap-2 rounded bg-white px-6 py-2.5 text-sm font-bold text-black transition hover:bg-white/90"
            >
              <PlayIcon />
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded bg-white/20 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              <InfoIcon />
              Contact
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white"
            >
              Download CV
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {f.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/20 bg-black/30 px-2 py-0.5 text-xs text-white/90"
              >
                {tag}
              </span>
            ))}
          </motion.div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
  );
}
