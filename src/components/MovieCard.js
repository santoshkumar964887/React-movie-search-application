import React from "react";
import "../lib/font-awesome/css/style.css";

export const MovieCard = ({ movie, type }) => {
  return (
    <div>
      <div className="movie-card">
        <div>
          <img src={movie.Poster} alt={`${movie.Title} Poster`}></img>
        </div>
      </div>
      <h3> {`${movie.Title} Poster`}</h3>
    </div>
  );
};
