import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import Doctor from "./pages/doctor";
import Patient from "./pages/patient";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/doctor" component={Doctor} />
          <Route exact path="/patient" component={Patient} />
        </div>
      </div>
    );
  }
}

export default App;
