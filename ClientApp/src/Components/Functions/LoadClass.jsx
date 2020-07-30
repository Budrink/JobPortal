import React, { Component } from 'react';

import loadScripts1 from '../Functions/LoadScripts';
class LoadClass extends Component {
  componentDidMount() {
    loadScripts1(this.instance, false);
  }
  render() {
    return <div ref={(el) => (this.instance = el)}></div>;
  }
}
export default LoadClass;
