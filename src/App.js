// import useEffect and useState;
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
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
