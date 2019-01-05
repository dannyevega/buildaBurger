import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (<li key={key}>
              <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
            </li>)
  });

  const styles = {
    'display': 'flex',
    'justifyContent': 'center'
  }

  return (
    <>
      <h3>Your Order:</h3>
      <p>Classic burger with:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total</strong>: ${props.totalPrice}</p>
      <div style={styles}>
        <Button clicked={props.canceled} btnType="Cancel">CANCEL</Button>
        <Button clicked={props.ordered} btnType="Order">ORDER</Button>
      </div>
    </>
  )
}

export default OrderSummary;