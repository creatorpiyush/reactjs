import React from "react";
import axios from "axios";

class GetRequestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: "Error Retrieving Data" });
      });
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        <div>List of Posts</div>
        <div>
          {posts.length
            ? posts.map((post) => <div key={post.id}>{post.title}</div>)
            : null}
          {error ? <div>{error}</div> : null}
        </div>
      </div>
    );
  }
}

export default GetRequestForm;
