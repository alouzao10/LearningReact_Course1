import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    };

    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setName = this.setName.bind(this);
  }

  setFirstName(e) {
    this.setState({ firstName: e.target.value });
    //console.log(e.target.value);
  }

  setLastName(e) {
    this.setState({ lastName: e.target.value });
    //console.log(e.target.value);
  }

  setName(e) {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(e.target.value);
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            type='text'
            name='firstName'
            placeholder='First'
            value={this.state.firstName}
            onChange={this.setName}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last'
            value={this.state.lastName}
            onChange={this.setName}
          />
        </label>
        <br />
        <textarea value='Bob' />
        <input type='checkbox' checked={false} />
        <h4>
          {this.state.firstName} {this.state.lastName}
        </h4>
      </form>
    );
  }
}

export default Form;
