import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className={`group relative rounded-2xl bg-zinc-900/40 border border-zinc-800/70 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700/80 hover:bg-zinc-900/70 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5 ${
        project.featured ? "md:col-span-2" : "col-span-1"
      }`}
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
                Featured
              </span>
            )}
            <span className="text-zinc-500 font-mono text-xs">#{project.id}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View Source on GitHub"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View Live Project"
                className="p-2 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-2.5 flex items-center gap-1.5">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-emerald-400" />
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* Tech Stack tags */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md bg-zinc-800/40 border border-zinc-700/40 text-zinc-300 font-mono text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};