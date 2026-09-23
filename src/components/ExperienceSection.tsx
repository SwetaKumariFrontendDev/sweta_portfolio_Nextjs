"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi2";
import type { PortfolioItem } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import AtAGlance from "./AtAGlance";

type Props = {
  items: PortfolioItem[];
};

const accentBorder: Record<string, string> = {
  "exp-wf": "border-l-[#E50914]",
  "exp-sungrow": "border-l-emerald-500",
  "exp-ta": "border-l-slate-400",
  "exp-publicis": "border-l-indigo-400",
  "exp-retail": "border-l-cyan-500",
  "edu-be": "border-l-amber-500",
};

const TIMELINE_COL = "grid-cols-[2.5rem_minmax(0,1fr)] md:grid-cols-[3rem_minmax(0,1fr)]";

function isEducation(item: PortfolioItem) {
  return item.id.startsWith("edu-") || item.tags.includes("Education");
}

function periodLabel(item: PortfolioItem) {
  if (item.period) return item.period;
  const parts = item.subtitle.split("·");
  return parts.length > 1 ? parts[parts.length - 1].trim() : "";
}

function companyLabel(item: PortfolioItem) {
  return item.company ?? item.subtitle.split("·")[0]?.trim() ?? item.subtitle;
}

export default function ExperienceSection({ items }: Props) {
  const work = items.filter((i) => !isEducation(i));
  const education = items.filter(isEducation);

  return (
    <section
      id="experience"
      className="relative mb-12 scroll-mt-20 border-t border-white/5 pt-10 md:mb-16 md:pt-12"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1920px] px-4 md:px-10">
        <SectionHeading id="experience-heading" className="mb-6 md:mb-8">
          Experience & Education
        </SectionHeading>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-12">
          <div className="relative min-w-0">
            <ul className="relative space-y-4 md:space-y-5">
              <div
                className="pointer-events-none absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-emerald-500/70 via-netflix-red/80 to-amber-500/50 md:left-6"
                aria-hidden
              />
              {work.map((item, index) => (
                <ExperienceEntry key={item.id} item={item} index={index} />
              ))}
            </ul>

            {education.length > 0 && (
              <div className="mt-10">
                <p
                  className={`mb-4 grid ${TIMELINE_COL} gap-x-3 text-xs font-semibold uppercase tracking-widest text-white/45 md:gap-x-4`}
                >
                  <span aria-hidden />
                  <span>Education</span>
                </p>
                <ul className="space-y-4">
                  {education.map((item, index) => (
                    <ExperienceEntry
                      key={item.id}
                      item={item}
                      index={work.length + index}
                      education
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="hidden lg:block">
            <AtAGlance roleCount={work.length} className="sticky top-24" />
          </aside>
        </div>
      </div>
    </section>
  );
}

function ExperienceEntry({
  item,
  index,
  education = false,
}: {
  item: PortfolioItem;
  index: number;
  education?: boolean;
}) {
  const borderAccent = accentBorder[item.id] ?? "border-l-white/30";
  const Icon = education ? HiOutlineAcademicCap : HiOutlineBriefcase;
  const period = periodLabel(item);
  const company = companyLabel(item);

  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`grid ${TIMELINE_COL} items-start gap-x-3 md:gap-x-4`}
    >
      <div className="flex justify-center pt-7 md:pt-8">
        <span
          className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-[#141414] md:h-8 md:w-8 ${
            education
              ? "border-amber-500/80 text-amber-400"
              : "border-netflix-red text-netflix-red"
          }`}
        >
          <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden />
        </span>
      </div>

      <Link
        href={`/work/${item.id}`}
        className={`group block min-w-0 rounded-sm border border-slate-600/80 border-l-4 bg-[#0c1222] p-5 transition hover:border-slate-500 hover:shadow-[0_0_28px_rgba(229,9,20,0.08)] ${borderAccent}`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 font-display text-xl leading-snug text-white md:text-2xl">
            {item.title}
          </h3>
          {period && (
            <span className="shrink-0 rounded border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/80 md:text-[11px]">
              {period}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm font-medium text-netflix-redBright md:text-base">{company}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-[15px]">
          {item.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          {item.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/75"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <span className="ml-auto text-xs font-semibold text-white/45 transition group-hover:text-netflix-red">
            More info →
          </span>
        </div>
      </Link>
    </motion.li>
  );
}
