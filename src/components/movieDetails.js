import React, { useState, useEffect } from "react";
import "../lib/font-awesome/css/style.css";
import StarRatings from "react-star-ratings";
import SupervisedUserCircleSharpIcon from "@material-ui/icons/SupervisedUserCircleSharp";
const Search = (props) => {
    
   
  const [info, setInfo] = useState("");

  useEffect(() => {
    const { match: { params } } = props;
   const url=`https://www.omdbapi.com/?i=${params.movieID}&apikey=611ad92e`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setInfo(data);
        } else {
          setInfo("");
        }
      });
  }, []);

  return (
    <div>
      {info ? (
        <div className="container1">
          <div className="ui1">
            <div className="row1">
              <div className="img1">
                <img src={info.Poster} alt="poster" />
              </div>
              <div className="side-text">
                <span>
                  <h1 className="title5">{info.Title}</h1>({info.Genre})
                </span>{" "}
                <div className="ui subheader">{info.Language}</div>
                <br />
                <div className="ui subheader">
                  IMDB Rating{" "}
                  <StarRatings
                    rating={Number(info.imdbRating)}
                    numberOfStars={10}
                    starRatedColor="darkred"
                    starDimension="30px"
                    starSpacing="7px"
                  />{" "}
                 
                </div>
                <h3>
                  Cast <SupervisedUserCircleSharpIcon className="cast1" />
                </h3>
                <p>{info.Actors}</p>
                <h3>Plot</h3>
                <p>{info.Plot}</p>
                <div className="ui grid">
                  <div className="ten wide column">
                    <h3>Director</h3>
                    <p>{info.Director}</p>
                  </div>
                  <div className="ten wide column tablet six wide computer column">
                    {" "}
                    <h3>Box Office Collection</h3>
                    <p>{info.BoxOffice}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row3">
              <div className="runtime1">
                <p>Runtime</p>
                <p>{info.Runtime}</p>
              </div>
              <div className="write1">
                <p>
                  <strong>Writers:</strong> {info.Writer}
                </p>
              </div>
              <div className="realasedate1">
                <p>Release date</p>
                <p>{info.Released}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      )}
    </div>
  );
};
export default Search;
