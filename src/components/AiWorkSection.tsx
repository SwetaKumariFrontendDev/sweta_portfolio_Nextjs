"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aiWork } from "@/data/portfolio";
import { getProjectById } from "@/lib/projects";
import SectionHeading from "./SectionHeading";

export default function AiWorkSection() {
  const project = getProjectById(aiWork.featuredProjectId);
  if (!project) return null;

  return (
    <section
      id="ai-work"
      className="relative scroll-mt-20 border-t border-white/5 pt-10 md:pt-12"
      aria-labelledby="ai-work-heading"
    >
      <div className="mx-auto max-w-[1920px] px-4 md:px-10">
        <SectionHeading id="ai-work-heading" className="mb-2 md:mb-3">
          {aiWork.sectionTitle}
        </SectionHeading>
        <p className="mb-6 max-w-2xl text-sm text-white/55 md:mb-8 md:text-base">
          {aiWork.summary}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-md border border-violet-500/30 bg-[#0c1222] shadow-[0_0_40px_rgba(99,102,241,0.12)]"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-violet-950/40 to-[#0c1222]"
            aria-hidden
          />
          <div className="relative grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-10 lg:grid-cols-[1fr_320px] lg:gap-12">
            <div>
              <span className="inline-block rounded bg-violet-600/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-violet-200">
                Featured
              </span>
              <h3 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">
                {aiWork.headline}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
                {project.description}
              </p>
              <ul className="mt-6 space-y-2">
                {aiWork.practices.map((line) => (
                  <li key={line} className="flex gap-2 text-sm text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-white/90"
                  >
                    Try live app
                  </a>
                )}
                <Link
                  href={`/work/${project.id}`}
                  className="inline-flex items-center gap-2 rounded border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Case study
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-violet-400/30 bg-violet-950/50 px-2 py-0.5 text-xs text-violet-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/work/${project.id}`}
              className="group relative mx-auto block aspect-[4/3] w-full max-w-sm overflow-hidden rounded-md border border-white/10 md:mx-0 md:max-w-none"
            >
              {project.coverImage && (
                <Image
                  src={project.coverImage}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 320px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-xl text-white">{project.title}</p>
                <p className="text-xs text-white/60">{project.subtitle}</p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
