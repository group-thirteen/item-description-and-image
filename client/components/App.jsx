import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const server = process.env.SERVER || 'http://localhost:3000';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      currentIndex: 0,
    };
    this.fetch();
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    axios.get(server.concat(`/images/${this.props.ID}`))
      .then((response) => {
        const { state } = this;
        state.urls = response.data;
        this.setState(state);
      });
  }

  render() {
    return (
      <div id='imageDisplayer'>
        <span>
          hello
        </span>
        <span>
          {this.state.urls[this.state.currentIndex]}
        </span>
      </div>
    );
  }
}

App.propTypes = {
  ID: PropTypes.number,
};

export default App;
