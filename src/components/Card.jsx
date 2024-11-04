/* eslint-disable no-unused-vars */

// eslint-disable-next-line react/prop-types
const Card = ({ coffee }) => {
  // eslint-disable-next-line react/prop-types
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
