"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import AtAGlance from "./AtAGlance";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-[1920px] px-4 py-16 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Ready for the next episode?
            </h2>
            <p className="mt-4 max-w-lg text-white/70">{profile.headline}</p>
            <p className="mt-2 max-w-lg text-sm text-white/50">{profile.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded bg-netflix-red px-6 py-3 text-sm font-bold text-white transition hover:bg-red-600"
              >
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                GitHub
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                View CV (Canva)
              </a>
            </div>
            <p className="mt-6 text-sm text-white/45">
              <a href={`mailto:${profile.email}`} className="hover:text-white">
                {profile.email}
              </a>
            </p>
          </div>
          <AtAGlance showCta={false} />
        </motion.div>
        <p className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {profile.name}. Almere, Netherlands.
        </p>
      </div>
    </footer>
  );
}
