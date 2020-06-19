import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Brawl from './components/Brawl';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Brawl />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
