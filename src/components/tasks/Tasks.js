import React, {
    useState,
    useEffect
} from 'react';
import {
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Root,
    StyleSheet,
    Modal,
    Dimensions,
    View,
} from 'react-native'
import {
    Container,
    Item,
    Input
} from 'native-base';
import actions from '../../../redux/actions'
import { NativeBaseProvider } from 'native-base';
import Profile from '../Profile'
import HeaderTasks from './HeaderTasks'
import TasksList from './TasksList'
import AddTaskModal from './AddTaskModal'
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/FontAwesome';
import PlusIcon from '../../../src/assets/icons8-plus-+.svg';
import Drawer from 'react-native-drawer'

// import {
//     connect
// } from 'react-redux'

function Tasks(props) {
    // const {
    // } = props;

    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <NativeBaseProvider>
                <Profile />
                <TasksList />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isVisible}
                    onRequestClose={() => {
                        setIsVisible(false)
                    }}
                >
                    <AddTaskModal
                        setIsVisible={setIsVisible}
                        isVisible={isVisible}
                    />
                </Modal>
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => {
                        setIsVisible(true)
                    }}
                 >
                {/* <PlusIcon></PlusIcon> */}
                    {/* <Icon name="rocket" size={30} color="#900" /> */}

                </TouchableOpacity>
            </NativeBaseProvider>
        </>
    )
}
export default Tasks;
// (
//     (state) => {
//         return {
//         }
//     },
//     (dispatch) => {
//         return {
//             resetRedux: function () {
//                 dispatch(actions.reset())
//             },


//         }
//     }
// )(Tasks);
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
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').height / 2,
        alignContent: 'center',
        borderTopColor: 'pink',
        borderTopWidth: 10,

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
    plusButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 100
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
