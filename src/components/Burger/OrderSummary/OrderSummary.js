import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate(){
    console.log('[Component OrderSummary ]')
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
      return (<li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
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
        <p><strong>Total</strong>: ${this.props.totalPrice}</p>
        <div style={styles}>
          <Button clicked={this.props.canceled} btnType="Cancel">CANCEL</Button>
          <Button clicked={this.props.ordered} btnType="Order">ORDER</Button>
        </div>
      </>
    )
  }
}

export default OrderSummary;