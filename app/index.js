import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './pages/Popular';
import Brawl from './pages/Brawl';
import { ThemeProvider } from './contexts/theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light',
        }));
      },
    };
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <Brawl />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
