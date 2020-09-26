import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to='/' >Movie Search Application </Link>
          </div>

          <ul className="nav-links">
            

            <li>
              <Link to="/watched">Favorite Movies</Link>
            </li>

            <li>
              <Link to="/" className="btn btn-main">
               Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
