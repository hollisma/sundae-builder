import React from 'react';
import './SundaeIngredients.css';

// TODO: create switch statement with case: type and for qualitative further segment it based on value
// ideate and create the css styling

const SundaeIngredient = (props) => {
	let ingredient = (
		<div>
			{props.type + ' '}
			Amount: {props.value}
		</div>
	);

	switch (props.type) {
		// case 'whippedCream':
		// 	ingredient = <div className={'WhippedCream'} />;
		// 	break;
		case 'cherry':
			ingredient = <div className={'Cherry'} />;
			break;
		case 'flavor':
			ingredient = <div className={'Scoop'} />;
			break;
		case 'liquidTopping':
			ingredient = <div className={'LiquidTopping'} />;
			break;
		default:
			ingredient = null;
			break;
	}

	return ingredient;
};

export default SundaeIngredient;
