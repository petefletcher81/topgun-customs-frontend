import React from "react";
import DownVote from "../assets/downvote.png";
import UpVote from "../assets/upvote.png";
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions'
import './Votes.scss'

class Votes extends React.Component {
    state = { 
        votes: 0
     }

    render() { 
        return ( 
        <div className="voteButtons">
            <div>
                <img src={UpVote} onClick={this.props.onIncVoteCounter} alt="upVote-icon" />
                <img src={DownVote} onClick={this.props.onDecVoteCounter} alt="downVote-icon" />
            </div>
            
            <div>
                <h4>Votes: 0{this.props.vts}</h4>
            </div>    
            
          </div>
         );
    }
}
 
//the state in the below is passed from the reducer as the fucntion is passed through via the connect
const mapStateToProps = state => {
    return {
      vts: state.votes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onIncVoteCounter: () => dispatch({type: actionTypes.INC_VOTES}),
        onDecVoteCounter: () => dispatch({type: actionTypes.DEC_VOTES})
    }
  }
  
  //connect takes the state we want to manipulate and the actions
  //called as a function executes the props function then the passes Post
  export default connect(mapStateToProps, mapDispatchToProps)(Votes);