import React from "react";

const buildControl = props => (
  <div>
    <div>{props.label}</div>
    <button onClick={props.removed}>Less</button>
    <button onClick={props.added}>More</button>
  </div>
);

export default buildControl;
