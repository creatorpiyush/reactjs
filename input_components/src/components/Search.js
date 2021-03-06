import React from "react";

export default class Search extends React.Component {
  state = {
    username: "",
  };

  handleUsernameChange = (e) => {
    const value = e.target.value;

    console.log(e);
    this.setState({
      username: value,
    });
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <input
          value={username}
          onChange={this.handleUsernameChange}
          type="text"
          placeholder="Enter Username"
        />
      </div>
    );
  }
}
