import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div class="movie">
      <div class="movie__data">
        <div class="movies__movie">
          <h3 class="movie__titile">{title}</h3>
          <h5 class="movie__year">{year}</h5>
          <p class="movie__summary">{summary}</p>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
