import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronUp, ChevronDown } from '@styled-icons/boxicons-solid';

const imgHeight = 75;

const CarouselWrapper = styled.div`
height: ${(props) => (`${imgHeight * props.numImages}px`)};
overflow: hidden;
`;

const chevStyles = `
  color: #333;
  height: 20px;
  width: 49px;
`;
const GreyChevUp = styled(ChevronUp)`${chevStyles}`;

const GreyChevDown = styled(ChevronDown)`${chevStyles}`;

const ImageSelect = styled.div`
  transform: ${(props) => `translateY(-${props.offset}px)`}
`;

function Carousel(props) {
  const offset = props.top * (imgHeight + 4);

  return (
    <div id="Carousel" >
      {props.top !== 0 && <GreyChevUp onClick={props.shiftUp} />}
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
      {props.top < props.URLs.length - props.numImages
      && <GreyChevDown onClick={props.shiftDown} />}
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
