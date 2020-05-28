import React from 'react';

function ToDo() {
  const toggleItem = (e) => {
    alert('DONE');
  };

  return (
    <div>
      <h3>Here Are My To-Dos</h3>
      <div>
        <input type='checkbox' onClick={toggleItem} />
        <span>Watch tutorial videos...</span>
        <br />
        <input type='checkbox' onClick={toggleItem} />
        <span>Do some practice...</span>
        <br />
        <input type='checkbox' onClick={toggleItem} />
        <span>Keep practicing...</span>
      </div>
    </div>
  );
}

export default ToDo;
