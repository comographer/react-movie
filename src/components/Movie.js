// import PropTypes to check types;
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.modules.css";

// give props object to the Movie();
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        {/* Link to `/movie/${id}`, dynamic url */}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>
        {summary.split(" ").length <= 45
          ? summary
          : `${summary.split(" ").slice(1, 45).join(" ")}...`}
      </p>
      <ul className={styles.movie__genres}>
        {/* map() genres array; */}
        {genres.map((g) => (
          // key for ReactJS;
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

// Checking the propTypes;
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
