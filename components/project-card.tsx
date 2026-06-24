import type { Project } from "@/app/data";
import { ArrowUpRight, Github } from "./icons";
import { ProjectVisual } from "./project-visual";
import { Reveal } from "./reveal";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal>
      <article className={`project-card ${project.featured ? "featured" : ""}`}>
        <div className="project-number">{number}</div>
        <div className="project-content">
          <div className="project-meta">
            <span>{project.category}</span>
            <span className={`project-status status-${project.status.toLowerCase().replace(" ", "-")}`}>
              <i />
              {project.status}
            </span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-details">
            <div>
              <span className="detail-label">PROBLEMA</span>
              <p>{project.problem}</p>
            </div>
            <div>
              <span className="detail-label">APRENDIZADO</span>
              <p>{project.learning}</p>
            </div>
          </div>

          <div className="project-footer">
            <ul aria-label="Tecnologias utilizadas">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            {project.website ? (
              <a href={project.website} aria-label={`Acessar ${project.title}`}>
                Acessar projeto
                <ArrowUpRight />
              </a>
            ) : project.github ? (
              <a
                href={project.github}
                aria-label={`Ver ${project.title} no GitHub`}
                target={project.repositoryNewTab ? "_blank" : undefined}
                rel={project.repositoryNewTab ? "noopener noreferrer" : undefined}
              >
                <Github />
                Repositório
                <ArrowUpRight />
              </a>
            ) : (
              <span className="private-project">Projeto privado</span>
            )}
          </div>
        </div>
        <ProjectVisual type={project.visual} />
      </article>
    </Reveal>
  );
}
