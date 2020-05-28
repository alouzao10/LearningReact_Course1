import React, { Component } from 'react';

import ToDo from './ToDo/ToDo';
import InteractImg from './InteractImg';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };

    this.addOne = this.addOne.bind(this);
  }

  addOne() {
    this.setState((prevState) => {
      return {
        num: prevState.num + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <p>Here I will better learn some React</p>
        <ol>
          <li>Learn React</li>
          <li>Keep Learning</li>
          <li>Practice</li>
        </ol>
        <div>
          <h4>Count: {this.state.num}</h4>
          <button onClick={this.addOne}>Add 1</button>
        </div>
        <br />
        <main className='mainContent'>
          <p>This is some content in this space...</p>
          <ToDo />
          <InteractImg />
        </main>
      </div>
    );
  }
}

export default Content;
