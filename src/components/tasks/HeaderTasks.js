import React from 'react';
import {
    View,
    Header,
    Title,
    Row,
} from 'native-base';
import {
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';



function HeaderTasks(props) {

    const {

    } = props;



    return (
        <>
        <View style={{backgroundColor:'red',width:20,height:20}}></View>
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

        }
    }
)(HeaderTasks);

const styles = StyleSheet.create({
    title: {
        color: 'black',
    },
    header: {
        backgroundColor: 'transparent',
        width: '100%',
        borderBottomWidth: 0,
        flexDirection: 'column',
        height: Dimensions.get('window').width / 4.5,
        // backgroundColor:'red'

    },
    label: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    divider: {
        width: '100%',
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 0.3,
    },
    row: {
        alignSelf: 'center',
    },
    viewOfShadow: {
        height: 5,
        backgroundColor: 'green',
        width: '100%'
    },
    listItem: {
        width: Dimensions.get('window').width / 10 * 9,
        // backgroundColor: 'green',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 5,
        // marginStart:-0
        marginBottom: 5,
    },
})