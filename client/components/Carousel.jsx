import React from 'react';
import PropTypes from 'prop-types';

function Carousel(props) {
  return (
    <span id="Carousel" >
      {props.URLs.map((url, index) => (
        <div key={index}>
          <img src={`http://${url}`} height="75"
              onClick={props.setIndex(index)}>
              </img>
        </div>
      ))}
    </span>
  );
}

Carousel.propTypes = {
  URLs: PropTypes.array.isRequired,
  current: PropTypes.number,
  setIndex: PropTypes.func.isRequired,
};

export default Carousel;
