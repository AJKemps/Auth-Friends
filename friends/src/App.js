import React from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, Router, Link } from "react-router-dom";

//Components
import LoginForm from "./components/loginForm";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/login">Login</Link>
          <Link to="/protected">Protected Route</Link>
        </header>
        <Switch>
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
