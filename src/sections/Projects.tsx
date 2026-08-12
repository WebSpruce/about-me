import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 px-6 bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
          Case files
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Projects I've built.
        </h2>
        <p className="text-zinc-400 mb-12">
          Designed and built end to end. Links go straight to the code and
          live demo.
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}