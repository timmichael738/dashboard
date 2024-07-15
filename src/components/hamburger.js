import React from 'react';
import Icons from '../assets/icons/Icons'

const Hamburger = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <Icons.hamburger />
    </button>
  );
};

export default Hamburger;
