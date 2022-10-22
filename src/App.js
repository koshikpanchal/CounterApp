import "./App.css";
import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

const counters = [
  { id: 1, value: 3 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 1 },
  { id: 5, value: 8 },
];

function App() {
  const [counter, setCounter] = useState(counters);

  const handleDelete = (countersId) => {
    console.log("delete", countersId);
    setCounter(counter.filter((c) => c.id !== countersId));
  };

  let handleIncrement = (counters) => {
    console.log("Increase", counters.id);
    setCounter(
      counter.map((c) => {
        if (c.id === counters.id) c.value++;
        return c;
      })
    );
  };

  const handleReset = () => {
    console.log("Reset Done");
    setCounter(
      counter.map((c) => {
        c.value = 0;
        console.log(c);
        return c;
      })
    );
  };

  const handleDecrement = (counters) => {
    console.log("decrement on", counters);
    setCounter(
      counter.map((c) => {
        if (c.id === counters.id && c.value !== 0) c.value--;
        return c;
      })
    );
  };

  return (
    <React.Fragment>
      <NavBar totalCounter={counter.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          onReset={handleReset}
          counters={counter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
