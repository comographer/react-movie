// import useEffect and useState;
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState("");
  const [currency, setCurrency] = useState(0);
  const [input, setInput] = useState(0);

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
    setCurrency(selected.replace(/[^0-9]/g, "") / 100);
  };

  // Fetch coinpaprika API and turn into JSON;
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  // Format coin value to be upto 2nd decimal point;
  const coinRound = (coin) => (Math.round(coin * 100) / 100).toFixed(2);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={handleSelect} value={selected}>
          <option key="default">Select a Coin</option>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coinRound(coin.quotes.USD.price)}{" "}
              USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <form>
        <label htmlFor="USD">USD</label>
        <input
          id="USD"
          type="number"
          value={input}
          onChange={handleInput}
        ></input>
        <label htmlFor="coin">Crypto Currency</label>
        <input
          id="coin"
          type="number"
          value={input / currency}
          disabled={true}
        ></input>
      </form>
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
