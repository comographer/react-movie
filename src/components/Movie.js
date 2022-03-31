// import PropTypes to check types;
import PropTypes from "prop-types";

// give props object to the Movie();
function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
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
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
