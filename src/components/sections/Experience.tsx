import React from 'react';

interface ExperienceItem {
  company: string;
  logo?: string;
  period: string;
  title: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
  company: "University of Ibadan",
  period: "2022 - Present",
  title: "B.Sc. Computer Science",
  responsibilities: [
    "Maintaining a First Class CGPA of 3.78/4.00.",
    "Dean's List awardee (200 Level, Second Semester - 2025).",
    "Recipient of Most Academically Inclined Award (100 Level, 2024).",
    "Active member of the NACOS Press Association (2024 - Present).",
    "Volunteer at Ibadan Devfest (2025)."
  ]
},
{
  company: "Self-Employed (Freelance)",
  period: "Sep 2023 - May 2024",
  title: "Freelance Web Developer",
  responsibilities: [
    "Developed responsive websites using HTML, CSS, and JavaScript to enhance user experience across multiple devices.",
    "Built and deployed personal and client web projects using React, Node.js, and Tailwind CSS.",
    "Optimized website performance and accessibility, improving load times and usability.",
    "Collaborated with UI/UX designers to refine prototypes and maintain design consistency."
  ]
},
{
  company: "CMS Brand and Prints",
  period: "Nov 2023 - Present",
  title: "UI/UX & Graphic Designer",
  responsibilities: [
    "Designed brand identities, landing pages, and mobile app prototypes for startups and student projects.",
    "Created digital assets for both digital and traditional printing methods.",
    "Trained junior graphic designers and provided design guidance.",
    "Assisted in preparing presentations and visual content for client meetings and project proposals."
  ]
}

  ];

  return (
    <section id="experience" className="min-h-screen bg-gray-50 py-20 border-t border-t-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-12">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-200 px-6 py-2 rounded-full mb-8">
            <h2 className="text-lg font-medium text-gray-700">Experience</h2>
          </div>
          <p className="text-[18px] px-5 md:text-3xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                
                <div className="shrink-0">
                  <div className="text-2xl font-bold text-green-600">
                    {exp.company.toLowerCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="grow">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-2">{exp.period}</p>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-2">•</span>
                        <span className="text-gray-600 leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;