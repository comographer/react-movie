// Enables usage of parameters from url;
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  // Find id parameter from the url;
  const { id } = useParams();
  // API to get movie data by id;
  const API = "https://yts.mx/api/v2/movie_details.json?movie_id=";
  // Async & Await function to fetch movie data by id and turn into json;
  const getMovie = async () => {
    const json = await (await fetch(API + id)).json();
  };
  // Run API once on initial loading;
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
