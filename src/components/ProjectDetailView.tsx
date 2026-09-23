"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ProjectWithContext } from "@/lib/projects";
import { getRelatedProjects } from "@/lib/projects";
import MediaCard from "./MediaCard";

type Props = {
  project: ProjectWithContext;
};

export default function ProjectDetailView({ project }: Props) {
  const related = getRelatedProjects(project.id, 6);
  const highlights = project.highlights ?? [];
  const longText =
    project.longDescription ?? project.description;

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent">
        <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between px-4 md:px-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
          >
            <BackIcon />
            Back to Browse
          </Link>
          <Link href="/" className="font-display text-2xl font-bold text-netflix-red">
            SK
          </Link>
        </div>
      </header>

      <section className="relative min-h-[55vh] md:min-h-[65vh]">
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} ${project.coverImage ? "opacity-85 mix-blend-multiply" : ""} animate-hero-shift`}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-black/30" />
        <div className="relative z-10 mx-auto flex h-full min-h-[55vh] max-w-[1920px] flex-col justify-end px-4 pb-12 pt-24 md:min-h-[65vh] md:px-10 md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium uppercase tracking-widest text-netflix-red"
          >
            {project.rowTitle}
            {project.company ? ` · ${project.company}` : ""}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-2 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-3 max-w-2xl text-lg text-white/85"
          >
            {project.subtitle}
          </motion.p>
          {project.period && (
            <p className="mt-2 text-sm text-white/55">{project.period}</p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-white px-6 py-2.5 text-sm font-bold text-black transition hover:bg-white/90"
              >
                <PlayIcon />
                View live experience
              </a>
            )}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded bg-white/20 px-6 py-2.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/30"
            >
              Contact me
            </Link>
          </motion.div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/25 bg-black/40 px-2.5 py-1 text-xs text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-4 py-10 md:px-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1fr_320px]"
        >
          <div>
            <h2 className="text-xl font-semibold text-white">About this project</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              {longText}
            </p>
          </div>
          {highlights.length > 0 && (
            <aside className="rounded-lg bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
                Highlights
              </h3>
              <ul className="mt-4 space-y-3">
                {highlights.map((line) => (
                  <li key={line} className="flex gap-2 text-sm text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-netflix-red" />
                    {line}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </motion.div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-white/10 pb-16 pt-8">
          <h2 className="mb-4 px-4 text-lg font-semibold md:px-10 md:text-xl">
            More in {project.rowTitle}
          </h2>
          <div className="flex gap-2 overflow-x-auto px-4 pb-2 md:gap-3 md:px-10">
            {related.map((item, i) => (
              <MediaCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function BackIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
