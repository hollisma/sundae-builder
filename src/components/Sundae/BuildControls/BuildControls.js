import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Flavors", type: "flavor" },
  { label: "Liquid Toppings", type: "liquidTopping" },
  { label: "Candy Toppings", type: "candyTopping" },
  { label: "Cherries", type: "cherry" }
];

const buildControls = props => (
  <div className="BuildControls">
    <p>
      Current Price: <b>${props.price.toFixed(2)}</b>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
      />
    ))}
  </div>
);

export default buildControls;
