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

        props.resetRedux();
    }, []);

    const onGoogleButtonPress = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo) {
                const { accessToken } = await GoogleSignin.getTokens();
            }
        }
        catch (err){}
        // await UserService.onGoogleButtonPress();
        //signin with google
        // try {
        //     //   await GoogleSignin.hasPlayServices();
        //     console.log(
        //         'sigin'
        //     );
        //     await GoogleSignin.hasPlayServices();
        //     const userInfo = await GoogleSignin.signIn();
        //     setUserInfo(userInfo)
        // }
        // catch (error) {
        //     debugger
        //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //         // user cancelled the login flow
        //     } else if (error.code === statusCodes.IN_PROGRESS) {
        //         // operation (e.g. sign in) is in progress already
        //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //         // play services not available or outdated
        //     } else {
        //         // some other error happened
        //     }

        // }
    }

    return (
        <>
            {/* <Button
                title='Go to tasks screen'
                onPress={() => {
                    props.resetRedux();
                    navigation.navigate('Tasks')
                }}
            >
            </Button> */}

            <View style={{
                alignSelf: 'center',
                justifyContent: 'center',
                height: Dimensions.get('window').height - 100,
            }}>
                <Text style={{ margin: 5 }}>Sign In with google </Text>
                <GoogleSigninButton
                    style={{ width: 192, height: 48, alignSelf: 'center' }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => {
                        // navigation.navigate('Tasks')
                        onGoogleButtonPress();
                        // signIn();
                    }}
                // disabled={this.state.isSigninInProgress}
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
    viewPlus: {
        marginLeft: '76%',
        backgroundColor: 'transparent'
    },

    gradient: {
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        margin: 'auto'

    }
})