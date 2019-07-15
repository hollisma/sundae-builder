import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Sundae from '../../components/Sundae/Sundae';
import BuildControls from '../../components/Sundae/BuildControls/BuildControls';

// TODO: do css for actual sundae stuffs - Sundae and SundaeIngredients
// start checkout stuff - orderSummary, then modal and backdrop stuffs

const INGREDIENT_PRICES = {
	cherry: 0.25,
	candyTopping: 0.5,
	whippedCream: 0.25,
	fruit: 0.75,
	liquidTopping: 1,
	flavor: 2,
	brownie: 2
};

// const flavors = ["vanilla", "chocolate", "strawberry", "cnc", "mint"];
// const candy = ["rainbow", "chocolate", "oreo", "mnm", "gummy"];
// const liquid = ["fudge", "caramel", "pb"];
// const fruit = ["banana", "strawberry", "blueberry"];
const quantity = [ 'cherry', 'whippedCream', 'brownie' ];
// const free = ['cherry', whippedCream', 'liquidTopping', 'flavor'];
// first flavor, liquidTopping, whippedCream, and cherry are free, will cost 4 initially
// TODO: implement this later

class SundaeBuilder extends React.Component {
	state = {
		ingredients: {
			cherry: 1,
			candyTopping: [ 'oreo' ],
			whippedCream: 1,
			fruit: [ 'banana' ],
			liquidTopping: [ 'hot fudge' ],
			flavor: [ 'vanilla', 'chocolate' ],
			brownie: 1
		},
		totalPrice: 4.75
	};

	// for ingredients with array, value with be what is added to array
	// for ingredients with quantities, value will be one
	addIngredientHandler = (type, value) => {
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = quantity.includes(type)
			? updatedIngredients[type] + 1
			: [ ...updatedIngredients[type], value ];
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};

	removeIngredientHandler = (type, value) => {
		if (!this.state.ingredients[type]) return;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = quantity.includes(type)
			? updatedIngredients[type] - 1
			: [ ...updatedIngredients[type] ].filter((val) => {
					return val !== value;
				});
		const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};

	render() {
		return (
			<Aux>
				<Sundae ingredients={this.state.ingredients} quantity={quantity} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					price={this.state.totalPrice}
				/>
			</Aux>
		);
	}
}

export default SundaeBuilder;
