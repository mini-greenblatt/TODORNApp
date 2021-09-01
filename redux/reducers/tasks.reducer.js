import produce from 'immer';
import createReducer from './reducerUtils';


const initialState = {
    tasks: [],
    tasksCompleted:[]
}

const tasks = {
    reset(state = initialState, action) {
        // alert('reset')
        Object.keys(initialState).forEach((key) => {
            state[key] = initialState[key];
        })
    },
    setTasks(state, action) {
        console.log('settaslk')
        // let tasksTemp = [];
        // action.payload.forEach(task => {
        //     let taskTemp = { ...task };
        //     // groupTemp.initials = groupTemp.groupName ?groupTemp.groupName[0].toUpperCase():'UN';
        //     // groupTemp.email=groupTemp.groupName;
        //     // groupTemp.name=groupTemp.groupName;
        //     taskTemp.push(groupTemp);
        // });
        // console.log('gggg---',groupsTemp)
        // state.tasks = action.payload;
        let tasksTemp = [];

        state.tasks.forEach(task => {
            let t = task;
            tasksTemp.push(t);
        });
        state.tasks = tasksTemp;

    },
    addTaskCompleted(state,action){
        let tasksTemp = [];
        let tasks = [];
        //push new item
        tasksTemp.push(action.payload)
        //generate key
        let array = Array(tasksTemp.length)
            .fill('')
            .map((_, i) => ({ key: `${i}`, item: tasksTemp[i] }))

        //push old items
        state.tasksCompleted.forEach(task => {
            let t = task;
            tasks.push(t);
        });
        array.forEach(t => {
            let t1 = t;
            tasks.push(t1)
        })
        state.tasksCompleted = tasks;
    },
    addNewTask(state, action) {
        let tasksTemp = [];
        let tasks = [];
        //push new item
        tasksTemp.push(action.payload)
        //generate key
        let array = Array(tasksTemp.length)
            .fill('')
            .map((_, i) => ({ key: `${i}`, item: tasksTemp[i] }))

        //push old items
        state.tasks.forEach(task => {
            let t = task;
            tasks.push(t);
        });
        array.forEach(t => {
            let t1 = t;
            tasks.push(t1)
        })
        state.tasks = tasks;
    },
    removeTask(state, action) {
        let taskTemp = [...state.tasks];
        let newArrTask = [];
        debugger

        taskTemp.forEach(t => {
            // let editConversation = editConversationT.item;
            t.forEach(task => {
                if (task.id != t.id) {
                    newArrTask.push(t);
                }
            });
        });
        state.conversations = newArrConversations;
        debugger
        state.tasks = state.tasks.filter(t => t.id !== action.payload)
    },

}

export default produce((state, action) =>
    createReducer(state, action, tasks), initialState);