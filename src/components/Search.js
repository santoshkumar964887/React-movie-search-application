import React, { useState,useEffect } from "react";
import { ResultCard } from "./ResultCard";
import '../lib/font-awesome/css/style.css';
export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

useEffect(()=>{
  fetch(
    "http://www.omdbapi.com/?s=action&apikey=611ad92e"
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        
        setResults(data.Search);
      } else {
        setResults([]);
      }
    });

},[])
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      "http://www.omdbapi.com/?s=war&apikey=611ad92e"
    )
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
    <div >
      
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
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
