import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Customizer from '../../components/Burger/Customizer/Customizer';

const ingredientPrices = {
  lettuce: 0.5,
  meat: 2,
  cheese: 0.9,
  bacon: 1.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map(key => {
      return ingredients[key];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  addIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;
    const ingredientCount = ingredients[type] + 1;
    const updatedIngredients = {...ingredients}
    updatedIngredients[type] = ingredientCount;
    const originalPrice = totalPrice;
    const newPrice = originalPrice + ingredientPrices[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;
    if(ingredients[type] <= 0){
      return;
    }
    const ingredientCount = ingredients[type] - 1;
    const updatedIngredients = {...ingredients}
    updatedIngredients[type] = ingredientCount;    
    const originalPrice = totalPrice;
    const newPrice = originalPrice - ingredientPrices[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  render () {
    const { ingredients, totalPrice, purchasable, purchasing } = this.state;
    const disabledInfo = {...ingredients};
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    
    return (
      <>
        <Modal visible={purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={ingredients}/>
        <Customizer 
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={purchasable}
          ordered={this.purchaseHandler}
          price={totalPrice}
        />
      </>
    )
  }
}

export default BurgerBuilder;