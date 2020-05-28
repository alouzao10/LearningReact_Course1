import React, { Component } from 'react';
import logo from '../logo.svg';

export class InteractImg extends Component {
  constructor() {
    super();
    this.state = {
      imgToggle: false,
    };
    this.imageToggle = this.imageToggle.bind(this);
  }

  imageToggle() {
    var toggled = !this.state.imgToggle;
    console.log(toggled);
    this.setState({ imgToggle: toggled });
  }

  render() {
    return (
      <div>
        <button onClick={this.imageToggle}>Toggle</button>
        {this.state.imgToggle ? <img src={logo} /> : null}
      </div>
    );
  }
}

export default InteractImg;
