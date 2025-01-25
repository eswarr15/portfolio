import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 16 }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className={`w-${size} h-${size} border-4 border-blue-400 border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.number
};

export default LoadingSpinner; 