import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      message: 'This is the text.',
      number: 10,
    };
  }

  render() {
    return (
      <div>
        <footer>
          <p>Content for the Footer...</p>
          <p>Message: {this.state.message}</p>
          <p>Number: {this.state.number}</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
