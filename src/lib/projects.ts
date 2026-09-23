import { heroFeatured, rows, type PortfolioItem, type PortfolioRow } from "@/data/portfolio";

export type ProjectWithContext = PortfolioItem & {
  rowTitle: string;
  rowId: string;
};

export function getAllProjects(): ProjectWithContext[] {
  const list: ProjectWithContext[] = [];
  const seen = new Set<string>();
  for (const row of rows) {
    for (const item of row.items) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);
      list.push({ ...item, rowTitle: row.title, rowId: row.id });
    }
  }
  return list;
}

export function getProjectById(id: string): ProjectWithContext | undefined {
  const fromRow = getAllProjects().find((p) => p.id === id);
  if (fromRow) return fromRow;
  if (id === heroFeatured.id) {
    return {
      ...heroFeatured,
      rowTitle: "Featured",
      rowId: "featured",
    };
  }
  return undefined;
}

export function getRelatedProjects(id: string, limit = 5): ProjectWithContext[] {
  const current = getProjectById(id);
  if (!current) return [];
  return getAllProjects()
    .filter((p) => p.rowId === current.rowId && p.id !== id)
    .slice(0, limit);
}

export function getSampleWorkRow(): PortfolioRow | undefined {
  return rows.find((r) => r.id === "sample-work");
}
