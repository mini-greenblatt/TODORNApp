// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
// } from '@react-native-google-signin/google-signin';
// import ShowToast from './toast.service';
// import SignIn from '../src/components/SignIn'

// // import auth from '@react-native-firebase/auth';
// // import Cookie from './cookie.service';

// // GoogleSignin.configure({
// //     webClientId: '688579938286-9akgmcg4vapp4p9i0s6vmcgga2uq5291.apps.googleusercontent.com'
// // });

// class UserService {


//     // //signin with google
//     // onGoogleButtonPress = async () => {

//     //     try {
//     //         //   await GoogleSignin.hasPlayServices();
//     //         const userInfo = await GoogleSignin.signIn();
//     //         SignIn.getUserInfo(userInfo)
//     //         // console.log(userInfo)
//     //         // (userInfo);
//     //     }
//     //     catch (error) {
//     //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//     //             // user cancelled the login flow
//     //         } else if (error.code === statusCodes.IN_PROGRESS) {
//     //             // operation (e.g. sign in) is in progress already
//     //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//     //             // play services not available or outdated
//     //         } else {
//     //             // some other error happened
//     //         }

//     //     }
//     // }




//     // Create a Google credential with the token
//     // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // if (!googleCredential)
//     //     ShowToast.showToast('Error, Try again!', 'danger')


//     // Sign-in the user with the credential
//     // return auth().signInWithCredential(googleCredential);


//     logoff = () => {
//         // Cookie.clearCookie('http://bing.com');

//         // auth()
//         //     .signOut()
//         //     .then(() => {
//         //         console.log('User signed out!')
//         //     });
//     }



// }

// export default new UserService()