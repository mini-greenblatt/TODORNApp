import { combineReducers, createStore, applyMiddleware } from 'redux';
import UserReducer from './reducers/user.reducer';
import TaskReducer from './reducers/tasks.reducer';
import {
    saveFcmToken,
    getUser
} from './applyMiddleware/crud.user';
import {
    addTask,
    getTasks,
    deleteTask,
    completeTask
    // updateTask
} from './applyMiddleware/crud.task'

const reducers =
    combineReducers({
        UserReducer,
        TaskReducer,
    })

const store = createStore(
    reducers,
    applyMiddleware(
        addTask,
        getTasks,
        deleteTask,
        completeTask,
        getUser

        // updateTask
    )
)


export default store;