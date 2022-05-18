import React from "react";
// import "./styles.css";

export default function Counter() {
  const [counter, setCounter] = React.useState(5);
  const Increment = (value) => {
    setCounter(counter + value);
  };
  const Double = () => {
    setCounter(counter * 2);
  };
 
  return (
    <>
      <h1>counter</h1>
      <h2 className={counter%2==0? "green" : "red"}>{counter}</h2>
      <button onClick={() => Increment(1)}>Increment</button>
      <button onClick={() => Increment(-1)}>Decrement</button>
      <button onClick={() => Double(1)}>Double</button>
    </>
  );
}
