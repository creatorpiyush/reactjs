import React from "react";

export default class Search extends React.Component {
  state = {
    username: "",
  };

  handleKeyDown = (e) => {
    const value = e.target.value;

    console.log(e);

    if (e.keyCode === 13) {
      alert(`The Value of the input field is ${value}`);
    }

    this.setState({
      username: value,
    });
  };

  render() {
    return (
      <div>
        <input
          onKeyDown={this.handleKeyDown}
          type="text"
          placeholder="Enter Username"
        />
      </div>
    );
  }
}
