import PropTypes from "prop-types";

export default function Square({ marker }) {
  return (
    <button type="button" className="square">
      {marker}
    </button>
  );
}

Square.propTypes = {
  marker: PropTypes.oneOf(["X", "O", ""]),
};

Square.defaultProps = {
  marker: "",
};
