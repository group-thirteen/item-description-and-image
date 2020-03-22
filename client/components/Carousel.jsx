import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Carousel(props) {
  const imgHeight = 75;
  const offset = props.top * imgHeight;
  const imgSelectStyle = {
    transform: `translateY(-${offset}px)`,
    overflow: 'hidden',
    zindex: '-1',
  };

  return (
    <div id="Carousel" >
      <button onClick={props.shiftUp}/>
      <div id ="imageSelect" style={imgSelectStyle}>
      {props.URLs.map((url, index) => (
        <div key={index}>
          <img src={`http://${url}`} height={`${imgHeight}px`}
              onClick={props.setIndex(index)}>
              </img>
        </div>
      ))}
      </div>
      <button onClick={props.shiftDown} />
    </div>
  );
}

Carousel.propTypes = {
  URLs: PropTypes.array.isRequired,
  current: PropTypes.number,
  setIndex: PropTypes.func.isRequired,
  top: PropTypes.number,
  shiftUp: PropTypes.func,
  shiftDown: PropTypes.func,
};

export default Carousel;
