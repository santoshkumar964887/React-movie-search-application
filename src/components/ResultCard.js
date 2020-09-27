import React, { useContext, useState } from "react";
import Moment from "react-moment";
import {Link} from 'react-router-dom';
import { GlobalContext } from "../context/GlobalState";
import "../lib/font-awesome/css/style.css";
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
export const ResultCard = ({ movie }) => {
  const [colorClass, setColorClass] = useState("");
  const {
    addMovieToWatched,

    watched,
  } = useContext(GlobalContext);

  let storedMovieWatched = watched.find((o) => o.imdbID === movie.imdbID);

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="card-container1">
      <Link to={`/movie/${movie.imdbID}`}>
        <div>
         <h3 className="title">{movie.Title}</h3>
        </div>
        </Link>
        <div className="poster-wrappers1">
          <button
            className="btn1"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            <FavoriteSharpIcon
              className={colorClass}
              onClick={() => setColorClass("activecolor")}
            />
          </button>
          <Link to={`/movie/${movie.imdbID}`}>
          {movie.Poster ? (
            <img
              className="poster1"
              src={movie.Poster}
              alt={`${movie.Title} Poster`}
            />
          ) : (
            <div className="filler-poster" />
          )}
          </Link>
        </div>
        

        <div className="info1">
          <div>
            <h4>Release In</h4>
          </div>
          <div>
            <h4 className="release-date">
              <Moment format="YYYY">{movie.Year}</Moment>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
