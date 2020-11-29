import React from "react";

export default class Search extends React.Component {
  inputRef = React.createRef();

  handleClink = () => {
    const value = this.inputRef.current.value;

    alert(`The value of the input field is ${value}`);

    this.setState({
      username: value,
    });
  };

  render() {
    return (
      <div>
        <input
          ref={this.inputRef}
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <button onClick={this.handleClink}>Click Me</button>
      </div>
    );
  }
}
