import PropTypes from "prop-types";

export default function Square({ marker, id }) {
  return (
    <div>
      <button id={id} type="button">
        {marker}
      </button>
    </div>
  );
}

/* video component
    <button type="button" id={index} className="square">
      {marker}
    </button>
*/

/* video
Square.propTypes = {
  marker: PropTypes.oneOf(["X", "O", ""]),
  id: PropTypes.number.isRequired,
};
*/

Square.propTypes = {
  marker: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Square.defaultProps = {
  marker: "",
};
