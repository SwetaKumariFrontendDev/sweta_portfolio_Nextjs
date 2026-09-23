"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PortfolioItem } from "@/data/portfolio";

type Props = {
  item: PortfolioItem;
  index: number;
  variant?: "landscape" | "portrait";
};

function monogram(item: PortfolioItem) {
  const source = item.company ?? item.title;
  const words = source.split(/[\s·|—–-]+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return source.slice(0, 2).toUpperCase();
}

function domainLabel(item: PortfolioItem) {
  if (item.tags[0]) return item.tags[0];
  return item.subtitle.split("·")[0]?.trim() ?? "Project";
}

export default function MediaCard({ item, index, variant = "landscape" }: Props) {
  const width =
    variant === "landscape"
      ? "w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]"
      : "w-[120px] sm:w-[140px] md:w-[160px]";
  const aspect = variant === "landscape" ? "aspect-[5/4]" : "aspect-[2/3]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative shrink-0 snap-start"
    >
      <Link href={`/work/${item.id}`} className="block">
        <motion.div
          whileHover={{ scale: 1.05, zIndex: 30 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className={`relative ${width} cursor-pointer overflow-visible rounded-md`}
        >
          <div
            className={`relative ${aspect} overflow-hidden rounded-md shadow-lg ring-0 ring-white/0 transition group-hover:ring-2 group-hover:ring-white/90`}
          >
            {item.coverImage ? (
              <Image
                src={item.coverImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:768px) 200px, 320px"
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
            )}
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(229,9,20,0.2), transparent 40%)",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.2)_35%,rgba(0,0,0,0.92)_100%)]" />

            <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/25 bg-black/35 text-xs font-bold text-white backdrop-blur-sm">
                {monogram(item)}
              </span>
              <span className="rounded-sm bg-black/45 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm">
                {domainLabel(item)}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-3 pt-6">
              <p className="line-clamp-2 text-sm font-bold leading-snug text-white drop-shadow-md">
                {item.title}
              </p>
              <p className="mt-1 line-clamp-1 text-[11px] text-white/75">{item.subtitle}</p>
              <p className="mt-2 line-clamp-2 text-[10px] leading-snug text-white/65 md:hidden">
                {item.description}
              </p>
              <ul className="mt-2 flex flex-wrap gap-1">
                {item.tags.slice(0, 3).map((tag) => (
                  <li
                    key={tag}
                    className="rounded bg-white/15 px-1.5 py-px text-[9px] font-medium text-white/90"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 md:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-black shadow-lg">
                <svg className="ml-0.5 h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="absolute left-0 right-0 top-full z-40 hidden rounded-b-md border border-t-0 border-white/15 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-md md:group-hover:block">
            <p className="line-clamp-3 text-[11px] leading-relaxed text-white/70">
              {item.description}
            </p>
            <p className="mt-2 text-[10px] font-semibold text-netflix-redBright">Open project →</p>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
