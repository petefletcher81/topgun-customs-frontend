import React from "react";
import "./Post.css";
import PostModal from './PostModal.jsx';
 
class Post extends React.Component {
  state = {
    togglePost: false
  }

  clickedPost = () => {
    this.setState({togglePost: true});
    console.log('was clicked')
  }

  closePost =() => {
    this.setState({togglePost: false})
  }
  

  render() {
    console.log(this.props)
    return (
      <div className="postContainer" height={this.props.height}>
      {this.state.togglePost ? <PostModal imageSrc={this.props.imageSrc}
                    title={this.props.title}
                    description="this will be a desc"
                    toggle={this.state.togglePost}
                    ordered={this.closePost}/> : null
                    }
        <h3 className="postHeader">{this.props.title}</h3>
        <img
          className="postImg"
          src={this.props.imageSrc}
          alt={this.props.title}
        />
        <div className="postButtons">
          <button onClick={this.clickedPost} classname="viewPost">View Post</button>

        </div>
      </div>
    );
  }
}


export default Post;
