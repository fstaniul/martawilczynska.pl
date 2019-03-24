import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../util/styles";

const Stars = ({ stars }) => {
  // make sure stars are between 0 and 5
  stars = stars > 0 ? (stars < 5 ? stars : 5) : 0;
  const starArr = [];
  for (let i = 0; i < stars; i++) starArr.push(true);
  for (let i = stars; stars < 5; i++) starArr.push(false);
  return (
    <div>
      {starArr.map((colored, i) => (
        <FontAwesomeIcon
          key={i}
          icon="star"
          style={{ color: colored ? colors.blue : colors.gray }}
        />
      ))}
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number.isRequired
};

export default Stars;
