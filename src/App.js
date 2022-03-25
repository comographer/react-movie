import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((value) => value + 1);
  console.log("I run all the time");
  useEffect(() => {
    console.log("call the api");
  }, []);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;

/* 6.0 Introduction
If you want to run a code only once on the initial render and keep it that way
whether the state updates or not, usually when you are using an API.
*/

/* 6.1 useEffect
To run a code only once on the initial render, we can use useEffect();
First we import {useEffect} from "react";
useEffect() takes two arguments: first, the code that we want to run only once;
The function in the first argument will occur only once at the first render;
*/
