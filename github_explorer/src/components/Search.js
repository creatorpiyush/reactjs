import React from "react";

export default class Search extends React.Component {
  state = {
    username: "",
  };

  handleUsernameChange = (e) => {
    const value = e.target.value;

    this.setState({
      username: value,
    });
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark justify-content-center">
          <div className="form-inline">
            <input
              className="form-control mr-sm-2"
              value={username}
              onChange={this.handleUsernameChange}
              type="text"
              name="username"
              placeholder="Enter Username"
            />
            <button
              className="btn btn-success my-3 my-sm-1"
              onClick={() => this.props.fetchData(username)}
            >
              Search
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
