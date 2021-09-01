import actions from '../actions';
// import ShowToast from '../../services/toast.service';
// import { getStateGeneric } from '../../services/user.service';
// import keys from '../../config/keys';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getNotesByUsername = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_NOTES_BY_USERNAME') {
        // fetch(
        //     `${keys.API_URL}/${getStateGeneric(getState, 'userName')}/note/getNotesByUserName`
        //     , {
        //         method: 'GET',
        //         headers: {
        //             Authorization: getStateGeneric(getState, 'jwt'),
        //             Authentication: getStateGeneric(getState, 'jwt'),
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //     }).then((res) => {
        //         return res.json()
        //     }).then((res) => {
        //         dispatch(res && actions.setNotes(res.notes))
        //     }).catch((err) => {
        //         console.log(err)
        //     })
        AsyncStorage
            .getItem('task')
            .then(favs => {
                favs = favs == null ? [] : JSON.parse(favs)

                favs.push(action.payload)

                return AsyncStorage.setItem('task', JSON.stringify(favs))
            })

    }
    return next(action)
}

export const createNote = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CREATE_NOTE') {
        debugger
        fetch(
            `${keys.API_URL}/${getStateGeneric(getState, 'userName')}/note/createNote`
            , {
                method: 'POST',
                headers: {
                    Authorization: getStateGeneric(getState, 'jwt'),
                    Authentication: getStateGeneric(getState, 'jwt'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload),
            }).then((res) => {
                return res.json()
            }).then((res) => {
                dispatch(actions.addNewNote(res["new note"]))
                // alert('The note was created successfully')
                ShowToast.showToast('The note was created successfully')
            }).catch((err) => {
                console.log(err)
            })
    }
    return next(action)
}

export const deleteNote = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_NOTE') {
        fetch(
            `${keys.API_URL}/${action.payload}/note/deleteNote2`
            , {
                method: 'DELETE',
                headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwdjBvbENIR0NnUzhDMTVtNEhsdGVjQWdYa1MyIiwiZW1haWwiOiJyaXZrYUBsZWFkZXIuY29kZXMiLCJpYXQiOjE2MjMyNTY1NjR9.HWIegvFOpFOVCvROrCwqPWrRoFaxjSyohBMIbjOMdA8',
                    Authentication: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwdjBvbENIR0NnUzhDMTVtNEhsdGVjQWdYa1MyIiwiZW1haWwiOiJyaXZrYUBsZWFkZXIuY29kZXMiLCJpYXQiOjE2MjMyNTY1NjR9.HWIegvFOpFOVCvROrCwqPWrRoFaxjSyohBMIbjOMdA8',
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                return res.json()
            }).then((res) => {
                // console.log(res["note is deleted"])
                dispatch(actions.deleteNote(res["note is deleted"]))
            }).catch((err) => {
                console.log(err)
            })
    }
    return next(action)
}

export const updateNote = ({ dispatch, getState }) => next => action => {
    if (action.type === 'UPDATE_NOTE') {
        console.log(action.payload)
        fetch(
            `${keys.API_URL}/${getStateGeneric(getState, 'userName')}/${action.payload._id}/updateNoteByID`
            , {
                method: 'POST',
                headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwdjBvbENIR0NnUzhDMTVtNEhsdGVjQWdYa1MyIiwiZW1haWwiOiJyaXZrYUBsZWFkZXIuY29kZXMiLCJpYXQiOjE2MjMyNTY1NjR9.HWIegvFOpFOVCvROrCwqPWrRoFaxjSyohBMIbjOMdA8',
                    Authentication: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwdjBvbENIR0NnUzhDMTVtNEhsdGVjQWdYa1MyIiwiZW1haWwiOiJyaXZrYUBsZWFkZXIuY29kZXMiLCJpYXQiOjE2MjMyNTY1NjR9.HWIegvFOpFOVCvROrCwqPWrRoFaxjSyohBMIbjOMdA8',
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload.note)
            }).then((res) => {
                return res.json()
            }).then((res) => {
                dispatch(actions.updateNote(res.user.note))
            }).catch((err) => {
                console.log(err)
            })
    }
    return next(action)
}

export const getNumNotesByUserName = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_NUM_NOTES_BY_USER_NAME') {
        fetch(
            `${keys.API_URL}/${getStateGeneric(getState, 'userName')}/note/getNumNotesByUserName`
            , {
                method: 'GET',
                headers: {
                    Authorization: getStateGeneric(getState, 'jwt'),
                    Authentication: getStateGeneric(getState, 'jwt'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                return res.json()
            }).then((res) => {
                dispatch(res && actions.setNumNotes(res["num of notes::::::"]))
            }).catch((err) => {
                console.log(err)
            })
    }
    return next(action)
}