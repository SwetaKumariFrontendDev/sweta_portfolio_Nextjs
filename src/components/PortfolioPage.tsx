"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Row from "./Row";
import Footer from "./Footer";
import TechnologiesGrid from "./TechnologiesGrid";
import ExperienceSection from "./ExperienceSection";
import AiWorkSection from "./AiWorkSection";
import { rows } from "@/data/portfolio";

const experienceRow = rows.find((r) => r.id === "experience");

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="-mt-16 relative z-10 space-y-2 md:-mt-24">
          <AiWorkSection />
          {rows.map((row) => {
            if (row.id === "skills") return <TechnologiesGrid key={row.id} />;
            if (row.id === "experience" && experienceRow) {
              return <ExperienceSection key={row.id} items={experienceRow.items} />;
            }
            return <Row key={row.id} row={row} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
