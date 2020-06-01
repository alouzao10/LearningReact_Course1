import React, { Component } from 'react';

class Items extends Component {
  componentDidUpdate(nextProps, nextState) {
    console.log('Component Updated');
  }
  render() {
    return (
      <div>
        <input
          type='checkbox'
          checked={this.props.item.checked}
          onChange={() => this.props.toggleItem(this.props.item.id)}
        />
        <span>{this.props.item.task}</span>
      </div>
    );
  }
}

export default Items;
