import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { XCircle } from '@styled-icons/boxicons-solid';
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

const Fullscreen = styled.img`
  position: relative;
  width: calc(100% - 60px);
  left: 60px;
`;

const Button = styled(XCircle)`
  position: fixed;
  top: 0;
  right: 25px;
  height: 25px;
  z-index: 2;
`;

const FixedSpan = styled.span`
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 2;
  height:100%;
  width: 70px;
  overflow-y: scroll;
`;

function ModalCarousel(props) {
  return (
    <FixedSpan id="ModalCarousel" >
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
    <Modal>
      <Button src={`${server}/circleX.png`}
        onClick={props.toggle}
      />
      <ModalCarousel URLs={props.URLs}
          setIndex={props.setIndex}/>
      <Fullscreen src={`http://${props.URLs[props.current]}`}
        onClick={props.toggle}
      />
    </Modal>
  );
}

ZoomModal.propTypes = {
  URLs: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  toggle: PropTypes.func,
};

export default ZoomModal;
