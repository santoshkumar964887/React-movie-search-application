import React from "react";
import{Link} from 'react-router-dom';
import "../lib/font-awesome/css/style.css";

export const MovieCard = ({ movie, type }) => {
  return (
    <div>
      <Link to={`/movie/${movie.imdbID}`}>
      <div className="movie-card">
        <div>
          <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
        </div>
      </div>
      <h3> {`${movie.Title} Poster`}</h3>
      </Link>
    </div>
  );
};
