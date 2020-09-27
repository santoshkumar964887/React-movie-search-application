import React, { useState, useEffect } from "react";
import { ResultCard } from "./ResultCard";
import "../lib/font-awesome/css/style.css";
import SearchIcon from '@material-ui/icons/Search';
const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectQuery, setSelectQuery] = useState("movie");

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
  };
  const handleSelect = (e) => {
    setSelectQuery(e.target.value);
  };
  const handleClick = () => {
    console.log(`http://www.omdbapi.com/?type=${selectQuery}&s=${query}&apikey=611ad92e`);
    fetch(`http://www.omdbapi.com/?type=${selectQuery}&s=${query}&apikey=611ad92e`)
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
          <select value={selectQuery} id="cars" onChange={handleSelect}>
            <option value="volvo">Select Type</option>
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={handleClick} className="btn btn-success" >
            <SearchIcon />
            <span id="btn-success"> Success</span>
          </button>
        </div>
      </div>

      {results.length > 0 ? (
        <ul className="results1">
          {results.map((movie) => (
            <li key={movie.imdbID}>
              <ResultCard movie={movie} />
            </li>
          ))}
        </ul>
      ):<h2 style={{textAlign:'center'}}>Loading...</h2>}
    </div>
  );
};
export default Search; 