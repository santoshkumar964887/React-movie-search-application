import React from "react";
export const MovieCard = ({ movie, type }) => {
  return (
    <div>
      <div className="movie-card">
        <div className="overlay"></div>

        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      </div>
      <h3> {`${movie.Title} Poster`}</h3>
    </div>
  );
};
