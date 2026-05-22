import { useState } from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  if (project.placeholder) {
    return (
      <div
        className="relative border p-8 flex flex-col justify-between min-h-64 overflow-hidden"
        style={{
          borderColor: 'rgba(255,95,31,0.3)',
          borderStyle: 'dashed',
          backgroundColor: 'rgba(255,95,31,0.03)',
        }}
      >
        {/* Blueprint grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,95,31,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,95,31,0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-signal tracking-widest">PROJECT_{String(index + 1).padStart(2, '0')}</span>
            <Lock size={14} className="text-signal opacity-60" />
          </div>
          <div className="border border-dashed border-signal/30 p-4 mb-4 text-center">
            <p className="font-mono text-xs text-signal tracking-widest opacity-70">CLASSIFIED</p>
            <p className="font-black text-2xl text-outline-orange mt-2 uppercase">INCOMING</p>
          </div>
          <p className="font-mono text-xs text-silver">RESERVED FOR NEXT INNOVATION</p>
        </div>
        <div className="relative z-10 mt-4">
          <span className="font-mono text-xs px-3 py-1 border border-dashed text-signal/50 border-signal/30">
            IN_DEVELOPMENT
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative border overflow-hidden flex flex-col group cursor-pointer"
      style={{
        borderColor: hovered ? 'var(--orange)' : 'rgba(242,239,233,0.15)',
        transition: 'border-color 0.15s ease, transform 0.1s ease, box-shadow 0.1s ease',
        transform: hovered ? 'translate(-3px, -3px)' : 'translate(0,0)',
        boxShadow: hovered ? '6px 6px 0px var(--orange)' : 'none',
        backgroundColor: 'var(--navy-light)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project image / color block */}
      <div
        className="relative h-48 overflow-hidden scan-effect"
        style={{ backgroundColor: project.color || '#1A1A35' }}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-black text-6xl text-outline opacity-30 uppercase">{project.title?.slice(0, 2)}</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-xs px-2 py-1 text-signal" style={{ backgroundColor: 'rgba(15,15,30,0.9)' }}>
            PROJECT_{String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-black text-xl uppercase mb-2" style={{ color: 'var(--bone)' }}>{project.title}</h3>
        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--silver)' }}>{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 border"
              style={{ borderColor: 'rgba(255,95,31,0.4)', color: 'var(--signal)', fontSize: '0.7rem' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={`flex gap-3 transition-all duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-signal border border-signal px-3 py-2 hover:bg-signal hover:text-navy transition-colors"
              style={{ borderColor: 'var(--orange)', color: 'var(--orange)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} /> VIEW SPECS
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs px-3 py-2 border hover:bg-bone hover:text-navy transition-colors"
              style={{ borderColor: 'rgba(242,239,233,0.3)', color: 'var(--bone)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={12} /> SOURCE
            </a>
          )}
        </div>
      </div>
    </div>
  );
}