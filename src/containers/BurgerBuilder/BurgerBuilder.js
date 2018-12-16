import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Customizer from '../../components/Burger/Customizer/Customizer';

const ingredientPrices = {
  lettuce: '0.5',
  meat: '2',
  cheese: '0.9',
  bacon: '1.5'
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5
  }

  addIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;
    const originalCount = ingredients[type];
    const newCount = originalCount + 1;
    const updatedIngredients = {...ingredients}
    updatedIngredients[type] = newCount;
    const addition = ingredientPrices[type];
    const originalPrice = totalPrice;
    const newPrice = originalPrice + addition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  }

  render () {
    const { ingredients } = this.state;
    return (
      <>
        <Burger ingredients={ingredients}/>
        <Customizer 
          addIngredient={this.addIngredientHandler}
        />
      </>
    )
  }
}

export default BurgerBuilder;