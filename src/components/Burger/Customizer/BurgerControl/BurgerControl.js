import React from 'react';
import classes from './BurgerControl.css';

const BurgerControl = (props) => (
  <>
    <div className={classes.BurgerControl}>
      <div className={classes.Label}>{props.label}</div>
      <button 
        className={classes.Less}
        onClick={props.remove}
        disabled={props.disabled}>-</button>
      <button
        className={classes.More}
        onClick={props.add}>+</button>
    </div>
  </>
)

export default BurgerControl;