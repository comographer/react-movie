import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((value) => value + 1);
  console.log("render");
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
