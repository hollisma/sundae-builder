import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Sundae from "../../components/Sundae/Sundae";
import BuildControls from "../../components/Cake/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  brownie: 2,
  flavor: 2,
  liquidTopping: 1,
  fruit: 0.75,
  whippedCream: 0.25,
  candyTopping: 0.5,
  cherry: 0.25
};

const flavors = [vanilla, chocolate, strawberry, cnc, mint];
const candy = [rainbow, chocolate, oreo, mnm, gummy];
const liquid = [fudge, caramel, pb];
const fruit = [banana, strawberry, blueberry];
const quantity = [brownie, whippedCream, cherry];
// const free = [flavor, liquidTopping, whippedCream, cherry];
// first flavor, liquidTopping, whippedCream, and cherry are free, will cost 4 initially
// TODO: implement this later

class SundaeBuilder extends React.Component {
  state = {
    ingredients: {
      brownie: 0,
      flavor: [],
      liquidTopping: [],
      fruit: [],
      whippedCream: 0,
      candyTopping: [],
      cherry: 0
    },
    totalPrice: 0
  };

  // for ingredients with array, value with be what is added to array
  // for ingredients with quantities, value will be one
  addIngredientHandler = (type, value) => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = quantity.includes(type)
      ? updatedIngredients[type] + 1
      : [...updatedIngredients[type], value];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  removeIngredientHandler = (type, value) => {
    if (!this.state.ingredients[type]) return;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = quantity.includes(type)
      ? updatedIngredients[type] - 1
      : [...updatedIngredients[type]].filter(val => {
          return val !== value;
        });
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  render() {
    return (
      <Aux>
        <Sundae ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default SundaeBuilder;
