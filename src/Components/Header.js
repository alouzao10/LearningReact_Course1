import React from 'react';

import NavBar from './NavBar';

function Header(props) {
  const firstName = 'Alex';
  const lastName = 'Louzao';

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let timeOfDay;

  const timeStyle = {
    fontSize: 15,
    backgroundColor: 'white',
  };

  if (hours < 12) {
    timeOfDay = 'Morning';
    timeStyle.color = 'blue';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Afternoon';
    timeStyle.color = 'orange';
  } else {
    timeOfDay = 'Night';
    timeStyle.color = 'black';
  }

  return (
    <div>
      <h1 className='header'>React Course 1</h1>
      <h3>By: {firstName + ' ' + lastName}</h3>
      <hr />
      <h4 style={timeStyle}>
        {hours + ':' + minutes + ' in the ' + timeOfDay}
      </h4>
      <div>{props.txt + ': ' + props.num}</div>
      <NavBar />
    </div>
  );
}

export default Header;
