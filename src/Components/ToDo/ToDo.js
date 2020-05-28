import React from 'react';

import Items from './Items';

function ToDo() {
  const toggleItem = (e) => {
    console.log(e.target.value);
    alert('DONE');
    if (e.target.value === false) {
      e.target.value = true;
    } else {
      e.target.value = false;
    }
    console.log(e.target.value);
  };

  const list = [
    {
      task: 'Watch tutorial videos...',
      complete: false,
      id: 1,
    },
    { task: 'Do some practice...', complete: true, id: 2 },
    { task: 'Keep practicing...', complete: false, id: 3 },
  ];

  return (
    <div>
      <h3>Here Are My To-Dos:</h3>
      <div>
        {list.map((item) => (
          <Items
            key={item.id}
            task={item.task}
            complete={item.complete}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDo;
