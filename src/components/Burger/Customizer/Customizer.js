import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import classes from './Customizer.css';

const controls = [
  {label: 'Lettuce', type: 'lettuce'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'}
];

const Customizer = (props) => (
  <>
    <div className={classes.Customizer}>
      <p>Current Total Price: {props.price}</p>
      {controls.map(control => {
        return <BurgerControl
                key={control.label}
                label={control.label}
                add={() => props.addIngredient(control.type)}
                remove={() => props.removeIngredient(control.type)}
                disabled={props.disabled[control.type]}
              />
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  </>
)

export default Customizer;