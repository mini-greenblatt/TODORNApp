import React, {
    useEffect,
    useState
} from 'react';
import {
    Content,
    View
} from 'native-base';
import {
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import {
    connect
} from 'react-redux';
import actions from '../../../redux/actions'
import TaskItem from './TaskItem'
// import TaskItem from '../../../item'

function TasksList(props) {
    const {
        tasks,
        getTasks
    } = props;
    const renderItem = ({ item }) => (
        <TaskItem task={item} key={item.id}></TaskItem>
    )
    // useEffect(() => {
    //     // alert('tasks',tasks)
    //     console.log(tasks,'tas')
    //     if (tasks.length <= 0) {
    //     //     debugger
    //         getTasks();
    //     //     alert('hi',tasks.length)
    //     }

    // }, [tasks])
    useEffect(() => {
        //get all groups
        if (tasks.length <= 0) {
            props.getTasks();
        }
    }, [
        props.tasks
    ])
    
    return (
        <>
            {
                tasks &&
                    tasks.length ?
                    <View>
                        <Text style={styles.txt}>You have TODO:</Text>

                        <FlatList
                            data={tasks}
                            renderItem={renderItem}
                                                    // keyExtractor={(item, index) => index.toString()}
// 
                            keyExtractor={item => item.id}
                             />
                    </View>
                    :
                    <Text style={styles.txt}>Your TODO list is empty :)</Text>
            }
        </>
    )
}
export default connect(
    (state) => {
        return {
            tasks: state.TaskReducer.tasks,
        }
    },
    (dispatch) => {
        return {
            getTasks: function () {
                dispatch(actions.getTasks())
            },
        }
    }
)(TasksList);
const styles = StyleSheet.create({
    txt: {
        marginLeft: 30,
        fontSize: 20
    }
})
