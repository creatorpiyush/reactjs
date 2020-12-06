import React from "react";

class FormBasics extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Comments: "",
      Topic: "react",
    };
  }

  handelUsernameChange = (e) => {
    // console.log(e);
    this.setState({
      Username: e.target.value,
    });
  };

  handelCommentsChange = (e) => {
    this.setState({
      Comments: e.target.value,
    });
  };

  handelTopicChange = (e) => {
    this.setState({
      Topic: e.target.value,
    });
  };

  handelSubmit = (e) => {
    alert(`${this.state.Username} ${this.state.Comments} ${this.state.Topic}`);
    e.preventDefault();
  };

  render() {
    const { Username, Comments, Topic } = this.state;
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={Username}
              onChange={this.handelUsernameChange}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={Comments}
              onChange={this.handelCommentsChange}
            ></textarea>
          </div>

          <div>
            <label>Topic</label>
            <select value={Topic} onChange={this.handelTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormBasics;
