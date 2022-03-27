// import useEffect and useState;
import { useEffect, useState } from "react";

function App() {
  // Initial value of toDo input is blank;
  const [toDo, setToDo] = useState("");
  // Initial value of toDos array is blank;
  const [toDos, setToDos] = useState([]);
  // Set toDo state value to input value;
  const onChange = (event) => setToDo(event.target.value);
  // Function to run when new toDo is submitted;
  const onSubmit = (event) => {
    // event.preventDefault() to prevent page refresh upon form submit;
    event.preventDefault();
    // if toDo value is empty, don't do anything by returning nothing;
    if (toDo === "") return;
    // else, add toDo value to new state of toDos including current array;
    // When we give a function as argument in a setState() function,
    // you will be given current state as the argument;
    setToDos((currentArray) => [toDo, ...currentArray]);
    // Make toDo input blank after submission;
    setToDo("");
  };
  return (
    <div>
      {/* To add javascript directly on HTML elements, put them within {}; */}
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* First argument of map is elements and second argument is index; */}
        {toDos.map((item, index) => (
          // key prop is unique value that should be given to each <li> element on ReactJS;
          <li key={index}>{item}</li>
        ))}
      </ul>
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
