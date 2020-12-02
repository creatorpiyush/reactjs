import React from "react";
import "./App.css";

import Search from "./components/Search";
import Search2 from "./components/Search2";
import UserCard from "./components/UserCard";
import Repos from "./components/Repos";

class App extends React.Component {
  state = {
    user: null,
    userDataerror: null,
    reposError: null,
    repos: [],
    loading: false,
  };

  // * Fetching user profile
  fetchUserData = async (username) => {
    // todo: fetch the Github-api
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return { data };
    }

    const error = (await res.json()).message;
    return { error };
  };

  // * Fetching user Repos
  fetchRepo = async (username) => {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?page=1`
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);

      return { data };
    }

    const error = (await res.json()).message;
    return { error };
  };

  fetchData = async (username) => {
    this.setState({ loading: true }, async () => {
      try {
        const [user, repos] = await Promise.all([
          this.fetchUserData(username),
          this.fetchRepo(username),
        ]);
        // console.log(user);
        if (user.data !== undefined && repos.data !== undefined) {
          return this.setState({
            user: user.data,
            repos: repos.data,
            loading: false,
          });
        }

        this.setState({
          userDataerror: user.error,
          reposError: repos.error,
          loading: false,
        });
      } catch (err) {
        console.log(err);
        this.setState({
          error: `There is Some Error, Please Refresh...`,
          loading: false,
        });
      }
    });
  };

  render() {
    const { userDataerror, reposError, loading, user, repos } = this.state;
    return (
      <div>
        <Search fetchData={this.fetchData} />
        <div className="container">
          <div className="text-center">
            {loading && <p className="">Loading...</p>}
            {userDataerror && <p className="badge-danger">{userDataerror}</p>}
            {!loading && !userDataerror && user && <UserCard user={user} />}
          </div>
          {reposError && <p className="badge-danger">{reposError}</p>}
          {!loading &&
            !reposError &&
            repos.map((repo) => <Repos key={repo.id} repo={repo} />)}
        </div>
      </div>
    );
  }
}

export default App;
