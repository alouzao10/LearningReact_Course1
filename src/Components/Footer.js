import React, { Component, Fragment } from 'react';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      message: 'This is the text.',
      number: 10,
      loading: true,
      character: {},
    };
  }

  componentDidMount() {
    // get any data needed for the component
    // set any API calls
    fetch('https://swapi.dev/api/people/10/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ character: data });
      });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <footer>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <Fragment>
              <p>Content for the Footer...</p>
              <p>Message: {this.state.message}</p>
              <p>Number: {this.state.number}</p>
              <p>Star Wars API Character: {this.state.character.name}</p>
            </Fragment>
          )}
        </footer>
      </div>
    );
  }
}

export default Footer;
