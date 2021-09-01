// import auth from '@react-native-firebase/auth';
// import ShowToast from '../../services/toast.service';
// import userService from '../../services/user.service';
import actions from '../actions';
// import Cookie from '../../services/cookie.service';
// import { getStateGeneric } from '../../services/user.service';
// import keys from '../../config/keys';

export const loginMidd = ({ dispatch, getState }) => next => action => {
    // if (action.type === 'LOGIN_MIDD') {
    //     if (action.payload) {
    //         let email = action.payload.email;
    //         let password = action.payload.password;

    //         auth()
    //             .signInWithEmailAndPassword(email, password)
    //             .then(() => {
    //                 console.log('User account created & signed in!');
    //             })
    //             .catch(error => {

    //                 dispatch(actions.setLoadSignAndLogin(false))

    //                 if (error.code === 'auth/email-already-in-use') {
    //                     console.log('That email address is already in use!');
    //                     ShowToast.showToast('That email address is already in use!', 'danger')
    //                 }

    //                 if (error.code === 'auth/invalid-email') {
    //                     ShowToast.showToast('That email address is invalid', 'danger')
    //                 }

    //                 if (error.code === 'auth/user-not-found') {
    //                     ShowToast.showToast('There is no user record corresponding to this identifier. SinUp before', 'danger')
    //                 }
    //                 else {
    //                     console.error(error);
    //                     ShowToast.showToast('Error. Try again', 'danger')
    //                 }

    //             });
    //     }
    // }

    return next(action);
}

export const SignUpMidd = ({ dispatch, getState }) => next => action => {
    // if (action.type === 'SIGN_UP_MIDD') {

    //     let userName = action.payload.userName;
    //     let email = action.payload.email;
    //     let password = action.payload.password;

    //     dispatch(actions.setLoadSignAndLogin(true))

    //     dispatch({ type: 'USER_NAME_AVAILABILITY', payload: userName })
    //         .then((res) =>

    //             auth()
    //                 .createUserWithEmailAndPassword(email, password)
    //                 .then(() => {
    //                     dispatch(actions.setUserName(userName))
    //                     console.log('User account created & signed in!');
    //                 })
    //                 .catch(error => {

    //                     dispatch(actions.setLoadSignAndLogin(false))

    //                     if (error.code === 'auth/email-already-in-use') {
    //                         console.log('That email address is already in use!');
    //                         ShowToast.showToast('That email address is already in use!', 'danger')
    //                     }

    //                     else if (error.code === 'auth/invalid-email') {
    //                         console.log('That email address is invalid!');
    //                         ShowToast.showToast('That email address is invalid', 'danger')
    //                     }

    //                     else {
    //                         console.error(error);
    //                         ShowToast.showToast('Error. Try again', 'danger')
    //                     }

    //                 })

    //         ).catch((err) => {
    //             dispatch(actions.setLoadSignAndLogin(false))

    //             if (err === false)
    //                 ShowToast.showToast("This user name is already taken, please choose another one.", 'danger')
    //             else
    //                 ShowToast.showToast("There was an error, please try again", 'danger')
    //         })
    // }
    return next(action);

}

export const getAccessToken = ({ dispatch, getState }) => next => action => {
    // if (action.type === 'GET_ACCESS_TOKEN') {

    //     dispatch(actions.setLoadSignAndLogin(true))

    //     return fetch(`${keys.ACCOUNT_URL}/getAccessToken`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             action: "firebaseloginwithcredentials",
    //             jwt: action.payload
    //         })
    //     })
    //         .then((data) => data.json()).
    //         then((data) => {
    //             dispatch({ type: 'CHECK_PERMISSION', payload: data.accessToken })
    //         }).catch((err) => {
    //             console.log(err);
    //             dispatch(actions.setLoadSignAndLogin(false))
    //             userService.logoff();
    //             ShowToast.showToast('Error. Try again', 'danger')
    //         })
    // }
    return next(action);
}

export const checkPermission = ({ dispatch, getState }) => next => action => {

    // if (action.type === 'CHECK_PERMISSION') {
    //     debugger
    //     console.log(getState().UserReducer.user._user.photoURL);
    //     console.log(getState().UserReducer.user._user.displayName);
    //     let TokenToString = action.payload.toString();
    //     let dataToProfilePage = {
    //         action: "loginCheckPermission",
    //         token: TokenToString,
    //         username: getState().UserReducer.userName,
    //         displayName: getState().UserReducer.user._user.displayName ? getState().UserReducer._user.user.displayName : getState().UserReducer.userName,
    //         photo: getState().UserReducer.user._user.photoURL ? getState().UserReducer._user.user.photoURL : "https://files.codes/uploads/tehilaR/img/1615981693222__240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
    //     };

    //     return fetch(`${keys.ACCOUNT_URL}/checkPremission/box`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authorization": TokenToString
    //         },
    //         withCradentials: true,
    //         body: JSON.stringify(dataToProfilePage)
    //     }).then((res) => res.json())
    //         .then((data) => {

    //             data.jwt && Cookie.setCookie('jwt', data.jwt);

    //             //check if register to leader with google and user dont enter userName and change flag
    //             if (data.userName === '') {

    //                 dispatch(
    //                     actions.setUser(
    //                         {
    //                             "_id": data.uid,
    //                             "jwt": data.jwt
    //                         }
    //                     )
    //                 )

    //                 dispatch(actions.setFlagRegisterWithoutUserName(true));
    //                 dispatch(actions.setLoadSignAndLogin(true));

    //             }

    //             else {

    //                 data.userName && Cookie.setCookie('jwt', data.userName);

    //                 dispatch(
    //                     actions.setUser(
    //                         {
    //                             "_id": data.uid,
    //                             "userName": data.userName,
    //                             "jwt": data.jwt
    //                         }
    //                     ))

    //                 dispatch(actions.registerUserInLeader(data))
    //             }


    //         }).catch((err) => {
    //             ShowToast.showToast('Error.  Try again', 'danger')
    //             dispatch(actions.setLoadSignAndLogin(false))
    //             userService.logoff();
    //         })
    // }
    return next(action);
}

export const userNameAvailability = ({ dispatch, getState }) => next => action => {

    // return new Promise((resolve, reject) => {
    //     if (action.type === 'USER_NAME_AVAILABILITY') {
    //         let userName = action.payload;

    //         return fetch(`${keys.ACCOUNT_URL}/usernameCheck`, {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ action: "userNameCheck", usernameToCheck: userName })
    //         }).then((response) =>
    //             response.json())
    //             .then((data) => {
    //                 if (!data.availability) {
    //                     reject(false)
    //                 }
    //                 else {
    //                     resolve(true)
    //                 }
    //             }).catch((XMLHttpRequest, textStatus, errorThrown) => {
    //                 userService.logoff();
    //                 console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)
    //                 reject(errorThrown)
    //             })
    //     }
    //     return next(action)
    // })
}

export const addUserName = ({ dispatch, getState }) => next => action => {

    // if (action.type === 'ADD_USER_NAME') {
    //     dispatch(actions.setFlagRegisterWithoutUserName(false));

    //     let userName = action.payload;
    //     const jwt = getState().UserReducer.user.jwt;
    //     const _id = getState().UserReducer.user._id;

    //     dispatch({ type: 'USER_NAME_AVAILABILITY', payload: userName })
    //         .then((res) =>

    //             fetch(`${keys.ACCOUNT_URL}/userNameSave`, {
    //                 method: "POST",
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     "Authorization": jwt,
    //                 },
    //                 body: JSON.stringify({ action: "userNameSave", usernameToSave: userName, userId: getState().UserReducer.user._id }),
    //             }).then((response) =>
    //                 response.json())
    //                 .then((data) => {

    //                     dispatch(actions.setFlagRegisterWithoutUserName(false));

    //                     Cookie.set('userName', data.username);

    //                     dispatch(
    //                         actions.setUser(
    //                             {
    //                                 "_id": _id,
    //                                 "userName": data.username,
    //                                 "jwt": jwt
    //                             }
    //                         ))

    //                     //save token to user
    //                     let fcmToken = getState().UserReducer.fcmToken
    //                     if (fcmToken)
    //                         dispatch(actions.saveFcmToken(fcmToken))
    //                     else
    //                         dispatch(actions.setUser(data));

    //                     // dispatch(actions.setLoginOrSignUpSuccess(true))
    //                     // dispatch(actions.setLoadSignAndLogin(false))
    //                     console.log('userName', getState().UserReducer.user.userName)
    //                     console.log('jwt', getState().UserReducer.user.jwt)

    //                     dispatch(actions.registerUserInLeader({ userName: data.username, jwt: jwt }))
    //                     // ShowToast.showToast('Signed in, Please wait...', '')


    //                 })
    //                 .catch((err) => {
    //                     dispatch(actions.setLoadSignAndLogin(false))
    //                 })

    //         ).catch((err) => {
    //             dispatch(actions.setLoadSignAndLogin(false))

    //             if (err === false) {
    //                 dispatch(actions.setFlagRegisterWithoutUserName(true));
    //                 ShowToast.showToast("This user name is already taken, please choose another one.", 'danger')
    //             }
    //             else {
    //                 ShowToast.showToast("There was an error, please try again", 'danger')
    //                 userService.logoff();
    //             }
    //         })
    // }
    return next(action);

}

export const registerUserInLeader = ({ dispatch, getState }) => next => action => {

    // if (action.type === 'REGISTER_USER_IN_LEADER') {
    //     debugger
    //     console.log(getState().UserReducer.user.userName, getState().UserReducer.user.jwt)
    //     fetch("https://box.dev.leader.codes/" + action.payload.userName+'/isPermission'
    //         , {
    //             method: "GET",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 "Authorization": action.payload.jwt,
    //                 "Authentication": action.payload.jwt
    //             },
    //         }
    //     ).then((response) => {
    //         dispatch(actions.setLoginOrSignUpSuccess(true));
    //         console.log("res", response)
    //         //save token to user
    //         let fcmToken = getState().UserReducer.fcmToken
    //         if (fcmToken)
    //             dispatch(actions.saveFcmToken(fcmToken))
    //         else
    //             dispatch(actions.getUser({ userName: getState().UserReducer.user.userName, jwt: getState().UserReducer.user.jwt }));

    //         dispatch(actions.initDataMiddOne());

    //         ShowToast.showToast('Signed in, Please wait...', '')
    //     }
    //     )
    //         .catch((err) => {
    //             userService.logoff();
    //             dispatch(actions.setLoadSignAndLogin(false))
    //         })
    // }
    return next(action);

}

export const initDataMiddOne = ({ dispatch, getState }) => next => action => {

    // if (action.type === 'INIT_DATA_MIDD_ONE') {

    // //     dispatch(actions.fetchConversations());
    // //     dispatch(actions.getSourcesMidd());
    // //     dispatch(actions.getSystemWaves());
    // //     dispatch(actions.fetchContacts());

    // }
    return next(action);

}

// export const checkStatus = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'CHECK_STATUS') {
//         let status = action.payload;

//         if (status && status.status === 502) {
//             dispatch(actions.initDataMiddOne())
//         }
//     }
//     return next(action);

// }




