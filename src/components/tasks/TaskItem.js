import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Row,
} from 'native-base';
import {
    StyleSheet,
    Switch,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import actions from '../../../redux/actions';

function TaskItem(props) {

    const {
        task,
        onPress,
        key
    } = props;
    useEffect(() => {
        console.log(key, 'key')
    }, [])
    const [isCompleted, setIsCompleted] = useState(task.completed)
    const toggleSwitch = () => {
        setIsCompleted(!isCompleted)
        let updateTask = { ...task };
        updateTask.completed = !task.completed;
        props.completeTask(updateTask)
    }
    const deleteTask = () => {
        let updateTask = {};
        debugger
        updateTask.completed = task.item.completed;
        updateTask.auther = task.item.auther;
        updateTask.dateCompleted = task.item.dateCompleted;
        updateTask.title = task.item.title;
        console.log('key', key)
        updateTask.id = key;
        console.log('updatetask', updateTask)
        props.deleteTask(updateTask)
    }

    return (
        <>

            <TouchableOpacity
                style={styles.row}
                key={key}>
                <View >
                    <Row
                        style={{ alignItems: 'center' }}                    >
                        <Text style={styles.text} >{task.item.title}</Text>
                        <TouchableOpacity style={
                            [styles.buttons],
                            {
                                position: 'absolute',
                                right: 60
                            }}>

                            <Text style={{ color: 'red' }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                deleteTask()
                            }}
                            style={
                                [styles.buttons],
                                {
                                    position: 'absolute',
                                    right: 100
                                }}>
                            <Text style={{ color: '#47316a' }}>Delete</Text>
                        </TouchableOpacity>

                        <Switch
                            trackColor={{ false: '#3e3e3e', true: '#8978a4eb' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => { toggleSwitch(task.item.completed) }}
                            value={isCompleted}
                            style={{ position: 'absolute', right: 10 }}
                        />
                    </Row>
                </View>
            </TouchableOpacity>
            <View style={styles.divider} />
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
            completeTask: function (task) {
                dispatch(actions.completeTask(task))
            },
            deleteTask: function (task) {
                dispatch(actions.deleteTask(task))
            }


        }
    }
)(TaskItem);

const styles = StyleSheet.create({
    divider: {
        borderBottomColor: '#47316a',
        borderBottomWidth: 0.8
    },
    row: {
        backgroundColor: '#e9e9eb',
        marginTop: 1,
        height: 80,
        justifyContent: 'center',
        paddingStart: 20,
        flex: 1
    },
    text: {
        color: '#47316a',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    buttons: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 2,
    }

});
