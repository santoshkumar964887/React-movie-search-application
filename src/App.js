import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watched } from "./components/Watched";
import Search from "./components/Search";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Search} />
          <Route
            exact
            path="/React-movie-search-application"
            component={Search}
          />

          <Route path="/watched" component={Watched} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
