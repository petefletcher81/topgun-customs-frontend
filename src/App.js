import React, { Component } from "react";
import Post from "./components/Post";
import postData from "./data/post.json";

import "./App.css";

class App extends Component {
  state = {
    posts: ["post1", "post2", "post3"]
  };
  render() {
    console.log("hello");
    return (
      <div className="mainLayout">
        <div className="App">
          {postData.map(singlePost => {
            return (
              <Post
                imageSrc={singlePost.img}
                title={singlePost.hero}
                description="this will be a desc"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
