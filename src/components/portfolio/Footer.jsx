import { Github, Linkedin, Mail, FileUser } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--navy)' }} className="py-12 px-8 lg:px-20">
      <div style={{ borderTopColor: 'rgba(142,142,158,0.15)', borderTopWidth: '1px', borderTopStyle: 'solid' }}>
        <div className="max-w-6xl mx-auto pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div>
            <p className="font-black text-2xl uppercase" style={{ color: 'var(--bone)', letterSpacing: '-0.02em' }}>
              RAUEL GUIMMAYEN
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: 'var(--silver)' }}>
              Full Stack Developer // Available for Hire
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rauelguimmayen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border p-3 transition-all duration-100 chunky-hover"
              style={{ borderColor: 'rgba(242,239,233,0.2)', color: 'var(--bone)' }}
            >
              <Github size={18} />
              <span className="font-mono text-xs tracking-widest hidden sm:inline">GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rauel-guimmayen-3a3a26169/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border p-3 transition-all duration-100 chunky-hover"
              style={{ borderColor: 'rgba(242,239,233,0.2)', color: 'var(--bone)' }}
            >
              <Linkedin size={18} />
              <span className="font-mono text-xs tracking-widest hidden sm:inline">LINKEDIN</span>
            </a>
            <a
              href="mailto:rauelguimmayen@gmail.com"
              className="group flex items-center gap-2 border p-3 transition-all duration-100 chunky-hover"
              style={{ borderColor: 'rgba(242,239,233,0.2)', color: 'var(--bone)' }}
            >
              <Mail size={18} />
              <span className="font-mono text-xs tracking-widest hidden sm:inline">EMAIL</span>
            </a>
            <a
              href="Rauel_Guimmayen_CV.pdf"
              className="group flex items-center gap-2 border p-3 transition-all duration-100 chunky-hover"
              style={{ borderColor: 'rgba(242,239,233,0.2)', color: 'var(--bone)' }} target="_blank"
            >
              <FileUser size={18} />
              <span className="font-mono text-xs tracking-widest hidden sm:inline">RESUME</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs" style={{ color: 'var(--silver)' }}>
            © {new Date().getFullYear()} // ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}