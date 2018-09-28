import actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = { example: 'example' };

export default function exampleReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case actionTypes.examples.EXAMPLE:
            return action.payload;
        default:
            return state;
    }
}
