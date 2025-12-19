import React from 'react';
import { ExternalLink } from 'lucide-react';


interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      title: "Weather App",
      description: "A responsive web application that displays real-time weather data for searched locations. It fetches live information such as temperature and weather conditions from a public API and updates the interface dynamically. Built with modern frontend tools, the app focuses on usability, responsiveness, and clean UI design.",
      image: "/src/assets/weather_app.jpg",
      technologies: ["React", "Next.js", "TypeScript", "Open-meteo API", "PostgreSQL", "Tailwindcss", "Figma", "Git"],
      liveUrl: "https://weather-app-v1-phi.vercel.app/",
      githubUrl: "https://github.com/dude243485/weatherApp"
    },
    {
      title: "W-Finance",
      description: "A web-based expense tracker built with Next.js that allows users to record, categorize, and monitor their expenses. The application focuses on a clean interface, responsive design, and efficient state management to provide a simple and intuitive budgeting experience.",
      image: "/src/assets/w-finance.png",
      technologies: ["React", "Node.js", "Firebase", "Firestore", "Node", "Tailwindcss", "Git", "Zustand", "Vercel"],
      liveUrl: "https://w-finance.vercel.app/",
      githubUrl: "https://github.com/wonuola-y/w-finance"
    },
    {
      title: "Quizlark",
      description: "A desktop quiz application built with Python and CustomTkinter, allowing users to take quizzes and track their performance. It uses OOP principles for structure, Excel for data storage, and Matplotlib to visualize scores and statistics.",
      image: "/src/assets/quizlark_image.png",
      technologies: ["Python", "CustomTkinter", "Excel", "Matplotlib", "OOP", "Git"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/dude243485/QuizLark_2.0"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          
          <div className="flex justify-center mb-8">
            <div className=" w-64"></div>
          </div>
          
          <div className="inline-block bg-gray-200 px-6 py-2 rounded-full mb-8">
            <h2 className="text-lg font-medium text-gray-700">Projects</h2>
          </div>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 md:gap-8 items-center shadow-sm border border-gray-200 rounded-xl ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}  bg-gray-100 flex items-center justify-center p-8`}>
                <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg w-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center"
                  />
                </div>
              </div>

              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="bg-white rounded-xl p-8 ">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;