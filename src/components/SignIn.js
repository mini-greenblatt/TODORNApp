import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Button,
    Dimensions
} from 'react-native';
import {
    Content
} from 'native-base'
import { connect } from 'react-redux';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
// import UserService from '../../services/user.service'
import actions from '../../redux/actions'

function SignIn(props) {
    const {
        navigation,
        setUser
    } = props;

    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '688579938286-9akgmcg4vapp4p9i0s6vmcgga2uq5291.apps.googleusercontent.com'
        });

        props.resetRedux();
    }, []);

    const onGoogleButtonPress = async () => {
        try {
            navigation.navigate('Tasks')

            // await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo) {
                const { accessToken } = await GoogleSignin.getTokens();

            }
        }
        catch (err) { }
    }

    return (
        <>
            <View style={styles.view}>
                <Text style={{ margin: 5 }}>Sign In with google </Text>
                <GoogleSigninButton
                    style={styles.signInButton}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => {
                        onGoogleButtonPress();
                    }}
                />
            </View>
        </>

    )
}

export default connect(
    (state) => {
        return {
        }
    },
    (dispatch) => {
        return {
            resetRedux: function () {
                dispatch(actions.reset())
            },
            setUser: function (userInfo) {
                dispatch(actions.setUser(userInfo))
            }


        }
    }
)(SignIn);

const styles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height - 100,
    },
    signInButton: {
        width: 192,
        height: 48,
        alignSelf: 'center'
    }
})