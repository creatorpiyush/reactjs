import React from "react";

export default class Search extends React.Component {
  inputRef = React.createRef();

  state = {
    username: "",
  };

  handleClick = () => {
    const value = this.inputRef.current.value;

    alert(`The Value of the input field is ${value}`);

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
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
