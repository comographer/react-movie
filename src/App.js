// Import components for routes on ReactJS;
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// Import components to display on screen;
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    // Router > Routes > Route path="route" element={<Component />}
    <Router>
      <Routes>
        {/* Route "/" to <Home /> component */}
        <Route path="/" element={<Home />}></Route>
        {/* Route "/movie" to <Detail /> component */}
        {/* /:id enables parameters */}
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
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

/* 6.2 Deps
In the second argument of useEffect(), we put an array of consts;
If the array is empty, the callbackFunction will only run once at the initial render;
If there are any keyword in the array argument, the callbackFunction will run when there is
any change in the const;
This array argument is called dependencies;
*/

/* 6.4 Cleanup
Within the callbackFunction of useEffect(), you can add a cleanupFunction in the return;
This function will run when the parent component of useEffect is destroyed;

Create anonymous function: () => {};
*/
