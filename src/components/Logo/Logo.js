import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="build dat burger" />
    </div>
  )
}

export default Logo;