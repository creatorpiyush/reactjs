import React from "react";
import "./App.css";

import Search from "./components/Search";
import Search2 from "./components/Search2";
import UserCard from "./components/UserCard";

class App extends React.Component {
  state = {
    user: null,
    error: null,
    loading: false,
  };

  fetchUserData = async (username) => {
    this.setState({ loading: true }, async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (res.ok) {
          const data = await res.json();
          console.log(data);

          return this.setState({
            user: data,
            loading: false,
          });
        }
        const error = (await res.json()).message;

        this.setState({
          error: error,
          loading: false,
        });
      } catch (err) {
        console.log(err);
        this.setState({
          error: `There is Some Error`,
          loading: false,
        });
      }
    });

    // todo: fetch the Github-api
  };

  render() {
    const { user, loading, error } = this.state;
    return (
      <div>
        <Search fetchData={this.fetchUserData} />
        {error && <p className="badge-danger">{error}</p>}
        {loading && <p className="">Loading...</p>}
        {!loading && !error && user && <UserCard user={user} />}
      </div>
    );
  }
}

export default App;
