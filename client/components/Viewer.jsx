import React from 'react';
import PropTypes from 'prop-types';

class Viewer extends React.Component {
  constructor(props) { super(props); }

  render() {
    return (
      <span id="Viewer" style={{display:'inline'}}>
        <img src={`http://${this.props.image}`} height="375"></img>
      </span>
    );
  }
}

Viewer.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Viewer;
