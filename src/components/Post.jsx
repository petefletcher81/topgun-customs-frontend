import React from "react";
import "./Post.css";
import DownVote from "../assets/downvote.png";
import UpVote from "../assets/upvote.png";
import Comment from "../assets/comment.png";
import Like from "../assets/like.png";

class Post extends React.Component {
  render() {
    return (
      <div className="postContainer" height={this.props.height}>
        <h3 className="postHeader">{this.props.title}</h3>
        <img
          className="postImg"
          src={this.props.imageSrc}
          alt={this.props.title}
        />
        <p classname="descPara">{this.props.description}</p>
        <div className="postButtons">
          <img src={UpVote} alt="upVote-icon" />
          <img src={DownVote} alt="downVote-icon" />
          <img src={Comment} alt="comment-icon" />
          <img src={Like} alt="like-icon" />
        </div>
      </div>
    );
  }
}

export default Post;
