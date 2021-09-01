import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, Alert} from 'react-native';
import {elevationShadowStyle} from '../../utils';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {Config} from '../../config';
import {SOCIAL_PROVIDERS} from '../../store/stores/UserStore';

class GoogleLogin extends Component {
    async googleSignIn() {
        GoogleSignin.configure({
            scopes: [], // what API you want to access on behalf of the user, default is email and profile
            webClientId: Config.webClientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
            //iosClientId: Config.iosClientId, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const data = {
                provider: SOCIAL_PROVIDERS.GOOGLE,
                token: userInfo.idToken,
                id: userInfo.user.id,
                email: userInfo.user.email,
                firstName: userInfo.user.givenName,
                lastName: userInfo.user.familyName,
                imageUri: userInfo.user.photo,
            };
            this.props.getUserData(data);
        } catch (error) {
            // console.log('Google Error', error.code, error);
            // Alert.alert('Google Error', JSON.stringify(error));
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.buttonWrapper} onPress={() => this.googleSignIn()}>
                <Image source={require('../../assets/google.png')} style={styles.logo}/>
                <Text style={styles.name}>Google</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonWrapper: {
        height: 55,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: Config.deviceWidth - 30,
        padding: 15,
        marginBottom: 15,
        ...elevationShadowStyle(3),
    },
    logo: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    name: {
        color: '#565675',
        textAlign: 'center',
        width: '85%',
        fontSize: 17,
        fontWeight: '500',
    },
});

export default GoogleLogin