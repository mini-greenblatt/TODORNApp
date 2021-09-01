import actions from '../actions';
// import ShowToast from '../../services/toast.service';
// import { getStateGeneric } from '../../services/user.service';
// import keys from '../../config/keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageFunctions from '../../services/asyncStorge'
export const addTask = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_TASK') {
        var tasks = []
        //  AsyncStorageFunctions.getData()
        debugger
        AsyncStorage.getAllKeys((err, keys) => {
            if (keys.length > 0)
                AsyncStorage.multiGet(keys, (err, stores) => {
                    stores.map((result, i, store) => {
                        debugger
                        // get at each store's key/value so you can work with it
                        let key = store[i][0];
                        if (key === 'task' && result[1] != '[]') {
                            tasks.push = result[1]
                        }
                        tasks.push(action.payload);
                        dispatch(actions.addNewTask(action.payload));

                    })
                })
            else {
                debugger

                tasks.push(action.payload);
                dispatch(actions.addNewTask(action.payload));
            }

        });
    }
    return next(action);
}

export const getTasks = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_TASKS') {
        let tasks = []
        // AsyncStorage.clear()
        AsyncStorage.getAllKeys((err, keys) => {
            if (keys.length > 0) {
                AsyncStorage.multiGet(keys, (err, stores) => {
                    stores.map((result, i, store) => {
                        if (result[1] != '[]') {
                            // get at each store's key/value so you can work with it
                            let key = store[i][0];
                            if (key === 'task' && result[1] != '[]') {
                                tasks.push = result[1]
                            }
                        }
                    })
                    if (tasks.length > 0)
                        dispatch(actions.setTasks(tasks))
                })
            }
        });
    }
    return next(action);
}

export const deleteTask = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_TASK') {
        debugger
        AsyncStorage.setItem('task', action.payload).then((res)=>{
            AsyncStorage.getItem("task").then((value) => {
                alert(JSON.stringify(value)); // you will need use the alert in here because this is the point in the execution which you receive the value from getItem.
              // you could do your authentication and routing logic here but I suggest that you place them in another function and just pass the function as seen in the example below.
          });
        });

       
        // debugger
        // let task = action.payload.item;
        // let id = action.payload.key;
        // AsyncStorage.getAllKeys((err, keys) => {
        //     if (keys.length > 0) {
        //         AsyncStorage.multiGet(keys, (err, stores) => {
        //             stores.map((result, i, store) => {
        //                 if (result[1] != '[]') {
        //                     // get at each store's key/value so you can work with it
        //                     let key = store[i][0];
        //                     if (key === 'task' && result[1] != '[]') {
        //                         debugger
        //                         if (!(result[1].auther === action.payload.auther && result[1].dateCompleted === action.dateCompleted))
        //                             tasks.pop = result[1]
        //                     }
        //                 }
        //             })
        //             // dispatch(actions.setTasks(tasks))
        //         })
        //     }
        // });

    }
    return next(action)
}

export const completeTask = ({ dispatch, getState }) => next => action => {
    if (action.type === 'COMPLETE_TASK') {
        var tasks = []
        // AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet('task', (err, stores) => {
            stores.map((result, i, store) => {
                debugger
                // get at each store's key/value so you can work with it
                let key = store[i][0];
                console.log('k', key)
                let value = store[i][1];
                debugger
                if (key === 'task') {
                    console.log(store[i][1])
                    tasks.concat = JSON.stringify(store[i][1])
                }
                console.log('v', value)
                console.log(result)
                tasks.pop(action.payload)
                dispatch(actions.removeTask(action.payload))

            });
        });
        var tasksCompleted = []

        AsyncStorage.multiGet('taskComplete', (err, stores) => {
            stores.map((result, i, store) => {
                debugger
                // get at each store's key/value so you can work with it
                let key = store[i][0];
                console.log('k', key)
                let value = store[i][1];
                debugger
                if (key === 'taskComplete') {
                    console.log(store[i][1])
                    tasksCompleted.concat = JSON.stringify(store[i][1])
                }
                console.log('v', value)
                console.log(result)
                tasksCompleted.push(action.payload)
                dispatch(actions.addTaskCompleted(action.payload))

            });
        });

    }
    return next(action)
}