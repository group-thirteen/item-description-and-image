import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const server = 'http://localhost:3000';

const Modal = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #FFFFFF;
  position: fixed;
  left: 0;
  top: 0;
`;

const Button = styled.img`
  position: fixed;
  top: 0;
  right: 25px;
  height: 25px;
`;

const FixedSpan = styled.span`
  position: fixed;

`;

function ModalCarousel(props) {
  return (
    <FixedSpan id="Carousel" >
      {props.URLs.map((url, index) => (
        <div key={index}>
          <img src={`http://${url}`} height="75"
              onClick={props.setIndex(index)}>
              </img>
        </div>
      ))}
    </FixedSpan>
  );
}

ModalCarousel.propTypes = {
  URLs: PropTypes.array.isRequired,
  current: PropTypes.number,
  setIndex: PropTypes.func.isRequired,
};

function ZoomModal(props) {
  return (
    <Modal onClick={props.toggle}>
      <Button src={`${server}/circleX.png`} />
      <ModalCarousel URLs={props.URLs}
          setIndex={props.setIndex}/>
      <img src={`http://${props.URLs[props.current]}`}></img>
    </Modal>
  );
}

ZoomModal.propTypes = {
  URLs: PropTypes.array.isRequired,
  current: PropTypes.number,
  setIndex: PropTypes.func.isRequired,
  toggle: PropTypes.func,
};

export default ZoomModal;
