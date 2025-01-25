import React, { useState, useEffect } from 'react';
import PageTransition from './common/PageTransition';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorState from './common/ErrorState';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProjects([
        {
          id: 'billbizz',
          title: "Billbizz",
          role: "Team Lead",
          description: [
            {
              id: 'billbizz-desc-1',
              text: "Developing BillBizz, a multi-tenant ERP SaaS with Accounts, Inventory, Sales, and CRM modules"
            },
            {
              id: 'billbizz-desc-2',
              text: "Implementing accounting logic, including journal entries and financial reporting"
            },
            {
              id: 'billbizz-desc-3',
              text: "Building backend infrastructure using Node.js and MongoDB"
            },
            {
              id: 'billbizz-desc-4',
              text: "Setting up CI/CD pipelines using Jenkins and SonarQube"
            },
            {
              id: 'billbizz-desc-5',
              text: "Optimizing API performance and infrastructure costs"
            }
          ]
        },
        {
          id: 'gallery-vision',
          title: "Gallery Vision",
          role: "Team Lead",
          description: [
            {
              id: 'gallery-desc-1',
              text: "Developing YouTube revenue management system with CSV processing"
            },
            {
              id: 'gallery-desc-2',
              text: "Implementing multi-currency support for global transactions"
            },
            {
              id: 'gallery-desc-3',
              text: "Building email notification system for updates"
            },
            {
              id: 'gallery-desc-4',
              text: "Designing scalable architecture for data processing"
            },
            {
              id: 'gallery-desc-5',
              text: "Integrating payment gateway solutions"
            }
          ]
        },
        {
          id: 'sewnex',
          title: "Sewnex",
          role: "Team Lead",
          description: [
            {
              id: 'sewnex-desc-1',
              text: "Developing Sewnex, a textile industry ERP solution"
            },
            {
              id: 'sewnex-desc-2',
              text: "Implementing core business logic and financial reporting"
            },
            {
              id: 'sewnex-desc-3',
              text: "Building backend services with Node.js"
            },
            {
              id: 'sewnex-desc-4',
              text: "Setting up development infrastructure"
            },
            {
              id: 'sewnex-desc-5',
              text: "Optimizing application performance"
            }
          ]
        }
      ]);
    } catch (err) {
      setError('Failed to load projects. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorState message={error} retry={fetchProjects} />;

  return (
    <PageTransition>
      <div name="projects" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out some of my recent work</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-300">{project.title}</h3>
                  <span className="text-accent-light text-sm font-semibold">{project.role}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {project.description.map((item) => (
                    <li key={item.id} className="ml-4 text-sm">{item.text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;