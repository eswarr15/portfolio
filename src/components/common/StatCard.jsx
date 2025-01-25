import { motion } from 'framer-motion';

const StatCard = ({ number, label, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg text-center"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-3xl font-bold text-white mb-2">{number}</h3>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  );
};

export default StatCard;