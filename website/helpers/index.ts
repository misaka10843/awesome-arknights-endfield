import type { Project } from '@/shared';

export function sortProjectsById(projects: Array<Project>): Array<Project> {
  return projects.sort((a, b) => a.id - b.id);
}

export function filterValidProjects(projects: Array<Project>): Array<Project> {
  return projects.filter((p) => p.id > 0);
}
