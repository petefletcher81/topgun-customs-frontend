import React, { Component } from "react";
import Post from "./components/Post";
import postData from "./data/post.json";
import Header from "./components/Header";

import "./App.scss";

class App extends Component {
 
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
