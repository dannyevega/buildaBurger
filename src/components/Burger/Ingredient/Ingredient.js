import React, { Component } from 'react';
import classes from './Ingredient.css';
import PropTypes from 'prop-types';

class Ingredient extends Component {
  render () {
    let ingredient = null;

    switch (this.props.type) {
      case ('bottom-bun'):
        ingredient = <div className={classes.BottomBun}></div>;
        break;
      case ('top-bun'):
        ingredient = (
          <div className={classes.TopBun}>
            <div className={classes.FirstSeeds}></div>
            <div className={classes.SecondSeeds}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>;
        break;    
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ('lettuce'):
        ingredient = <div className={classes.Lettuce}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;    
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredient;