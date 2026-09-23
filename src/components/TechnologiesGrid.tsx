"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";
import SectionHeading from "./SectionHeading";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
  },
};

export default function TechnologiesGrid() {
  return (
    <section
      id="skills"
      className="relative mb-10 scroll-mt-20 border-t border-white/5 pt-10 md:mb-14 md:pt-12"
      aria-labelledby="technologies-heading"
    >
      <div className="mx-auto max-w-[1920px] px-4 md:px-10">
        <SectionHeading id="technologies-heading" className="mb-6 md:mb-8">
          Technologies
        </SectionHeading>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4"
        >
          {technologies.map((tech) => {
            const Icon = tech.Icon;
            return (
              <motion.li key={tech.id} variants={item}>
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    borderColor: "rgba(96, 165, 250, 0.55)",
                    boxShadow: "0 0 24px rgba(59, 130, 246, 0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative flex aspect-[4/3] min-h-[100px] flex-col items-center justify-center rounded-sm border border-slate-600/80 bg-[#0c1222] p-4 sm:min-h-[120px] md:min-h-[132px]"
                >
                  <Icon
                    className={`h-10 w-10 drop-shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 md:h-14 md:w-14 ${tech.iconClassName ?? "text-white"}`}
                    aria-hidden
                  />
                  <span className="absolute bottom-2 left-2 right-2 text-[9px] font-medium uppercase tracking-wide text-white/90 sm:text-[10px] md:bottom-3 md:left-3 md:text-xs">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
