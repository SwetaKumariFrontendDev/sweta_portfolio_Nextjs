"use client";

import { motion } from "framer-motion";

type Props = {
  id?: string;
  variant?: "section" | "row";
  className?: string;
  children: React.ReactNode;
};

/** Shared titles: `section` = Technologies/Experience; `row` = Netflix browse rows */
export default function SectionHeading({
  id,
  variant = "section",
  className = "",
  children,
}: Props) {
  const styles =
    variant === "row"
      ? "text-lg font-semibold md:text-xl"
      : "text-2xl font-bold tracking-tight md:text-3xl";

  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`${styles} text-white ${className}`}
    >
      {children}
    </motion.h2>
  );
}
