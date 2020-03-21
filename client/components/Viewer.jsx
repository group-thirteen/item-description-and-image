import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  height: 375px;
`;

function Viewer(props) {
  return (
    <span id="Viewer" >
    <Image src={`http://${props.image}`} onClick={props.toggle} />
    </span>
  );
}

Viewer.propTypes = {
  image: PropTypes.string.isRequired,
  toggle: PropTypes.func,
};

export default Viewer;
