import React, { Component } from "react";
import Post from "./components/Post";
import postData from "./data/post.json";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  state = {
    posts: ["post1", "post2", "post3"]
  };
  render() {
    
    return (
      <div>
        <Header />
        <div className="mainLayout">
          <div className="centerLayout">
            <div className="postMain">
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
        </div>
      </div>
    );
  }
}

export default App;
