import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Counter = (props) => {
  const updateValue = props.value;
  const formatCount = (updateValue) => {
    return updateValue === 0 ? "Zero" : updateValue;
  };

  const getBadgeClasses = (updateValue) => {
    let classes = "badge m-2 badge-";
    classes += updateValue === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div>
      <h2 className={getBadgeClasses()}>{formatCount(updateValue)}</h2>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary btn-sm"
      >
        +
      </button>
      <button
        onClick={() => props.onDecrement(props.counter)}
        className="btn btn-secondary btn-sm m-2"
      >
        -
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        X
      </button>
    </div>
  );
};

export default Counter;
