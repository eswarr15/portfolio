import React from 'react';
import PageTransition from './common/PageTransition';

const Experience = () => {
  const experiences = [
    {
      id: 'cygnonex-2024',
      company: "Cygnonex Innovation Pvt Ltd",
      role: "Junior Cloud Engineer",
      period: "Internship: 3 months | Permanent: Present (from Oct 2024)",
      achievements: [
        {
          id: 'cygnonex-achievement-1',
          text: "Configuring and managing cloud infrastructure using AWS"
        },
        {
          id: 'cygnonex-achievement-2',
          text: "Collaborated with DevOps and cloud teams to deploy and optimize cloud solutions"
        },
        {
          id: 'cygnonex-achievement-3',
          text: "Set up and maintained Jenkins CI/CD pipelines"
        },
        {
          id: 'cygnonex-achievement-4',
          text: "Automated infrastructure deployments with Terraform"
        },
        {
          id: 'cygnonex-achievement-5',
          text: "Managed AWS services including EC2, ECS, and EKS for testing"
        },
        {
          id: 'cygnonex-achievement-6',
          text: "Managed Microsoft 365 workspaces and Entra ID for user authentication"
        },
        {
          id: 'cygnonex-achievement-7',
          text: "Optimized cloud resource usage for cost efficiency while monitoring AWS payments"
        }
      ],
      techStack: ["Azure", "AWS", "Hostinger", "Jenkins", "Terraform", "Ansible", "GitHub", "MongoDB"]
    },
    {
      id: 'jio-2024',
      company: "Jio Platforms Limited (Reliance)",
      role: "Cloud and DevOps Trainee",
      period: "Internship: Oct 2023 to Jun 2024",
      achievements: [
        {
          id: 'jio-achievement-1',
          text: "Configured and oversaw CI/CD pipelines utilizing Azure DevOps"
        },
        {
          id: 'jio-achievement-2',
          text: "Worked with CI/CD team to deploy automation strategies to streamline software development"
        },
        {
          id: 'jio-achievement-3',
          text: "Set up continuous integration workflows to ensure code quality"
        },
        {
          id: 'jio-achievement-4',
          text: "Implemented continuous deployment pipelines for efficient release management"
        }
      ],
      techStack: ["Azure DevOps", "CI/CD", "Automation", "Software Development"]
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
