import { useEffect, useRef, useState } from 'react';

const experiences = [
{
  year: '',
  role: 'Senior Full Stack Developer',
  company: 'YOUR_COMPANY',
  type: 'FULL_TIME',
  description: 'Add your role description here. Describe what you built, the impact you made, and technologies you used.',
  tags: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
  current: false
},
{
  year: '',
  role: 'Full Stack Developer',
  company: 'PREVIOUS_COMPANY',
  type: 'FULL_TIME',
  description: 'Describe your previous role. What did you architect? What problems did you solve? What scale did you work at?',
  tags: ['Vue.js', 'Python', 'Docker', 'MongoDB'],
  current: false
},
{
  year: '',
  role: 'Frontend Developer',
  company: 'ANOTHER_COMPANY',
  type: 'CONTRACT',
  description: 'Earlier career experience. Show progression and growth through different roles and responsibilities.',
  tags: ['React', 'TypeScript', 'CSS', 'REST APIs'],
  current: false
},
{
  year: '',
  role: 'Junior Developer',
  company: 'FIRST_COMPANY',
  type: 'FULL_TIME',
  description: 'Where it all started. The foundation of your engineering career and the first systems you helped build.',
  tags: ['JavaScript', 'HTML/CSS', 'Node.js', 'MySQL'],
  current: false
}];


function TimelineNode({ exp, index, isVisible }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-start gap-0 w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content */}
      <div
        className={`w-5/12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
        }
        style={{ transitionDelay: `${index * 100}ms` }}>
        
        <div
          className="border p-6 relative group"
          style={{
            borderColor: exp.current ? 'var(--orange)' : 'rgba(242,239,233,0.15)',
            backgroundColor: exp.current ? 'rgba(255,95,31,0.05)' : 'rgba(26,26,53,0.5)',
            transition: 'box-shadow 0.1s ease, transform 0.1s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '6px 6px 0px var(--orange)';
            e.currentTarget.style.transform = 'translate(-3px, -3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translate(0,0)';
          }}>
          
          {exp.current &&
          <span className="font-mono text-xs text-signal tracking-widest absolute -top-3 left-4 px-2 py-0.5" style={{ backgroundColor: 'var(--orange)', color: 'var(--navy)' }}>
              ACTIVE
            </span>
          }
          <div className="flex items-start justify-between mb-2">
            <span className="font-mono text-xs text-signal tracking-widest">{exp.year}</span>
            <span className="font-mono text-xs text-silver tracking-widest">{exp.type}</span>
          </div>
          <h3 className="font-black text-lg uppercase mb-1" style={{ color: 'var(--navy)' }}>{exp.role}</h3>
          <p className="font-mono text-sm mb-3" style={{ color: 'var(--orange)' }}>{exp.company}</p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A4A6A' }}>{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) =>
            <span key={tag} className="font-mono text-xs px-2 py-0.5 border" style={{ borderColor: 'rgba(255,95,31,0.3)', color: '#000000', fontSize: '0.65rem' }}>
                {tag}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Center node */}
      <div className="w-2/12 flex flex-col items-center">
        <div
          className={`w-8 h-8 border-2 flex items-center justify-center transition-all duration-500 ${
          exp.current ? 'timeline-pulse' : ''}`
          }
          style={{
            borderColor: exp.current ? 'var(--orange)' : 'rgba(242,239,233,0.3)',
            backgroundColor: exp.current ? 'var(--orange)' : 'var(--navy)',
            transform: 'rotate(45deg)'
          }}>
          
          <div
            className="w-2 h-2"
            style={{
              backgroundColor: exp.current ? 'var(--navy)' : 'var(--orange)',
              transform: 'rotate(-45deg)'
            }} />
          
        </div>
      </div>

      {/* Spacer */}
      <div className="w-5/12" />
    </div>);

}

export default function ExperienceSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ backgroundColor: 'var(--bone)' }} className="py-24 px-8 lg:px-20 relative overflow-hidden">
      {/* Section number bg */}
      <span
        className="absolute right-8 top-1/2 -translate-y-1/2 font-black select-none hidden lg:block"
        style={{ fontSize: '12rem', lineHeight: 1, color: 'rgba(15,15,30,0.06)' }}>
        
        04
      </span>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start gap-6 mb-16">
          <span className="font-mono text-xs text-signal tracking-widest mt-2">04 //</span>
          <div>
            <p className="font-mono text-xs tracking-widest mb-2" style={{ color: 'var(--silver)' }}>CHRONOLOGICAL_ENGINE</p>
            <h2 className="font-black uppercase leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
              EXPERIENCE
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: 'rgba(15,15,30,0.15)' }} />
          
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-px transition-all duration-1000"
            style={{
              backgroundColor: 'var(--orange)',
              height: visible ? '100%' : '0%',
              opacity: 0.7
            }} />
          

          {/* Nodes */}
          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) =>
            <TimelineNode key={i} exp={exp} index={i} isVisible={visible} />
            )}
          </div>
        </div>

        <p className="font-mono text-xs text-silver/50 mt-12 text-center tracking-widest">
          // EDIT experiences array in components/portfolio/ExperienceSection.jsx
        </p>
      </div>
    </section>);

}