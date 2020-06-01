import React, { Component } from 'react';

import Items from './Items';

var list = [
  {
    task: 'Watch tutorial videos...',
    complete: false,
    id: 1,
  },
  { task: 'Do some practice...', complete: true, id: 2 },
  { task: 'Keep practicing...', complete: false, id: 3 },
];

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      todos: list,
    };

    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem(id) {
    console.log(id);
    console.log(this.state.todos);
    this.setState((prevState) => {
      const updateList = prevState.todos.map((item) => {
        if (item.id === id) {
          item.complete = !item.complete;
          console.log(item.complete);
        }
        return item;
      });
      return {
        todos: updateList,
      };
    });
    console.log(this.state.todos);
  }

  render() {
    return (
      <div>
        <h3>Here Are My To-Dos:</h3>
        <div>
          {this.state.todos.map((item) => (
            <Items key={item.id} item={item} toggleItem={this.toggleItem} />
          ))}
        </div>
      </div>
    );
  }
}

export default ToDo;
