import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = (props) => {
  let ingredients = Object.keys(props.ingredients).map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])]
    .map((amt, idx) => {
      return <Ingredient key={ingredientKey + idx} type={ingredientKey} />
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);
  if (ingredients.length === 0) {
    ingredients = <p>Please start adding some ingredients.</p>
  }
  return (
    <div className={classes.Burger}>
      <Ingredient type='top-bun' />
        {ingredients}
      <Ingredient type='bottom-bun' />
    </div>
  );
}

export default Burger;