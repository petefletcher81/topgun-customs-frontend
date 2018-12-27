import React from "react";
import "./Post.css";

class Post extends React.Component {
  render() {
    return (
      <div className="postContainer" height={this.props.height}>
        <h3 className="postHeader">{this.props.title}</h3>
        <img src={this.props.imageSrc} alt={this.props.title} />
        <p classname="descPara">{this.props.description}</p>
      </div>
    );
  }
}

const containerStyle = {
  backgroundColor: "#00FFCF"
};

export default Post;
