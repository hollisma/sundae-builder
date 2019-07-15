import React from 'react';
import SundaeIngredient from './SundaeIngredients/SundaeIngredients';
import './Sundae.css';

const Sundae = (props) => {
	let keys = Object.keys(props.ingredients);
	let transformedIngredients = [];
	for (let igCount = 0; igCount < keys.length; igCount++) {
		let igName = keys[igCount];
		let igData = props.ingredients[igName];
		let quantity = props.quantity.includes(igName);
		let num = quantity ? Array(igData) : Array(igData.length);
		let igArr = [ ...num ].map((_, i) => {
			return <SundaeIngredient key={igName + i} type={igName} value={quantity ? igData : igData[i]} />;
		});
		transformedIngredients = transformedIngredients.concat(igArr);
	}

	return (
		<div className="Sundae">
			<h1>Sundae!!!</h1>
			{transformedIngredients}
		</div>
	);
};

export default Sundae;
