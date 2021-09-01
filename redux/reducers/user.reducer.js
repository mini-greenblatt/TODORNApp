import produce from 'immer';
import createReducer from './reducerUtils';


const initialState = {
    user: {

    }
    ,
    userName: '',
}

const user = {
    reset(state = initialState, action) {
        Object.keys(initialState).forEach((key) => {
            state[key] = initialState[key];
        })
    },

    setUser(state, action) {
        state.user = action.payload
    },


    setUserName(state, action) {
        state.userName = action.payload;
    },

}

export default produce((state, action) =>
    createReducer(state, action, user), initialState);