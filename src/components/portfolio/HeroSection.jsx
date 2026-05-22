import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden circuit-pattern"
      style={{ backgroundColor: 'var(--navy)' }}
    >
      {/* Top meta bar */}
      <div className="flex items-center justify-between px-8 lg:px-20 pt-8">
        <span className="font-mono text-xs text-silver tracking-widest">PORTFOLIO_v2.0</span>
        <span className="font-mono text-xs text-silver tracking-widest">EST. 2026</span>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-12">
        {/* System readout */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-signal tracking-widest">SYS:ONLINE</span>
          <div className="w-2 h-2 rounded-full bg-signal animate-pulse" />
          <span className="font-mono text-xs text-silver tracking-widest">STATUS: AVAILABLE FOR HIRE</span>
        </div>

        {/* Name - massive */}
        <div className="mb-4">
          <h1 className="font-black uppercase leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', color: 'var(--bone)', letterSpacing: '-0.02em' }}>
            RAUEL
          </h1>
          <h1 className="font-black uppercase leading-none text-outline" style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', letterSpacing: '-0.02em' }}>
            GUIMMAYEN
          </h1>
        </div>

        {/* Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-signal" />
          <span className="font-mono text-signal tracking-[0.3em] text-sm font-bold uppercase">Full Stack Developer</span>
          <div className="h-px w-12 bg-signal" />
        </div>

        {/* Tagline */}
        <p className="text-silver text-lg max-w-xl leading-relaxed mb-12">
          Engineering digital ecosystems from concept to deployment. 
          Frontend precision. Backend power. Zero compromises.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="chunky-hover font-mono font-bold text-sm tracking-widest px-8 py-4 border-2 uppercase"
            style={{ borderColor: 'var(--orange)', color: 'var(--orange)', backgroundColor: 'transparent' }}
          >
            [ INITIALIZE_EXPLORATION ]
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="chunky-hover-dark font-mono font-bold text-sm tracking-widest px-8 py-4 border-2 uppercase"
            style={{ borderColor: 'var(--bone)', color: 'var(--navy)', backgroundColor: 'var(--bone)' }}
          >
            DEPLOY_MESSAGE →
          </button>
        </div>
      </div>

      {/* System dashboard bottom bar */}
      {/*return this when adding Experince className="border-t px-8 lg:px-20 py-6 grid grid-cols-2 md:grid-cols-4 gap-4"*/}
      <div  className="border-t px-8 lg:px-20 py-6 grid grid-cols-3 gap-4 items-center justify-items-center" style={{ borderColor: 'rgba(142,142,158,0.2)' }}>
        <div>
          <p className="font-mono text-xs text-silver mb-1">LOCAL_TIME</p>
          <p className="font-mono text-sm text-bone font-bold">{time}</p>
        </div>
        <div>
          <p className="font-mono text-xs text-silver mb-1">STACK_STATUS</p>
          <p className="font-mono text-sm text-signal font-bold">FULL_STACK</p>
        </div>
        {/*<div>
          <p className="font-mono text-xs text-silver mb-1">EXPERIENCE</p>
          <p className="font-mono text-sm text-bone font-bold">X+ YEARS</p>
        </div>*/}
        <div>
          <p className="font-mono text-xs text-silver mb-1">AVAILABILITY</p>
          <p className="font-mono text-sm text-signal font-bold">OPEN</p>
        </div>
      </div>

      {/* Section number */}
      <span
        className="absolute right-8 top-1/2 -translate-y-1/2 font-black text-outline-orange select-none hidden lg:block"
        style={{ fontSize: '12rem', lineHeight: 1, opacity: 0.15 }}
      >
        01
      </span>
    </section>
  );
}