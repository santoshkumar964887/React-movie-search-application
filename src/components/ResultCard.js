import React, { useContext,useState} from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";
import "../lib/font-awesome/css/style.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
export const ResultCard = ({ movie }) => {
  const [colorClass,setColorClass]=useState("")
  const {
    addMovieToWatched,

    watched,
  } = useContext(GlobalContext);

  let storedMovieWatched = watched.find((o) => o.imdbID === movie.imdbID);

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="card-container1">
        <div>
          <h3 className="title">{movie.Title}</h3>
        </div>
        <div className="poster-wrappers1">
       
        <button
          className="btn1"
          disabled={watchedDisabled}
          onClick={() => addMovieToWatched(movie)}
        >
          <FavoriteBorderIcon className={colorClass} onClick={()=>setColorClass("activecolor")} />
        </button>
      
          {movie.Poster ? (
            <img
              className="poster1"
              src={movie.Poster}
              alt={`${movie.Title} Poster`}
            />
          ) : (
            <div className="filler-poster" />
          )}
        </div>

        <div className="info1">
          <div><h4>Release In</h4></div>
          <div><h4 className="release-date">
            <Moment format="YYYY">{movie.Year}</Moment>
          </h4></div>
          
        </div>
      </div>
    
    </div>
  );
};
