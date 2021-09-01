import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
    notes: [],
    numNotes: 0
}

const notes = {
    reset(state = initialState, action) {
        Object.keys(initialState).forEach((key) => {
            state[key] = initialState[key];
        })
    },
    setNotes(state, action) {
        state.notes = action.payload
        // state.notes = state.notes.reverse();
    },
    addNewNote(state, action) {
        state.notes.unshift(action.payload)
    },
    setNumNotes(state, action) {
        state.numNotes = action.payload
    },
    deleteNote(state, action) {
        state.notes = state.notes.filter(n => n._id !== action.payload)
    },
    updateNote(state, action) {
        let notesTemp = []
        state.notes.forEach(note => {
            if (note._id == action.payload._id) {
                let noteTemp = { ...note }
                noteTemp = action.payload.note
                notesTemp.push(noteTemp)
            }
            else
                notesTemp.push(note)
        });
        state.notes = notesTemp;

    }
}

export default produce((state, action) =>
    createReducer(state, action, notes), initialState);