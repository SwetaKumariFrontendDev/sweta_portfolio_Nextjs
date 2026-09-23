"use client";

import { useRef, useState } from "react";
import type { PortfolioRow } from "@/data/portfolio";
import MediaCard from "./MediaCard";
import SectionHeading from "./SectionHeading";

type Props = {
  row: PortfolioRow;
};

export default function Row({ row }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isSampleWork = row.id === "sample-work";

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateArrows, 350);
  };

  return (
    <section id={row.id} className="relative mb-10 md:mb-14">
      <div className="mx-auto max-w-[1920px] px-4 md:px-10">
        <SectionHeading
          variant={isSampleWork ? "section" : "row"}
          className={isSampleWork ? "mb-2 md:mb-3" : "mb-3"}
        >
          {row.title}
        </SectionHeading>
        {row.subtitle && (
          <p className="mb-4 max-w-2xl text-sm text-white/55 md:mb-6 md:text-base">
            {row.subtitle}
          </p>
        )}

        <div className="group/row relative">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute left-0 top-0 z-20 hidden h-[calc(100%-4rem)] w-10 items-center justify-center bg-gradient-to-r from-[#141414] via-[#141414]/80 to-transparent opacity-0 transition group-hover/row:opacity-100 md:flex"
            >
              <Chevron dir="left" />
            </button>
          )}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute right-0 top-0 z-20 hidden h-[calc(100%-4rem)] w-10 items-center justify-center bg-gradient-to-l from-[#141414] via-[#141414]/80 to-transparent opacity-0 transition group-hover/row:opacity-100 md:flex"
            >
              <Chevron dir="right" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={updateArrows}
            className="row-scroll -mx-1 flex gap-3 overflow-x-auto overflow-y-visible scroll-smooth pb-20 pt-1 snap-x snap-mandatory md:gap-4 md:pb-24"
          >
            {row.items.map((item, i) => (
              <MediaCard key={item.id} item={item} index={i} />
            ))}
            <div className="w-2 shrink-0 snap-none md:w-4" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      className="h-8 w-8 text-white drop-shadow"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      {dir === "left" ? (
        <path strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}
