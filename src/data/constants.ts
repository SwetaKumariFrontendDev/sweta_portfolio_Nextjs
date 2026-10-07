import type { IconType } from "react-icons";
import { VscAzureDevops } from "react-icons/vsc";
import {
  SiBootstrap,
  SiCss,
  SiCucumber,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPinia,
  SiQt,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import {
  aiWork as localeAiWork,
  en,
  heroFeatured as localeHeroFeatured,
  profile as localeProfile,
  rows as localeRows,
} from "./en";

export type PortfolioItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  company?: string;
  period?: string;
  tags: string[];
  gradient: string;
  href?: string;
  coverImage?: string;
};

export type PortfolioRow = {
  id: string;
  title: string;
  subtitle?: string;
  items: PortfolioItem[];
};

export type Technology = {
  id: string;
  name: string;
  Icon: IconType;
  iconClassName?: string;
};

export { en };
export const profile = localeProfile;
export const BRAND_MARK = profile.name
  .split(/\s+/)
  .map((part) => part[0])
  .join("");
export const heroFeatured: PortfolioItem = localeHeroFeatured;
export const aiWork = localeAiWork;
export const rows: PortfolioRow[] = localeRows;
export const EXPERIENCE_ROW = rows.find((row) => row.id === "experience");
export const FEATURED_ROW_ID = "featured";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const NAV_LINKS = [
  { label: en.navigation.home, href: "#top" },
  { label: en.navigation.ai, href: "#ai-work" },
  { label: en.navigation.work, href: "#sample-work" },
  { label: en.navigation.skills, href: "#skills" },
  { label: en.navigation.experience, href: "#experience" },
  { label: en.navigation.contact, href: "#contact" },
];

export const EXPERIENCE_ACCENT_BORDER: Record<string, string> = {
  "exp-wf": "border-l-[#E50914]",
  "exp-sungrow": "border-l-emerald-500",
  "exp-ta": "border-l-slate-400",
  "exp-publicis": "border-l-indigo-400",
  "exp-retail": "border-l-cyan-500",
  "edu-be": "border-l-amber-500",
};

export const TIMELINE_COL =
  "grid-cols-[2.5rem_minmax(0,1fr)] md:grid-cols-[3rem_minmax(0,1fr)]";

export const TECHNOLOGY_GRID_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

export const TECHNOLOGY_GRID_ITEM = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
  },
};

export const technologies: Technology[] = [
  { id: "html", name: en.technologyNames.html, Icon: SiHtml5, iconClassName: "text-[#E44D26]" },
  { id: "css", name: en.technologyNames.css, Icon: SiCss, iconClassName: "text-[#1572B6]" },
  { id: "javascript", name: en.technologyNames.javascript, Icon: SiJavascript, iconClassName: "text-[#F7DF1E]" },
  { id: "react", name: en.technologyNames.react, Icon: SiReact, iconClassName: "text-[#61DAFB]" },
  { id: "vue", name: en.technologyNames.vue, Icon: SiVuedotjs, iconClassName: "text-[#4FC08D]" },
  { id: "typescript", name: en.technologyNames.typescript, Icon: SiTypescript, iconClassName: "text-[#3178C6]" },
  { id: "nextjs", name: en.technologyNames.nextjs, Icon: SiNextdotjs, iconClassName: "text-white" },
  { id: "nodejs", name: en.technologyNames.nodejs, Icon: SiNodedotjs, iconClassName: "text-[#339933]" },
  { id: "github", name: en.technologyNames.github, Icon: SiGithub, iconClassName: "text-white" },
  { id: "tailwind", name: en.technologyNames.tailwind, Icon: SiTailwindcss, iconClassName: "text-[#06B6D4]" },
  { id: "redux", name: en.technologyNames.redux, Icon: SiRedux, iconClassName: "text-[#764ABC]" },
  { id: "pinia", name: en.technologyNames.pinia, Icon: SiPinia, iconClassName: "text-[#FFD859]" },
  { id: "bootstrap", name: en.technologyNames.bootstrap, Icon: SiBootstrap, iconClassName: "text-[#7952B3]" },
  { id: "graphql", name: en.technologyNames.graphql, Icon: SiGraphql, iconClassName: "text-[#E10098]" },
  { id: "react-query", name: en.technologyNames.reactQuery, Icon: SiReactquery, iconClassName: "text-[#FF4154]" },
  { id: "jest", name: en.technologyNames.jest, Icon: SiJest, iconClassName: "text-[#C21325]" },
  { id: "cucumber", name: en.technologyNames.cucumber, Icon: SiCucumber, iconClassName: "text-[#23D96C]" },
  { id: "azure-devops", name: en.technologyNames.azureDevops, Icon: VscAzureDevops, iconClassName: "text-[#0078D4]" },
  { id: "mendix-qt", name: en.technologyNames.mendixQt, Icon: SiQt, iconClassName: "text-[#41CD52]" },
  { id: "figma", name: en.technologyNames.figma, Icon: SiFigma, iconClassName: "text-[#F24E1E]" },
];