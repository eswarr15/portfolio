import PropTypes from 'prop-types';

const BadgeSection = ({ title, badges }) => (
  <div className="mb-8">
    <h4 className="text-2xl font-semibold mb-4 text-gray-300">{title}</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {badges.map((badge) => (
        <a
          key={badge.link}
          href={badge.link}
          target="_blank"
          rel="noreferrer"
          className="transform hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/50">
            <img
              src={badge.image}
              alt={badge.alt}
              className="w-32 h-32 mb-4 rounded-lg"
            />
            <h3 className="text-center text-sm font-medium text-gray-300">
              {badge.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  </div>
);

BadgeSection.propTypes = {
  title: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};

export default BadgeSection; 