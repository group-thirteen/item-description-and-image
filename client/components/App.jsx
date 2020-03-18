import React from 'react';
import axios from 'axios';

const server = process.env.SERVER || 'http://localhost:3000';

class App extends React.Component {
  constructor (props) {
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
    .then(response => {
      const state = this.state;
      this.state.urls = response.data;
      this.setState(state);
    });
    
  }
  render() { 
    return (
      <div id='imageDisplayer'>
        hello {this.state.urls[this.state.currentIndex]}
      </div>
    );
  }
}

export default App;
