import React, { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import PageTransition from './common/PageTransition';

const Contact = () => {
  const contactInfo = [
    {
      id: 'email',
      icon: <FiMail className="text-2xl" />,
      title: 'Email',
      value: 'k.eswar7045@gmail.com',
      link: 'mailto:k.eswar7045@gmail.com'
    },
    {
      id: 'linkedin',
      icon: <FiLinkedin className="text-2xl" />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/eswarkrishnamoorthy/'
    },
    {
      id: 'github',
      icon: <FiGithub className="text-2xl" />,
      title: 'GitHub',
      value: 'View my repositories',
      link: 'https://github.com/eswarr15'
    }
  ];

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mgvovpdv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
              Contact
            </p>
            <p className="py-6 text-gray-300">Get in touch with me</p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info) => (
              <motion.a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 
                  transition-colors duration-300 flex flex-col items-center text-center"
              >
                <div className="text-blue-400 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-gray-800 rounded-lg p-3 text-gray-300 focus:outline-none 
                      focus:ring-2 focus:ring-blue-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-gray-800 rounded-lg p-3 text-gray-300 focus:outline-none 
                      focus:ring-2 focus:ring-blue-400"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-gray-800 rounded-lg p-3 text-gray-300 focus:outline-none 
                    focus:ring-2 focus:ring-blue-400"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between items-center">
                {submitSuccess && (
                  <div className="text-green-500">Message sent successfully!</div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 
                    transition-colors disabled:opacity-50 ml-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;