import React, { useState, useEffect } from "react";
import "../lib/font-awesome/css/style.css";
import GradeSharpIcon from '@material-ui/icons/GradeSharp';
const Search = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt0094612&apikey=611ad92e")
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
          <div class="ui1">
            <div class="row1">
              <div class="img1">
                <img src={info.Poster} alt="poster" />
              </div>
              <div class="side-text">
                <span>
                  <h1 className="ui red inverted header">{info.Title}</h1>(
                  {info.Genre})
                </span>{" "}
                <div className="ui subheader">{info.Language}</div>
                <br />
                <div className="ui subheader">
                  IMDB Rating <GradeSharpIcon className="rating1"/>:{info.imdbRating}
                </div>
                <h3>Cast</h3>
                <p>{info.Actors}</p>
                <h3>Plot</h3>
                <p>{info.Plot}</p>
                <div class="ui grid">
                  <div class="ten wide column">
                    <h3>Director</h3>
                    <p>{info.Director}</p>
                  </div>
                  <div class="ten wide column tablet six wide computer column">
                    {" "}
                    <h3>Box Office Collection</h3>
                    <p>{info.BoxOffice}</p>
                  </div>
                </div>
              </div>
            </div>



            <div class="row3">
              <div class="runtime1">
                <p>Runtime</p>
                <p>{info.Runtime}</p>
              </div>
              <div class="write1">
                <p>
                  <strong>Writers:</strong> {info.Writer}
                </p>
              </div>
              <div class="realasedate1">
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
