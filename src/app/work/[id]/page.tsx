import { notFound } from "next/navigation";
import ProjectDetailView from "@/components/ProjectDetailView";
import { getAllProjects, getProjectById } from "@/lib/projects";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Sweta Kumari`,
    description: project.description,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();
  return <ProjectDetailView project={project} />;
}
