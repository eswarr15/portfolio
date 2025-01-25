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
      const resumePath = getAssetPath('/assets/pdf/Mohammed_Thaha_Resume.pdf');
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
      link.download = 'Mohammed Thaha CV.pdf';
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
                alt="Mohammed Thaha"
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
                  I am a passionate Backend Engineer with expertise in DevOps practices and cloud technologies.
                  With a strong foundation in building scalable applications and implementing robust infrastructure solutions,
                  I specialize in creating efficient, maintainable, and secure systems.
                </p>
                <p>
                  My journey in technology has been driven by a constant desire to learn and adapt to emerging technologies,
                  particularly in the realm of cloud computing and microservices architecture.
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
                  Develop full-stack applications using MERN technology
                </li>
                <li className="flex items-center gap-2">
                  <FaServer className="text-blue-400" />
                  Design and implement scalable backend architectures
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
                  Database design and optimization
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
                      <p className="font-medium">Junior Full Stack Developer</p>
                      <p className="text-sm">Cygnonex Innovation Pvt Ltd</p>
                      <p className="text-sm text-gray-400">March 2024 - Present</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white">Education</h4>
                  <div className="flex items-start gap-2 mt-2">
                    <FaGraduationCap className="mt-1 text-blue-400" />
                    <div>
                      <p className="font-medium">Bachelor's Degree in Computer Science</p>
                      <p className="text-sm">Valia Koonambaikulathamma College of Engineering & Technology</p>
                      <p className="text-sm text-gray-400">2019 - 2023</p>
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
              I believe in the power of collaboration and continuous learning. I strive to create a positive and inclusive work environment,
              where everyone's voice is heard and valued. I am committed to staying updated with the latest technologies and best practices,
              and I am always eager to learn from my colleagues and mentors.
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