import { motion } from 'framer-motion';

const Error = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-primary-light dark:bg-primary-dark"
    >
      <div className="text-center p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-text-light dark:text-text-dark mb-6">
          {message || "An unexpected error occurred. Please try again later."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-accent-light text-primary-dark rounded-lg hover:opacity-90 transition-opacity"
        >
          Retry
        </button>
      </div>
    </motion.div>
  );
};

export default Error;
