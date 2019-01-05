import React from 'react';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (<li key={key}>
              <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
            </li>)
  });

  return (
    <>
      <h3>Your Order:</h3>
      <p>Classis burger with:</p>
      <ul>
        {ingredientSummary}
      </ul>
    </>
  )
}

export default OrderSummary;