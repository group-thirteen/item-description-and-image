import React from 'react';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  constructor(props) { super(props); }

  render() {
    return (
      <span id="Carousel" style={{display:'inline'}}>
        {this.props.URLs.map((url, index) => (
          <div key={index}>
            <img src={`http://${url}`} height="75"></img>
          </div>
        ))}
      </span>
    );
  }
}

Carousel.propTypes = {
  URLs: PropTypes.array.isRequired,
};

export default Carousel;
