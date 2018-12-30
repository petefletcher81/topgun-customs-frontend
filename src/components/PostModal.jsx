import React from "react";
import "./PostModal.css";
import Votes from './Votes'
import Comment from "../assets/comment.png";
import Like from "../assets/like.png";

class PostModal extends React.Component {
  state = {
    toggleModal: true,
    votes: 0,
  };

  // modalRef = React.createRef();

  // toggleClose = event => {
  //   console.log(this.modalRef.current.className);
  //   if (this.modalRef.current.className === "modal") {
  //     this.setState({ toggleModal: false });
  //   }
  // };

  render() {
    console.log(this.props)
    return (
      <div
        className="modal"
        ref={this.modalRef}
        style={{ display: this.state.toggleModal ? "flex" : "none" }}
      >
        <div className="modalPostContainer" height={this.props.height}>
          <h3 className="modalPostHeader">{this.props.title}</h3>
          <img
            className="modalPostImg"
            src={this.props.imageSrc}
            alt={this.props.title}
          />
          <p classname="descPara">{this.props.description}</p>
          <div className="modalPostButtons">
            <img src={Comment} alt="comment-icon" />
            <img src={Like} alt="like-icon" />
           <Votes />
          </div>
        </div>
        <div className="close">
          <button onClick={this.props.ordered}>Close</button>
        </div>
      </div>
    );
  }
}

export default PostModal;
