const skills = {
  frontend: ['Vue.js','React.js' , 'Bootstrap', 'Tailwind CSS', 'HTML5/CSS3'],
  backend: ['Node.js', 'Express.js', 'RESTful APIs', 'AWS Lambda' ],
  databases: ['MongoDB'],
  devops: ['AWS', 'CI/CD', 'Git', 'GitHub', 'Vercel','Render' ],
};

const SkillCategory = ({ title, items }) => (
  <div className="border p-6" style={{ borderColor: 'rgba(142,142,158,0.2)' }}>
    <p className="font-mono text-xs text-signal tracking-widest mb-4 uppercase">{title}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span
          key={skill}
          className="font-mono text-xs px-3 py-1 border font-medium"
          style={{ borderColor: 'rgba(242,239,233,0.2)', color: 'var(--silver)', backgroundColor: 'rgba(255,95,31,0.05)' }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: 'var(--bone)' }} className="py-24 px-8 lg:px-20 relative overflow-hidden">
      {/* Section number bg */}
      <span
        className="absolute right-8 top-1/2 -translate-y-1/2 font-black select-none hidden lg:block"
        style={{ fontSize: '12rem', lineHeight: 1, color: 'rgba(15,15,30,0.06)' }}
      >
        02
      </span>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex items-start gap-6 mb-16">
          <span className="font-mono text-xs text-signal tracking-widest mt-2">02 //</span>
          <div>
            <p className="font-mono text-xs tracking-widest mb-2" style={{ color: 'var(--silver)' }}>SYSTEM_OVERVIEW</p>
            <h2 className="font-black uppercase leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
              ABOUT ME
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div>
            <div className="border-l-4 pl-6 mb-8" style={{ borderColor: 'var(--orange)' }}>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--navy)' }}>
                I architect full-stack digital solutions that marry elegant frontend experiences with robust, scalable backends. My approach is systematic — every line of code is intentional, every system is engineered to perform.
              </p>
            </div>
            <p className="leading-relaxed mb-6" style={{ color: '#4A4A6A' }}>
              With expertise spanning the entire development stack, I translate complex requirements into clean, maintainable systems. From designing pixel-perfect interfaces to engineering high-performance APIs, I build with both vision and precision.
            </p>
            <p className="leading-relaxed" style={{ color: '#4A4A6A' }}>
              Currently open to new projects and collaborations. Let's build something extraordinary together.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                /*{ num: 'X+', label: 'YEARS EXP' },*/
               /* { num: '00+', label: 'PROJECTS' },
                { num: '00+', label: 'CLIENTS' },*/
              ].map(({ num, label }) => (
                <div key={label} className="border-t-2 pt-4" style={{ borderColor: 'var(--orange)' }}>
                  <p className="font-black text-3xl" style={{ color: 'var(--navy)' }}>{num}</p>
                  <p className="font-mono text-xs tracking-widest mt-1" style={{ color: 'var(--silver)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile placeholder */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-64 h-64 border-2 flex items-center justify-center"
              style={{ borderColor: 'var(--navy)' }}
            >
              <div className="absolute -top-1 -right-1 w-full h-full border-2" style={{ borderColor: 'var(--orange)' }} />
              <img
                  src="/images/profile picture.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div>
          <p className="font-mono text-xs text-signal tracking-widest mb-6">TECH_STACK // CAPABILITIES</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(142,142,158,0.2)' }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ backgroundColor: 'var(--bone)' }}>
                <SkillCategory title={`${category}_stack`} items={items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}