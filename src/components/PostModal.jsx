import React from "react";
import "./PostModal.css";
import DownVote from "../assets/downvote.png";
import UpVote from "../assets/upvote.png";
import Comment from "../assets/comment.png";
import Like from "../assets/like.png";

class PostModal extends React.Component {
    // toggleClose = () => {
    //     modal.style.display = "none";
    // }

  render() {
    return (
    <div className="modal">
      <div className="modalPostContainer" height={this.props.height}>
        
        <h3 className="modalPostHeader">{this.props.title}</h3>
        <img
          className="modalPostImg"
          src={this.props.imageSrc}
          alt={this.props.title}
        />
        <p classname="descPara">{this.props.description}</p>
        <div className="modalPostButtons">
          <img src={UpVote} alt="upVote-icon" />
          <img src={DownVote} alt="downVote-icon" />
          <img src={Comment} alt="comment-icon" />
          <img src={Like} alt="like-icon" />
        </div>
      </div>
      <div className="close">
            <button onClick={this.toggleClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default PostModal;
