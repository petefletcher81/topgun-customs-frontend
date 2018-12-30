import * as actionTypes from './actions'

const intitalState = {
    votes: 0
}

const reducer = (state = intitalState, action) => {
    switch(action.type) {
    case actionTypes.INC_VOTES:
        return {
            ...state,
            votes: state.votes + 1
        }
    case actionTypes.DEC_VOTES:
        return {
            ...state,
            votes: state.votes - 1
        }
    }
    return state;
};

export default reducer;