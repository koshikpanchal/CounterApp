import React from "react";
import Counter from "./counter";

const Counters = ({
  onReset,
  onDelete,
  onIncrement,
  counters,
  onDecrement,
}) => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2 " onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          counterId={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          value={counter.value}
        />
      ))}
    </div>
  );
};

export default Counters;
