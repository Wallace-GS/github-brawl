import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './pages/Popular';
import Brawl from './pages/Brawl';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
