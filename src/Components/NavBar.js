import React from 'react';

function NavBar() {
  return (
    <div>
      <nav>
        <a className='navLinks' href='https://www.google.com'>
          Google
        </a>
        |
        <a className='navLinks' href='https://www.espn.com'>
          ESPN
        </a>
        |
        <a className='navLinks' href='https://www.wral.com'>
          WRAL
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
