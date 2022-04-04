// import useEffect and useState;
import { useEffect, useState } from "react";
// import Movie component;
import Movie from "../components/Movie";
import styles from "./Home.modules.css";

function Home() {
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
    <div className={styles.container}>
      {/* Return <h1>Loading...</h1> if loading state is true; */}
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        // Return below if loading state is false;
        <div className={styles.movies}>
          {/* map() movies array; */}
          {movies.map((movie) => (
            // Give props to Movie component;
            <Movie
              // There should always be a key in ReactJS when you are using map();
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
