import React from "react";
import "./Post.css";
import PostModal from './PostModal.jsx'

class Post extends React.Component {
  state = {
    show: false
  }

  showModal = () => {
    this.setState({show:true})
  }

  render() {
    
    return (
      <div className="postContainer" height={this.props.height}>
      {this.state.show ? <PostModal imageSrc={this.props.imageSrc}
                    title={this.props.title}
                    description="this will be a desc"/> : null}
        <h3 className="postHeader">{this.props.title}</h3>
        <img
          className="postImg"
          src={this.props.imageSrc}
          alt={this.props.title}
        />
        <div className="postButtons">
          <button onClick={this.showModal} classname="viewPost">View Post</button>

        </div>
      </div>
    );
  }
}

export default Post;
