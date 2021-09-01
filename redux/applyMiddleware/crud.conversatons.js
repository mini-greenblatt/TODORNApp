import actions from '../actions';
import { useSelector } from 'react-redux';
// import { getStateGeneric } from '../../services/user.service';
// import keys from '../../config/keys';

export const fetchConversations = ({ dispatch, getState }) => next => action => {

    // if (action.type === 'FETCH_CONVERSATIONS') {
    //     fetch(
    //         `${keys.API_URL}/${getStateGeneric(getState, 'userName')}/conversation/getAllConversations`
    //         , {
    //             method: 'POST',
    //             headers: {
    //                 Authentication: getStateGeneric(getState, 'jwt'),
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //         }).then((res) => {
    //             debugger
    //             dispatch(actions.checkStatus(res));
    //             return res.json()
    //         }).then((res) => {
    //             dispatch(actions.setLoadSignAndLogin(false));
    //             dispatch(actions.setConversations(res.Conversations));
    //         }).catch((err) => {
    //             dispatch(actions.setFlagErrorWithLoadingData(true));
    //             console.log(err)
    //         })
    // }

    return next(action)
}

export const deleteConversation = ({ dispatch, getState }) => next => action => {
    // if (action.type === 'DELETE_CONVERSATION') {
    //     fetch(`${keys.API_URL}/${getStateGeneric(getState, 'userName')}/conversation/deleteConversations`
    //         , {
    //             method: 'DELETE',
    //             headers: {
    //                 Authentication: getStateGeneric(getState, 'jwt'),
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ conversationsID: action.payload.length > 1 ? [action.payload] : [action.payload] }),

    //         }).then((res) => {
    //             return res.json()
    //         }).then((res) => {
    //             if (action.payload.length > 1)
    //                 dispatch(actions.deleteConversations({ key: 'delete', conversations: action.payload }));
    //             else
    //                 dispatch(actions.deleteConversationById(action.payload));
    //         }).catch(() => {

    //         })
    // }

    return next(action)
}

export const updateConversation = ({ dispatch, getState }) => next => action => {

    // if (action.type.includes('UPDATE_CONVERSATION')) {
    //     fetch(
    //         `${keys.API_URL}/${getStateGeneric(getState, 'userName')}/conversation/editConversation`
    //         , {
    //             method: 'POST',
    //             headers: {
    //                 Authentication: getStateGeneric(getState, 'jwt'),
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ conversation: action.payload.conversation }),

    //         }).then((res) => {

    //             return res.json()
    //         }).then((res) => {
    //             console.log(action.payload.editTrueOrFalse)
    //             if (res.result)
    //                 dispatch(actions.editOneConversation({
    //                     conversation: res.result,
    //                     type: action.payload.keyEdit,
    //                     editTrueOrFalse: action.payload.editTrueOrFalse
    //                 }));
    //         }).catch((err) => {
    //         })
    // }
    return next(action)
}

export const updateConversation1 = ({ dispatch, getState }) => next => action => {
    // if (action.type === 'UPDATE_CONVERSATION1') {
    //     return fetch(`${keys.API_URL}/${getStateGeneric(getState, 'userName')}/conversation/editConversation`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authentication": getStateGeneric(getState, 'jwt')
    //         },
    //         body: JSON.stringify({ "conversation": action.payload })
    //     })
    //         .then(res => {
    //             return res.json()
    //         }).then((res) => {
    //             dispatch(actions.updateConversationById(res.result));
    //         }).catch(() => {
    //         })
    // }

    return next(action)
}

export const editConversationsMidd = ({ dispatch, getState }) => next => action => {
    // if (action.type === 'EDIT_CONVERSATIONS_MIDD') {
    //     return fetch(`${keys.API_URL}/${getStateGeneric(getState, 'userName')}/conversation/editConversations`,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 "Authorization": getStateGeneric(getState, 'jwt')
    //             },
    //             body: JSON.stringify({ conversations: action.payload.conversations })
    //         })
    //         .then(res => {
    //             return res.json()
    //         }).then((res) => {
    //             dispatch(actions.editConversations({ conversations: res.editedConversations, key: action.payload.keyEdit }));
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }
    return next(action)
}

export const getSystemWaves = ({ dispatch, getState }) => next => action => {
    // if (action.type === 'GET_SYSTEM_WAVES') {

    //     fetch(`${keys.API_URL}/${getStateGeneric(getState, 'userName')}/wave/getSystemWaves`, {
    //         method: 'POST',
    //         headers: { Authentication: getStateGeneric(getState, 'jwt') }
    //     }
    //     )
    //         .then((res) => {
    //             return res.json();
    //         }).then((res) => {
    //             dispatch(actions.setSystemWaves(res.systemWaves))
    //         }).catch((err) => {
    //             dispatch(actions.setFlagErrorWithLoadingData(true));
    //             console.log(err);
    //         })
    // }
    return next(action)
}

export const markAsTrashConversationsMidd = ({ dispatch, getState }) => next => action => {
    // if (action.type === 'MARK_AS_TRASH_CONVERSATIONS_MIDD') {
    //     fetch(`${keys.API_URL}/${getStateGeneric(getState, 'userName')}/conversation/markAsTrashConversations`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authentication': getState().UserReducer.user.jwt
    //         },
    //         body: JSON.stringify({ conversations: action.payload })
    //     }).then((res) => {
    //         return res.json();
    //     }).then((res) => {
    //         dispatch(actions.editConversations({ conversations: res.conversations, key: 'trash' }));
    //     }).catch((err) => {
    //         debugger
    //     })
    // }
    return next(action)
}



