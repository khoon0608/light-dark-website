/** @format */

import React from "react";

export default function Navbar({darkMode, toggleDarkMode}) {
  return (
    <nav className={darkMode ? "dark" : "light"}>
      <img
        className='nav--logo_icon'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
        alt='react-icon'
      />
      <h3 className='nav--logo_text'>ReactFacts</h3>

      <div className='toggler'>
        <p className='toggler--light'>Light</p>
        <div className='toggler--slider' onClick={toggleDarkMode}>
          <div className='toggler--slider--circle'></div>
        </div>
        <p className='toggler--dark'>Dark</p>
      </div>
    </nav>
  );
}
