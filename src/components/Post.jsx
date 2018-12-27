import React from 'react';
class Post extends React.Component {
    render() {
        return (
            <div style={containerStyle} height={this.props.height}>
            <h3>{this.props.title}</h3>
            <img 
                src={this.props.imageSrc}
                alt={this.props.title} />
     <p>
         {this.props.description} 
     </p>
            </div>
            );
        }
    }

const containerStyle = {
    backgroundColor: '#00FFCF'
};
    
export default Post;