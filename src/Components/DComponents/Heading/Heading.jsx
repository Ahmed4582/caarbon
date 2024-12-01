import PropTypes from "prop-types"; // Import PropTypes

const Heading = ({ Title }) => {
  return (
    <div>
      <h1 className="text-[#1A1A1A] my-4 font-bold text-[32px] text-center leading-10 ">
        {Title}
      </h1>
    </div>
  )
};

export default Heading;
Heading.propTypes = {
  Title: PropTypes.string, // Validate Title prop
};
