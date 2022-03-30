// import useEffect and useState;
import { useEffect, useState } from "react";

function App() {
  // State for loading status;
  const [loading, setLoading] = useState(true);
  // Movies array State;
  const [movies, setMovies] = useState([]);
  // async & await function to fetch API;
  const getMovies = async () => {
    // await API fetch and turn it into json;
    const json = await (
      await fetch(
        // fetch Movies API with minimum_rating of 8.8 and sort_by year;
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    // End loading;
    setLoading(false);
  };
  // useEffect() to call API only once in the beginning;
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {/* Return <h1>Loading...</h1> if loading state is true; */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        // Return below if loading state is false;
        <div>
          {/* map() movies array; */}
          {movies.map((movie) => (
            // key for ReactJS;
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {/* map() genres array; */}
                {movie.genres.map((g) => (
                  // key for ReactJS;
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
