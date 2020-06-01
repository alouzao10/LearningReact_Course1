import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Content from './Components/Content';
import Form from './Components/Form';
import Footer from './Components/Footer';

/*function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}*/

class App extends Component {
  constructor() {
    super(); // looks to the parent component can grabs what else the state may need
    this.state = {
      num: 5,
      txt: 'Hello',
    };
  }

  // Can declare own class methods but must have the render method
  someMethod() {
    return 5;
  }

  // With props, they need to be brought in through a Constructor
  // Can also use the this.props keyword to access them

  render() {
    // Declare any values, style objects, or conditions

    return (
      <div className='App'>
        <Header txt={this.state.txt} num={this.state.num} />
        <Content />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
