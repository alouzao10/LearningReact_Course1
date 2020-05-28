import React, { Component } from 'react';

import Items from './Items';

class ToDo extends Component {
  constructor() {
    super();
    this.list = [
      {
        task: 'Watch tutorial videos...',
        complete: false,
        id: 1,
      },
      { task: 'Do some practice...', complete: true, id: 2 },
      { task: 'Keep practicing...', complete: false, id: 3 },
    ];
    this.state = {
      todos: this.list,
    };

    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem(id) {
    console.log(id);

    this.setState((prevState) => {
      const updateList = prevState.todos.map((item) => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return item;
      });
      return {
        todos: updateList,
      };
    });
  }

  render() {
    return (
      <div>
        <h3>Here Are My To-Dos:</h3>
        <div>
          {this.state.todos.map((item) => (
            <Items
              key={item.id}
              id={item.id}
              task={item.task}
              complete={item.complete}
              toggleItem={this.toggleItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ToDo;
