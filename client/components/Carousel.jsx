import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronUp, ChevronDown } from '@styled-icons/boxicons-solid';

const imgHeight = 75;

const CarouselWrapper = styled.div`
height: ${(props) => (`${imgHeight * props.numImages}px`)};
overflow: hidden;
`;

const GreyChevUp = styled(ChevronUp)`
  color: #333;
  height: 20px;
  width: 49px;
`;

const GreyChevDown = styled(ChevronDown)`
  color: #333;
  height: 20px;
  width: 49px;
`;

const ImageSelect = styled.div`
  transform: ${props => `translateY(-${props.offset}px)`}
`;

function Carousel(props) {
  const offset = props.top * (imgHeight + 4);

  return (
    <div id="Carousel" >
      <GreyChevUp onClick={props.shiftUp} />
      <CarouselWrapper numImages={props.numImages}>
      <ImageSelect id ="imageSelect" offset={offset}>
      {props.URLs.map((url, index) => (
        <div key={index}>
          <img src={`http://${url}`} height={`${imgHeight}px`}
              onClick={props.setIndex(index)}>
              </img>
        </div>
      ))}
      </ImageSelect>
      </CarouselWrapper>
      <GreyChevDown onClick={props.shiftDown} />
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
  numImages: PropTypes.number,
};

export default Carousel;
