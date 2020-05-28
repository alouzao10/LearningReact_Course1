import React from 'react';

import ToDo from './ToDo/ToDo';

function Content() {
  return (
    <div>
      <p>Here I will better learn some React</p>
      <ol>
        <li>Learn React</li>
        <li>Keep Learning</li>
        <li>Practice</li>
      </ol>
      <main className='mainContent'>
        <p>This is some content in this space...</p>
        <ToDo />
      </main>
    </div>
  );
}

export default Content;
