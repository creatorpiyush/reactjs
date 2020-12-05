import React from "react";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/doctor">Doctor</Link>
            </li>
            <li>
              <Link to="/patient">Patient</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
