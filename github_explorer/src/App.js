import React from "react";
import "./App.css";

import Search from "./components/Search";
import Search2 from "./components/Search2";

class App extends React.Component {
  state = {
    user: null,
    error: null,
  };

  fetchUserData = async (username) => {
    // todo: fetch the Github-api
    // console.log("hi");
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.ok) {
        const data = await res.json();
        console.log(data);

        return this.setState({
          user: data,
        });
      }
      const error = (await res.json()).message;

      this.setState({
        error: error,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error: `There is Some Error`,
      });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <Search fetchData={this.fetchUserData} />
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default App;
