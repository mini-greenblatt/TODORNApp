import React, {
    useState,
} from 'react';
import {
    Text,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    View,
} from 'react-native'
import {
    Input
} from 'native-base';
import actions from '../../../redux/actions'
import {
    connect
} from 'react-redux'

function AddTaskModal(props) {
    const {
        addTask,
        setIsVisible,
    } = props;

    const [formValues, setFormValues] = useState({
        'title': '',
        'completed': false,
        'dateCompleted': new Date(),
        'auther': ''
    })

    const setFormValuesFunction = (key, value) => {
        setFormValues({ ...formValues, [key]: value })
    }

    const addNewTask = () => {
        addTask(formValues)
    }
    return (
        <>

            <View style={styles.modalView}>
                <Text style={styles.text}>Enter title of the new task here:</Text>
                <Input
                    placeholder='Task Title'
                    onChangeText={(title) => {
                        setFormValuesFunction('title', title)
                    }}
                    style={styles.nameLabel} />
                <View style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 40,
                    right: '5%',
                }}>
                    <TouchableHighlight
                        style={styles.cancelBtn}
                        onPress={() => {
                            setIsVisible(false)
                        }}
                        underlayColor='#fff'>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>Cancel</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.cancelBtn}
                        onPress={() => {
                            setIsVisible(false),
                                addNewTask()
                        }}
                        underlayColor='#fff'>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Ok</Text>
                    </TouchableHighlight>
                </View>
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
            addTask: function (task) {
                dispatch(actions.addTask(task))
            },
        }
    }
)(AddTaskModal);
const styles = StyleSheet.create({
    nameLabel: {
        width: '80%',
        alignSelf: 'center',
        borderRadius: 2,
        paddingStart: 10,
        minWidth: Dimensions.get('window').width - 100,

    },
    item: {
        width: '90%',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderColor: 'transparent',
    },
    text: {
        color: 'black',
        width: '80%',
        alignSelf: 'flex-start',
        fontWeight: '400',
        marginVertical: 30,
        fontSize: 18,
        marginLeft: '8%'

    },
    modalView: {
        alignSelf: 'center',
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 5,
        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').height / 3,
        marginTop: Dimensions.get('window').height / 4,
        borderColor: '#845cc3',
        borderWidth: 2,
        borderRadius: 10,
    },
    cancelBtn: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 10,
        minWidth: 10,
        alignSelf: "center",
        borderColor: '#b5b8bc',
        borderRadius: 5,
        marginHorizontal: 5

    }

});
