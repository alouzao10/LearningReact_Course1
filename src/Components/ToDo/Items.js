import React from 'react';

function Items(props) {
  return (
    <div>
      <input
        type='checkbox'
        value={props.complete}
        onClick={props.toggleItem}
        checked={props.complete}
      />
      <span>{props.task}</span>
    </div>
  );
}

export default Items;
