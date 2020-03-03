import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login type />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
