import { motion } from 'framer-motion';

const Logo = ({ className = "" }) => {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`flex items-center ${className}`}
    >
      <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
        <span className="text-primary-dark font-bold text-lg">MTD</span>
      </div>
      <span className="ml-2 text-text-light dark:text-text-dark font-bold">
        Mohammed Thaha Dawood
      </span>
    </motion.div>
  );
};

export default Logo;