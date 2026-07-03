"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/app/data";
import { ProjectCard } from "./project-card";

const PROJECTS_PER_PAGE = 2;

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const start = page * PROJECTS_PER_PAGE;
  const end = Math.min(start + PROJECTS_PER_PAGE, projects.length);

  const visibleProjects = useMemo(
    () => projects.slice(start, end),
    [projects, start, end],
  );

  const isFirstPage = page === 0;
  const isLastPage = page >= pageCount - 1;

  return (
    <div className="projects-carousel">
      <div className="project-list" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={start + index}
          />
        ))}
      </div>

      <div className="project-pagination" aria-label="Navegação de projetos">
        <button
          type="button"
          onClick={() => setPage((current) => Math.max(current - 1, 0))}
          disabled={isFirstPage}
        >
          Anterior
        </button>
        <span>
          {start + 1}-{end} de {projects.length}
          <small>Página {page + 1} de {pageCount}</small>
        </span>
        <button
          type="button"
          onClick={() =>
            setPage((current) => Math.min(current + 1, pageCount - 1))
          }
          disabled={isLastPage}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
