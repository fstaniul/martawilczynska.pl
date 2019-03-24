import React from "react";
import PropTypes from "prop-types";

const Polymorphic = ({ as: Representation, ...props }) => {
  return <Representation {...props} />;
};

Polymorphic.propTypes = {
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

Polymorphic.defaultProps = {
  as: "div"
};

export default Polymorphic;
