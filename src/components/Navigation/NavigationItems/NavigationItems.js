import React from 'react';
import classes from './NavigationItems.css';
import Item from './Item/Item';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <Item link="/" active>Burger Builder</Item>
      <Item link="/">Checkout</Item>
    </ul>
  )
}

export default NavigationItems;