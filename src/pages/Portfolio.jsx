import NavSidebar from '../components/portfolio/NavSidebar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
//import ExperienceSection from '../components/portfolio/ExperienceSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="relative">
      <NavSidebar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/*<ExperienceSection />*/}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}