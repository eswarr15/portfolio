import React from 'react';
import PageTransition from './common/PageTransition';

const Experience = () => {
  const experiences = [
    {
      id: 'cygnonex-2024',
      company: "Cygnonex Innovation Pvt Ltd",
      role: "Junior Full Stack Developer",
      period: "March 2024 - Present",
      achievements: [
        {
          id: 'cygnonex-achievement-1',
          text: "Developing backend infrastructure for BillBizz ERP platform"
        },
        {
          id: 'cygnonex-achievement-2',
          text: "Implementing security features including AWS Cognito and JWT authentication"
        },
        {
          id: 'cygnonex-achievement-3',
          text: "Working with CI/CD pipelines using Jenkins"
        },
        {
          id: 'cygnonex-achievement-4',
          text: "Optimizing API performance and infrastructure costs"
        },
        {
          id: 'cygnonex-achievement-5',
          text: "Collaborating with team members on development tasks"
        },
        {
          id: 'cygnonex-achievement-6',
          text: "Learning and implementing best practices in software development"
        }
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "AWS", "Jenkins", "JWT", "AWS Cognito"]
    }
  ];

  return (
    <PageTransition>
      <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Experience
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-300 mb-2">{exp.company}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-accent-light font-semibold">{exp.role}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement.id} className="ml-4">{achievement.text}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-300">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.techStack.map((tech, index) => (
                      <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;