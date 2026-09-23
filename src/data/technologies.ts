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

export type Technology = {
  id: string;
  name: string;
  Icon: IconType;
  iconClassName?: string;
};

export const technologies: Technology[] = [
  { id: "html", name: "HTML", Icon: SiHtml5, iconClassName: "text-[#E44D26]" },
  { id: "css", name: "CSS", Icon: SiCss, iconClassName: "text-[#1572B6]" },
  { id: "javascript", name: "JAVASCRIPT", Icon: SiJavascript, iconClassName: "text-[#F7DF1E]" },
  { id: "react", name: "REACT JS", Icon: SiReact, iconClassName: "text-[#61DAFB]" },
  { id: "vue", name: "VUE JS", Icon: SiVuedotjs, iconClassName: "text-[#4FC08D]" },
  { id: "typescript", name: "TYPESCRIPT", Icon: SiTypescript, iconClassName: "text-[#3178C6]" },
  { id: "nextjs", name: "NEXT JS", Icon: SiNextdotjs, iconClassName: "text-white" },
  { id: "nodejs", name: "NODE JS", Icon: SiNodedotjs, iconClassName: "text-[#339933]" },
  { id: "github", name: "GITHUB", Icon: SiGithub, iconClassName: "text-white" },
  { id: "tailwind", name: "TAILWIND CSS", Icon: SiTailwindcss, iconClassName: "text-[#06B6D4]" },
  { id: "redux", name: "REDUX", Icon: SiRedux, iconClassName: "text-[#764ABC]" },
  { id: "pinia", name: "PINIA", Icon: SiPinia, iconClassName: "text-[#FFD859]" },
  { id: "bootstrap", name: "BOOTSTRAP", Icon: SiBootstrap, iconClassName: "text-[#7952B3]" },
  { id: "graphql", name: "GRAPHQL", Icon: SiGraphql, iconClassName: "text-[#E10098]" },
  { id: "react-query", name: "REACT QUERY", Icon: SiReactquery, iconClassName: "text-[#FF4154]" },
  { id: "jest", name: "JEST", Icon: SiJest, iconClassName: "text-[#C21325]" },
  { id: "cucumber", name: "CUCUMBER BDD", Icon: SiCucumber, iconClassName: "text-[#23D96C]" },
  {
    id: "azure-devops",
    name: "AZURE DEVOPS",
    Icon: VscAzureDevops,
    iconClassName: "text-[#0078D4]",
  },
  {
    id: "mendix-qt",
    name: "MENDIX / QT / QML",
    Icon: SiQt,
    iconClassName: "text-[#41CD52]",
  },
  { id: "figma", name: "FIGMA", Icon: SiFigma, iconClassName: "text-[#F24E1E]" },
];
