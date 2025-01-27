import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Slider from 'react-slick';
import { 
  FaNodeJs, FaAws, FaDocker, FaLinux, FaArrowRight, FaDownload, FaGithub
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiPostgresql, SiRedis, SiJenkins, SiNginx, SiMysql, SiPostman, SiJira, 
  SiJsonwebtokens, SiJest, SiSwagger
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTransition from './common/PageTransition';
import { getAssetPath } from '../utils/assetHelpers';

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(null);

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadError(null);
    
    try {
      const resumePath = getAssetPath('/assets/pdf/ESWAR K CLOUD RESUME (2).pdf');
      const response = await fetch(resumePath, {
        headers: {
          'Content-Type': 'application/pdf',
        },
      });
      
      if (!response.ok) {
        throw new Error('Resume file not found');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Eswar K CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setDownloadError(null);
    } catch (error) {
      console.error('Error downloading resume:', error);
      setDownloadError('Failed to download resume. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  };

  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      url: 'https://github.com/eswarr15',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/eswarkrishnamoorthy/',
    },
    {
      id: 'email',
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      url: 'mailto:k.eswar7045@gmail.com',
    },
  ];

  const skillIcons = [
    // Backend & Databases
    { id: 'nodejs', icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-500' },
    { id: 'express', icon: <SiExpress />, name: 'Express.js', color: 'text-gray-300' },
    { id: 'mongodb', icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-500' },

    
    // Cloud & DevOps
    { id: 'aws', icon: <FaAws />, name: 'AWS', color: 'text-orange-500' },
    { id: 'terraform', icon: <FaGithub />, name: 'Terraform', color: 'text-gray-300' },
    { id: 'docker', icon: <FaDocker />, name: 'Docker', color: 'text-blue-500' },
    { id: 'jenkins', icon: <SiJenkins />, name: 'Jenkins', color: 'text-red-500' },
    { id: 'linux', icon: <FaLinux />, name: 'Linux', color: 'text-yellow-500' },
    { id: 'ansible', icon: <FaGithub />, name: 'Ansible', color: 'text-gray-300' },
    { id: 'hostinger', icon: <FaGithub />, name: 'Hostinger', color: 'text-green-500' },
    { id: 'api', icon: <FaGithub />, name: 'API', color: 'text-blue-400' },
    { id: 'gcp', icon: <FaGithub />, name: 'GCP', color: 'text-blue-500' },
    { id: 'nginx', icon: <SiNginx />, name: 'Nginx', color: 'text-green-500' },
    
    // Development Tools
    { id: 'git', icon: <FaGithub />, name: 'Git', color: 'text-gray-300' },
    { id: 'vscode', icon: <VscCode />, name: 'VS Code', color: 'text-blue-400' },
    
    // Security & Testing
    { id: 'sonarqube', icon: <SiJenkins />, name: 'SonarQube', color: 'text-orange-500' },
    { id: 'owasp', icon: <SiJenkins />, name: 'OWASP', color: 'text-blue-500' }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  // Update featured projects with correct image paths
  const featuredProjects = [
    {
      id: 'billbizz',
      title: 'BillBizz',
      description: 'Multi-tenant ERP Solution with comprehensive business management features.',
      image: getAssetPath('/assets/images/BBDash.png'),
      technologies: ['Node.js', 'Express', 'MongoDB']
    },
    {
      id: 'gallery-vision',
      title: 'Gallery Vision',
      description: 'YouTube revenue management system with multi-currency support.',
      image: getAssetPath('/assets/images/GvDash.png'),
      technologies: ['Node.js', 'Express', 'MongoDB']
    },
    {
      id: 'sewnex',
      title: 'Sewnex',
      description: 'Business management platform for textile industry.',
      image: getAssetPath('/assets/images/SewDash.png'),
      technologies: ['Node.js', 'Express', 'MongoDB']
    }
  ];

  return (
    <PageTransition>
      <div className="relative w-full h-screen">
        {/* Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800">
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Enhanced Greeting */}
            <div className="space-y-2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-400 text-xl md:text-2xl font-medium font-space-grotesk"
              >
                <span className="text-gray-300">Hello, I'm</span> Eswar k
              </motion.h2>
              <div className="flex items-center gap-4">
                <div className="h-1 w-24 bg-blue-500/50 rounded"></div>
                <span className="text-gray-400 text-sm">Cloud And Devops Engineer</span>
              </div>
            </div>

            {/* Dynamic Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white font-clash-display leading-tight">
            Designing And Managing<span className="text-blue-400"> Cloud Infrastructure</span> Implementing Cloud Services
            </h1>

            {/* Enhanced Description */}
            <p className="max-w-2xl text-gray-300 text-lg md:text-xl font-general-sans leading-relaxed">
            Junior Cloud and DevOps Engineer specializing in cloud infrastructure and automation. 
            Focused on building and maintaining scalable, secure cloud environments and optimizing development workflows using modern DevOps practices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="text-white px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 
                  to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-colors duration-300 
                  font-medium text-lg flex items-center gap-2 disabled:opacity-50"
              >
                {isDownloading ? (
                  <>
                    <span>Downloading...</span>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    Resume
                    <FaDownload className="text-base" />
                  </>
                )}
              </button>
              {downloadError && (
                <p className="text-red-500 text-sm mt-2">{downloadError}</p>
              )}
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg 
                  hover:bg-blue-400 hover:text-white transition-colors duration-300 
                  font-medium text-lg flex items-center gap-2"
              >
                Contact Me
                <FaArrowRight className="text-base" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Carousel */}
      <div className="w-full bg-black py-12">
        <div className="overflow-hidden">
          <Slider {...sliderSettings}>
            {skillIcons.map((skill) => (
              <div key={skill.id} className="text-center">
                <div className={`text-4xl ${skill.color} mb-3 flex justify-center`}>
                  {skill.icon}
                </div>
                <p className="text-gray-300 text-sm whitespace-nowrap px-2">
                  {skill.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Featured Work Section */}
      <div className="w-full bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 rounded-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full object-cover object-top"
                    style={{ height: '100%' }}
                    onError={(e) => {
                      e.target.src = '/images/placeholder.jpg';
                      e.target.onerror = null;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={`${project.id}-${tech}`} 
                        className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can create something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get in Touch
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;