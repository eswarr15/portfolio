import PropTypes from 'prop-types';

const SkillSection = ({ title, items }) => (
  <div className="mb-8">
    <h4 className="text-2xl font-semibold mb-4 text-gray-300">{title}</h4>
    <ul className="list-disc list-inside space-y-2 text-gray-400">
      {items.map((item, index) => (
        <li key={`${title}-item-${item}`} className="ml-4">{item}</li>
      ))}
    </ul>
  </div>
);

SkillSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SkillSection; 