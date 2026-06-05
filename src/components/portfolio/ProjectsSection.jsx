import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Ecommerce API',
    description: 'Created an Ecommerce API using Node.js Express.js, using MongoDB as the database. Below is the link for the Postman Documentation',
    tags: ['Express.js', 'Node.js', 'MongoDB', 'Postman'],
    liveUrl: 'https://documenter.getpostman.com/view/54274271/2sBXqNmeFd',
    //githubUrl: 'https://github.com/yourusername/project',
    color: '#1A1A35',
    image: '/images/ECommerce API.jpg',
  },
  {
    title: 'ECommerce Webapp',
    description: 'Created Frontend using Vue.js to connect the Ecommerce API hosted in AWS',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'AWS'],
    liveUrl: 'https://e-commerce-workflow-management-app.vercel.app/',
    githubUrl: 'https://github.com/rauelguimmayen/E-Commerce-Workflow-Management-App',
    color: '#1E1030',
    image: '/images/ECommerce Webapp.jpg',
  },
  {
    title: 'Fitness Tracker App',
    description: 'Created Frontend using Vue.js, API hosted in Render and Frontend hosted in Vercel',
    tags: ['HTLM', 'CSS', 'Bootstrap','MongoDB', 'Render','Vercel', 'Github'],
    liveUrl: 'https://fitness-tracker-app-chi.vercel.app/',
    githubUrl: 'https://github.com/rauelguimmayen/FitnessTrackerApp',
    color: '#0F1A20',
    image: '/images/FitnessTrackerApp.jpg',
  },
  {
    title: '101 Movies - Movie App',
    description: 'Bootcamp Project, Built with Express.js and MongoDB for the Backend and Vue.js for the Frontend',
    tags: ['Vue.js', 'Express.js', 'Bootstrap','MongoDB', 'Render','Vercel', 'Github'],
    liveUrl: 'https://movie-web-app-guimmayen.vercel.app/',
    githubUrl: 'https://github.com/rauelguimmayen/MovieWebApp-guimmayen',
    color: '#0F1A20',
    image: '/images/101Movies.jpg',
  },
  {
    title: 'Postly - Blog Application',
    description: 'Bootcamp Project, Built with Express.js and MongoDB for the Backend and Vue.js for the Frontend',
    tags: ['Vue.js', 'Express.js', 'Bootstrap','MongoDB', 'Render','Vercel', 'Github'],
    liveUrl: 'https://blog-application-guimmayen.vercel.app/',
    githubUrl: 'https://github.com/rauelguimmayen/BlogApplication-guimmayen',
    color: '#0F1A20',
    image: '/images/BlogApp.jpg',
  },
  {
    title: 'Shop Vibe Webapp',
    description: 'Personal Project, an ECommerce webapp for multiple categories of products.',
    tags: ['HTLM', 'CSS', 'Bootstrap','MongoDB', 'Render','Github'],
    liveUrl: 'https://shopvibe-cvgm.onrender.com',
    githubUrl: 'https://github.com/rauelguimmayen/ECommerceShopVibe',
    color: '#0F1A20',
    image: '/images/ShopVibe.jpg',
  },
  {
    title: 'SkyRoam',
    description: 'Personal Project, Flight Booking App built with Express.js and MongoDB',
    tags: ['HTLM', 'CSS', 'Bootstrap','MongoDB', 'Render','Github'],
    liveUrl: 'https://flight-booking-api-ojw4.onrender.com',
    githubUrl: 'https://github.com/rauelguimmayen/Flight-Booking-API',
    color: '#0F1A20',
    image: '/images/SkyRoam.jpg',
  },
  {
    title: 'DevCourse - Course Booking App',
    description: 'Personal Project, Course Booking App built with Express.js and MongoDB',
    tags: ['HTLM', 'CSS', 'Bootstrap','MongoDB', 'Render','Github'],
    liveUrl: 'https://project-course-booking-api.onrender.com/',
    githubUrl: 'https://github.com/rauelguimmayen/project-course-booking-api',
    color: '#0F1A20',
    image: '/images/DevCourse.jpg',
  },
  

  { placeholder: true },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ backgroundColor: 'var(--navy)' }} className="py-24 px-8 lg:px-20 relative overflow-hidden">
      {/* Section number bg */}
      <span
        className="absolute right-8 top-1/2 -translate-y-1/2 font-black select-none hidden lg:block"
        style={{ fontSize: '12rem', lineHeight: 1, color: 'rgba(255,95,31,0.04)' }}
      >
        03
      </span>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start gap-6 mb-4">
          <span className="font-mono text-xs text-signal tracking-widest mt-2">03 //</span>
          <div>
            <p className="font-mono text-xs tracking-widest mb-2 text-silver">PROJECT_MATRIX</p>
            <h2 className="font-black uppercase leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--bone)', letterSpacing: '-0.02em' }}>
              PROJECTS
            </h2>
          </div>
        </div>

        <p className="text-silver mb-12 max-w-xl leading-relaxed ml-14">
          Engineered systems and digital products. Live deployments and classified future innovations.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* Add project note */}
        <p className="font-mono text-xs text-silver/50 mt-8 text-center tracking-widest">
          // EDIT projects array in components/portfolio/ProjectsSection.jsx to add your projects
        </p>
      </div>
    </section>
  );
}