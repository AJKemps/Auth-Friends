import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import LoginForm from "./components/loginForm";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Friend Finder</h1>
          <Link to="/login">Login</Link>
          <Link to="/protected">Route</Link>
        </header>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute exact path="/protected" component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
