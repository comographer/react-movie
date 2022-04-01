// Enables usage of parameters from url;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  // Find id parameter from the url;
  const { id } = useParams();
  // API to get movie data by id;
  const API = "https://yts.mx/api/v2/movie_details.json?movie_id=";
  // Async & Await function to fetch movie data by id and turn into json;
  const getMovie = async () => {
    const json = await (await fetch(API + id)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  // Run API once on initial loading;
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <span>
            <Link to="/">Return to Home</Link>
          </span>
          <main>
            <h1>{movie.title_long}</h1>
            <img src={movie.medium_cover_image} />
            <h5>Rating :{movie.rating}</h5>
            <h5>Genres : {movie.genres.join(", ")}</h5>
            <p>{movie.description_full}</p>
          </main>
        </div>
      )}
    </div>
  );
}

export default Detail;
