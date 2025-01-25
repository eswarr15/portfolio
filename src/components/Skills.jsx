import { motion } from 'framer-motion';
import { FaNodeJs, FaAws, FaDocker, FaLinux, FaGithub } from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiJenkins, SiNginx, SiPostman, SiJira, SiJest, 
  SiMocha, SiChai, SiRedis, SiJsonwebtokens, 
  SiSwagger, SiAuth0
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import PageTransition from './common/PageTransition';

const Skills = () => {
  const skillsets = {
    backend: [
      { id: 'nodejs', icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
      { id: 'express', icon: <SiExpress />, name: 'Express.js' },
      { id: 'mongodb', icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
      { id: 'postgresql', icon: <SiPostgresql className="text-blue-400" />, name: 'PostgreSQL' },
      { id: 'mysql', icon: <SiMysql className="text-blue-500" />, name: 'MySQL' },
      { id: 'redis', icon: <SiRedis className="text-red-500" />, name: 'Redis' },
      { id: 'rest', icon: <SiNginx className="text-green-500" />, name: 'RESTful APIs' }
    ],
    devops: [
      { id: 'aws', icon: <FaAws className="text-orange-500" />, name: 'AWS' },
      { id: 'docker', icon: <FaDocker className="text-blue-500" />, name: 'Docker' },
      { id: 'jenkins', icon: <SiJenkins className="text-red-500" />, name: 'Jenkins' },
      { id: 'linux', icon: <FaLinux className="text-yellow-500" />, name: 'Linux' },
      { id: 'nginx', icon: <SiNginx className="text-green-500" />, name: 'Nginx' },
      { id: 'git', icon: <FaGithub className="text-gray-300" />, name: 'Git' }
    ],
    tools: [
      { id: 'postman', icon: <SiPostman className="text-orange-500" />, name: 'Postman' },
      { id: 'jira', icon: <SiJira className="text-blue-500" />, name: 'Jira' },
      { id: 'vscode', icon: <VscCode className="text-blue-400" />, name: 'VS Code' },
      { id: 'swagger', icon: <SiSwagger className="text-green-400" />, name: 'Swagger' }
    ],
    security: [
      { id: 'jwt', icon: <SiJsonwebtokens className="text-pink-500" />, name: 'JWT' },
      { id: 'oauth', icon: <SiAuth0 className="text-orange-500" />, name: 'OAuth 2.0' },
      { id: 'cognito', icon: <FaAws className="text-orange-500" />, name: 'AWS Cognito' }
    ],
    testing: [
      { id: 'jest', icon: <SiJest className="text-red-600" />, name: 'Jest' },
      { id: 'mocha', icon: <SiMocha className="text-brown-500" />, name: 'Mocha' },
      { id: 'chai', icon: <SiChai className="text-red-400" />, name: 'Chai' }
    ]
  };

  const categoryTitles = {
    backend: 'Backend Development',
    devops: 'DevOps & Cloud',
    tools: 'Development Tools',
    security: 'Security',
    testing: 'Testing & QA'
  };

  return (
    <PageTransition>
      <div name="skills" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Skills
            </p>
            <p className="py-6 text-gray-300">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsets).map(([category, skills]) => (
              <motion.div
                key={category}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  {categoryTitles[category]}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map(skill => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <div className="text-xl">
                        {skill.icon}
                      </div>
                      <span className="text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-12 bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Additional Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="text-lg font-medium text-blue-400 mb-2">Architecture</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Microservices Architecture</li>
                  <li>Event-Driven Design</li>
                  <li>API Gateway Implementation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-400 mb-2">Security</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>JWT & OAuth 2.0</li>
                  <li>AWS Cognito Integration</li>
                  <li>Role-Based Access Control</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;