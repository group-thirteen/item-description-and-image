import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import Viewer from './Viewer.jsx';
import ZoomModal from './ZoomModal.jsx';
//  save on our AWS bill
const sampleURLs = [
  'localhost:3000/images/0.jpeg',
  'localhost:3000/images/1.jpeg',
  'localhost:3000/images/2.jpeg',
  'localhost:3000/images/3.jpeg',
  'localhost:3000/images/4.jpeg',
  'localhost:3000/images/5.jpeg',
  'localhost:3000/images/6.jpeg',
  'localhost:3000/images/7.jpeg',
  'localhost:3000/images/8.jpeg',
  'localhost:3000/images/9.jpeg',
  'localhost:3000/images/10.jpeg',
];

const server = process.env.SERVER || 'http://localhost:3000';

const numImages = 5;
const FlexHoriz = styled.div`
  display: flex;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: sampleURLs,
      currentIndex: 0,
      zoomed: false,
      top: 0,
    };
    this.fetch();
    this.fetch = this.fetch.bind(this);
  }

  async fetch() {
    const response = await axios.get(server.concat(`/images/${this.props.ID}`));
    const { state } = this;
    state.urls = response.data;
    this.setState(state);
    return response.data;
  }

  toggleZoomed() {
    const newState = this.state;
    newState.zoomed = !newState.zoomed;
    this.setState(newState);
  }

  setCurrentIndexGen(i) {
    return () => {
      this.setState({ currentIndex: i });
      return i;
    };
  }

  shiftDown() {
    let index = this.state.top;
    const distance = index + numImages >= this.state.urls.length - 1
      ? this.state.urls.length - index - numImages
      : numImages;
    if (distance > 0) { index += distance; }
    this.setState({ top: index });
    return distance;
  }

  shiftUp() {
    let index = this.state.top;
    const distance = index - numImages <= 0
      ? index
      : numImages;
    index -= distance;
    this.setState({ top: index });
    return distance;
  }

  render() {
    return (
      <FlexHoriz id='imageDisplayer'>
          <Carousel
            URLs={this.state.urls}
            setIndex={this.setCurrentIndexGen.bind(this)}
            top={this.state.top}
            current={this.state.currentIndex}
            shiftUp={this.shiftUp.bind(this)}
            shiftDown={this.shiftDown.bind(this)}
            numImages={numImages}
          />
          <Viewer image={this.state.urls[this.state.currentIndex]}
            toggle={this.toggleZoomed.bind(this)}
           />
          {this.state.zoomed
          && <ZoomModal
            toggle={this.toggleZoomed.bind(this)}
            URLs = {this.state.urls}
            setIndex={this.setCurrentIndexGen.bind(this)}
            current={this.state.currentIndex}
            top={this.state.top}
            />
          }
      </FlexHoriz>
    );
  }
}

App.propTypes = {
  ID: PropTypes.number,
};

export default App;
