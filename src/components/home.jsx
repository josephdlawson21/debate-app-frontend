import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Button color="primary">Hello</Button>
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
