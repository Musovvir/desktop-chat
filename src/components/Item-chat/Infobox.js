import React from "react";
import PropTypes from "prop-types";

function Infobox({ content }) {
  return <div className='infobox'>{content}</div>;
}

Infobox.propTypes = {
  content: PropTypes.string,
};

export default Infobox;
