import React from 'react';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.current || 0,
    };
  }

  render() {
    return (
      <span id="Carousel" >
        {this.props.URLs.map((url, index) => (
          <div key={index}>
            <img src={`http://${url}`} height="75"
               onClick={this.props.setIndex(index)}>
               </img>
          </div>
        ))}
      </span>
    );
  }
}

Carousel.propTypes = {
  URLs: PropTypes.array.isRequired,
  current: PropTypes.number,
  setIndex: PropTypes.func.isRequired,
};

export default Carousel;
