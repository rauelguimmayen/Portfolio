import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', num: '01', label: 'OVERVIEW' },
  { id: 'about', num: '02', label: 'ABOUT' },
  { id: 'projects', num: '03', label: 'PROJECTS' },
  /*{ id: 'experience', num: '04', label: 'EXPERIENCE' },*/
  { id: 'contact', num: '04', label: 'CONTACT' },
];

export default function NavSidebar() {
  const [active, setActive] = useState('hero');
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-0 top-0 h-full z-50 hidden lg:flex flex-col items-center justify-center pl-6 gap-8">
      {sections.map(({ id, num, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          onMouseEnter={() => setExpanded(id)}
          onMouseLeave={() => setExpanded(null)}
          className="flex items-center gap-3 group"
        >
          <span
            className={`font-mono text-xs font-bold transition-all duration-200 ${
              active === id ? 'text-signal text-sm' : 'text-silver hover:text-bone'
            }`}
          >
            {num}
          </span>
          <span
            className={`font-mono text-xs tracking-widest overflow-hidden transition-all duration-200 whitespace-nowrap ${
              expanded === id || active === id
                ? 'max-w-[120px] opacity-100 text-signal'
                : 'max-w-0 opacity-0'
            }`}
          >
            // {label}
          </span>
          <span
            className={`block h-px transition-all duration-200 ${
              active === id ? 'w-6 bg-signal' : 'w-3 bg-silver group-hover:bg-bone'
            }`}
          />
        </button>
      ))}
    </nav>
  );
}