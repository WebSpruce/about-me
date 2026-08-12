import { SiGithub } from '@icons-pack/react-simple-icons';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900/40 hover:border-zinc-700 transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-2">
        <h3 className="text-2xl font-semibold text-white">
          {project.title}
        </h3>
        {project.imageUrl && (
          <img src={project.imageUrl} alt={project.title}
            className="h-24 rounded-lg object-cover shrink-0 border border-zinc-800 transition-transform duration-500 ease-in-out hover:scale-200"
          />
        )}
      </div>

      <p className="text-zinc-400 mb-4">{project.tagline}</p>

      <ul className="space-y-2 mb-6">
        {project.description.map((point, i) => (
          <li key={i} className="text-sm text-zinc-500 flex gap-2">
            <span className="text-zinc-600">{i + 1}.</span>
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
          >
            <SiGithub size={16} /> Source code
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
          >
            <ExternalLink size={16} /> Live demo
          </a>
        )}
      </div>
    </article>
  );
}