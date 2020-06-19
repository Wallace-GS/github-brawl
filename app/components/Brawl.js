import React, { Component } from 'react';
import Instructions from './Instructions';

export default class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Instructions />
      </>
    );
  }
}
