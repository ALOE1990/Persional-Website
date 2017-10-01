import React, { Component } from 'react';

import Introduction from './introduction';
import Projects from './projects';
import Experiences from './experiences'



export default class App extends Component {
  render() {
    return (
      <div id="page-top" className="index">
          <Introduction />
          <Projects />
          <Experiences />
      </div>
    );
  }
}
