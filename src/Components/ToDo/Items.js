import React from 'react';

function Items(props) {
  return (
    <div>
      <input
        type='checkbox'
        value={props.complete}
        onChange={() => props.toggleItem(props.id)}
        checked={props.complete}
      />
      <span>{props.task}</span>
    </div>
  );
}

export default Items;
