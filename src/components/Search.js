import React, { useState, useEffect } from "react";
import { ResultCard } from "./ResultCard";
import "../lib/font-awesome/css/style.css";
export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=action&apikey=611ad92e")
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      });
  }, []);
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch("http://www.omdbapi.com/?s=war&apikey=611ad92e")
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div>
      
        <div className="input-wrapper">
          <input
          className="input2"
            type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={onChange}
          />
          <div>
          <select value="Select Type" id="cars">
            <option value="volvo">Select Type</option>
            <option value="saab">All</option>
            <option value="fiat">Movie</option>
            <option value="audi">Series, episode</option>
            <option value="audi">Episode</option>
          </select>
          </div>
          <div><button type="button" class="btn btn-success">Success</button></div>
        </div>
      
      {results.length > 0 && (
        <ul className="results1">
          {results.map((movie) => (
            <li key={movie.imdbID}>
              <ResultCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
