import PropTypes from "prop-types";

export default function Square({ marker, index }) {
  return (
    <button type="button" id={index} className="square">
      {marker}
    </button>
  );
}

Square.propTypes = {
  marker: PropTypes.oneOf(["X", "O", ""]),
  index: PropTypes.number.isRequired,
};

Square.defaultProps = {
  marker: "",
};
