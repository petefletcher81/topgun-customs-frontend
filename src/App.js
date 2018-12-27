import React, { Component } from 'react';
import Post from './components/Post';
// import postData from './data/posts.json'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
