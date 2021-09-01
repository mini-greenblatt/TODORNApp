import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Body,
    Left, Row, Col,
    // ListItem, Title,
    Right,
    List,
    Box,
    HStack,
    Checkbox,
    IconButton,
    Icon
} from 'native-base';
import {
    Button,
    StyleSheet,
    Switch, ListItem, Avatar, Touchable, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
        updateTask.auther=task.item.auther;
        updateTask.dateCompleted = task.item.dateCompleted;
        updateTask.title = task.item.title;
        console.log('key',key)
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
                        <Text style={styles.text}>{task.item.title}</Text>
                        <Button title='Edit' color='grey'
                            style={{ position: 'relative' }}
                        />
                        <Button title='Delete' color='red'
                            onPress={() => {
                                deleteTask()
                            }} />
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
    }

});
