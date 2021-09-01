import actions from '../actions';
// import ShowToast from '../../services/toast.service';
// import userService from '../../services/user.service';
// import keys from '../../config/keys';


export const getUser = ({ dispatch, getState }) => next => action => {

    if (action.type === "GET_USER") {
        console.log('vmmmmmmm', getState().UserReducer.user.jwt)
        // return fetch(`${keys.API_URL}/getUser/${action.payload.userName}`, {
        //     method: "GET",
        //     headers: {
        //         "Authorization": getState().UserReducer.user.jwt,
        //         "Authentication": getState().UserReducer.user.jwt,
        //         'Content-Type': 'application/json',
        //     }
        // })
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then((res) => {
        //         dispatch(actions.setUserFromServer(res.user))
        //     }).catch((err) => {
        //         dispatch(actions.setLoadSignAndLogin(false))
        //         userService.logoff();
        //         ShowToast.showToast('Error. Try again', 'danger')
        //         console.log(err);
        //     })
    }

    return next(action)
}






