import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PageTransition from './common/PageTransition';
import { getAssetPath } from '../utils/assetHelpers';

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(null);

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      setDownloadError(null);
      const resumePath = getAssetPath('/assets/pdf/ESWAR K CLOUD RESUME (2).pdf');
      const response = await fetch(resumePath, {
        headers: {
          'Content-Type': 'application/pdf',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ESWAR K CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      setDownloadError('Failed to download resume');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <PageTransition>
      <div name="about" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8 flex justify-between items-center">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
              About Me
            </p>
            {/* Resume Download Button */}
            <button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg 
                hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <FaDownload className="text-lg" />
              )}
              <span>{isDownloading ? 'Downloading...' : 'Download CV'}</span>
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-64 h-64 relative group"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <img
                src={getAssetPath('/assets/images/profile_pic.jpg')}
                alt="ESWAR K"
                className="w-64 h-64 object-cover rounded-xl relative z-10"
                onError={(e) => {
                  e.target.src = getAssetPath('/assets/images/placeholder.jpg');
                  e.target.onerror = null;
                }}
              />
            </motion.div>

            {/* Introduction */}
            <div className="flex-1">
              <div className="text-xl text-gray-300 space-y-4">
                <p>
                  I am a Cloud and DevOps Engineer, specializing in designing scalable cloud infrastructures using AWS, Azure, GCP, and Hostinger. 
                  I automate deployment pipelines and optimize workflows with various DevOps tools. With expertise in cloud technologies and DevOps best practices,
                  I focus on building efficient, secure, and reliable systems that enhance software delivery and operational performance.
                </p>
                <p>
                  My journey in technology has been driven by a constant desire to learn and adapt to emerging technologies, 
                  particularly in the realm of cloud computing, DevOps practices, and scalable infrastructure solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Experience & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* What I Do */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <FaCode />
                What I Do
              </h3>
              <ul className="list-none space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <FaServer className="text-blue-400" />
                  Work with AWS and Azure cloud technologies to design and manage scalable infrastructures
                </li>
                <li className="flex items-center gap-2">
                  <FaServer className="text-blue-400" />
                  Implement and automate CI/CD pipelines for seamless application deployment
                </li>
                <li className="flex items-center gap-2">
                  <FaServer className="text-blue-400" />
                  Set up and manage CI/CD pipelines
                </li>
                <li className="flex items-center gap-2">
                  <FaServer className="text-blue-400" />
                  Cloud infrastructure management
                </li>
                <li className="flex items-center gap-2">
                  <FaServer className="text-blue-400" />
                  Utilize DevOps tools to enhance infrastructure management and optimization 
                </li>
              </ul>
            </div>

            {/* Education & Experience */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <FaGraduationCap />
                Education & Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">Professional Experience</h4>
                  <div className="flex items-start gap-2 mt-2">
                    <FaBriefcase className="mt-1 text-blue-400" />
                    <div>
                      <p className="font-medium">Junior Cloud Engineer</p>
                      <p className="text-sm">Cygnonex Innovation Pvt Ltd</p>
                      <p className="text-sm text-gray-400">October 2024 - Present</p>
                    </div>
                  </div>
                </div>

                {/* Added Experience */}
                <div>
                  <h4 className="font-semibold text-white"></h4>
                  <div className="flex items-start gap-2 mt-2">
                    <FaBriefcase className="mt-1 text-blue-400" />
                    <div>
                      <p className="font-medium">Jio Platforms Limited</p>
                      <p className="text-sm">Cloud and DevOps Intern</p>
                      <p className="text-sm text-gray-400">October 2023 - June 2024</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white">Education</h4>
                  <div className="flex items-start gap-2 mt-2">
                    <FaGraduationCap className="mt-1 text-blue-400" />
                    <div>
                      <p className="font-medium">Bachelor's Degree in Computer Science</p>
                      <p className="text-sm">E.G.S Pillay College of Engineering </p>
                      <p className="text-sm text-gray-400">2020 - 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Philosophy */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <FaCode />
              Work Philosophy
            </h3>
            <p className="text-gray-300">
              I believe in the power of collaboration and continuous learning. I strive to foster a positive and inclusive work culture where every voice is valued.
              Easy to learn new things and adapt to different people's approaches, I am committed to staying up-to-date with the latest technologies and best practices, 
              always eager to learn from my colleagues and mentors.
            </p>
          </div>

          {downloadError && (
            <p className="text-red-500 text-sm mt-2">{downloadError}</p>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
