import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Loading from './common/Loading';
import Error from './common/Error';

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = 'eswarr15'; // Replace with your GitHub username

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 pt-24"
    >
      <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8">
        GitHub Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(repo => (
          <motion.div
            key={repo.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-primary-light dark:bg-primary-dark p-6 rounded-lg shadow-lg"
          >
            <h3 className="font-bold text-text-light dark:text-text-dark mb-2">
              {repo.name}
            </h3>
            <p className="text-text-light dark:text-text-dark opacity-75 text-sm mb-4">
              {repo.description || 'No description available'}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-accent-light">
                ⭐ {repo.stargazers_count}
              </span>
              <span className="text-sm text-accent-light">
                🍴 {repo.forks_count}
              </span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-accent-light hover:underline"
            >
              View Repository →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Github;