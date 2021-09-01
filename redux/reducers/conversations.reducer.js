import produce, { current } from 'immer';
import createReducer from './reducerUtils';
// import { cloneDeep, keyBy } from 'lodash';
import { ActivityIndicator } from 'react-native';
// import StylesFunction from '../../components/allConversation/Styles';

const initialState = {
    conversations: {},
    allConversations: {},

    Inbox: {},
    Sent: {},
    UnReaded: {},
    Starred: {},
    FollowUp: {},
    Archived: {},
    Trash: {},
    Spam: {},
    All: {},
    systemWaves: {},
    Trash: {},

    logOut: false,
    sendMessage: false,
    openWaves: false,

    selectedConversation: {},

    unreadedInbox: 0,
    txtSearch: '',
    displayConversations: {},
    searchConversations: {},
    flagSearchConversations: false,
    indexViewStart: 0,
    checkedConversations: {},
    // flagGOBackFromEditConversations: false
}

const conversation = {
    reset(state = initialState, action) {
        Object.keys(initialState).forEach((key) => {
            state[key] = initialState[key];
        })
    },
    setFlagSearchConversations(state, action) {
        state.searchConversations = state[state.view];
        state.flagSearchConversations = action.payload;
    },
    setCheckedConversations(state, action) {
        debugger
        if (!action.payload)
            state.checkedConversations = {};
        else {
            let newObj = { ...state.checkedConversations };
            let item = state.checkedConversations[action.payload._id]
            if (item && item != undefined)
                delete newObj[action.payload._id]
            else
                Object.assign(newObj, { [action.payload._id]: action.payload })
            state.checkedConversations = newObj
        }
    },
    deleteConversations(state, action) {
        let editConversations = cloneDeep(state.conversations);
        let editedConversations = cloneDeep(action.payload.conversations);
        let newArrConversations = [];

        editConversations.forEach(editConversationT => {
            let editConversation = editConversationT.item;
            editedConversations.forEach(editedConversation => {
                if (editConversation._id != editedConversation && !newArrConversations.includes(editConversation)) {
                    newArrConversations.push(editConversationT);
                }
            });
        });
        state.conversations = newArrConversations;
    },

    //פונקציה שגויה!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // editConversations(state, action) {
    //     let editConversation = cloneDeep(state.conversations);
    //     let editedConversations = cloneDeep(action.payload.conversations);
    //     let index;
    //     debugger
    //     for (let indexI = 0; indexI < editConversation.length; indexI++) {
    //         if (!editedConversations.length) break;
    //         editedConversations.forEach((obj, i) => {
    //             if (index != undefined && index != null) return;
    //             else if (obj._id === editConversation[indexI].item._id)
    //                 index = indexI;
    //         })

    //         if (index >= 0) {
    //             action.payload.key == 'trash' ?
    //                 editConversation[indexI].item.trash.bool = true :
    //                 editConversation[indexI].item[action.payload.key] = true;
    //             editedConversations.splice(index, 1);
    //             index = null;
    //         }
    //     }
    //     state.conversations = editConversation;

    // },

    editConversations(state, action) {
        let conversations = [];
        let bool = false;
        state.conversations.forEach(item1 => {
            action.payload.conversations.forEach(item2 => {
                if (item1.item._id === item2._id) {
                    bool = true
                    let conversationTemp = item1
                    action.payload.key == 'trash' ?
                        conversationTemp.item.trash.bool = true :
                        conversationTemp.item[action.payload.key] = true
                    conversations.push(conversationTemp)
                    return
                }
            })
            if (!bool)
                conversations.push(item1)
            bool = false
        })
        state.conversations = conversations
    },
    // setFlagGOBackFromEditConversations(state, action) {
    //     state.flagGOBackFromEditConversations = action.payload
    // },
    setIndexDispaly(state, action) {
        state.indexViewStart = 0;
    },

    display(state, action) {
        if (action.payload.newView)
            state.indexViewStart = 0

        let conversationsTemp = [];
        let conversationsView = { ...state[action.payload.view] };

        if (action.payload.scroll === 'top') {
            for (let i = state.indexViewStart; i > state.indexViewStart - 5; i--)
                if (conversationsView[i] === undefined)
                    break;
                else
                    conversationsTemp.push(conversationsView[i])
            state.indexViewStart = state.indexViewStart - 5;

        }

        else if (action.payload.scroll === 'bottom') {
            for (let i = state.indexViewStart; i < state.indexViewStart + 5; i++)
                if (conversationsView[i] === undefined)
                    break;
                else
                    conversationsTemp.push(conversationsView[i])
            state.indexViewStart = state.indexViewStart + 5;
        }
        state.displayConversations = conversationsTemp;

    },

    setDisplayConversations(state, action) {
        let obj = [];
        let conversationsView = { ...state[action.payload.view] };
        if (conversationsView)
            for (let i = 0; i < action.payload.index + 10; i++) {
                if (conversationsView[i] === undefined)
                    break;

                obj.push(conversationsView[i]);
            }
        state.displayConversations = obj;
    },

    setInboxUnreaded(state, action) {
        state.unreadedInbox = action.payload;
    },
    setAll(state, action) {
        state.All = action.payload;
    },
    setSearchConversations(state, action) {
        let obj = [];
        let j = 0;
        let length = 0;
        if (action.payload.scroll)
            length = action.payload.index + 10;
        else length = 10;
        let conversationsView = { ...state[action.payload.view] };
        if (conversationsView)
            for (let i = 0; j < length; i++) {
                if (conversationsView[i] === undefined)
                    break;

                if (StylesFunction.searchConversations(state.txtSearch, conversationsView[i])) {
                    obj.push(conversationsView[i]);
                    j++;
                }
            }
        state.searchConversations = obj;
    },

    setTxtSearch(state, action) {
        state.txtSearch = action.payload;
    },

    setOpenWaves(state, action) {
        state.openWaves = action.payload;
    },
    addNewWave(state, action) {
        let conversationsTemp = [];
        state.conversations.forEach(conversationT => {
            let conversation = conversationT.item;
            if (conversation._id === state.selectedConversation._id) {
                let wavesTemp = [];
                conversation.waves.forEach(wave => {
                    wavesTemp.push(wave)
                });
                wavesTemp.push(action.payload)

                let wavesUpdate = { ...conversation };

                wavesUpdate.waves = wavesTemp;
                conversationT.item = wavesUpdate;
                conversationsTemp.push(conversationT);
            }
            else conversationsTemp.push(conversationT);
        });

        state.conversations = conversationsTemp;
    },

    addNewConversation(state, action) {
        let conversationsTemp = [];

        //push new item
        conversationsTemp.push(action.payload)

        //push old items
        state.conversations.forEach(conversationT => {
            let conversation = conversationT.item;
            conversationsTemp.push(conversation);
        });

        //generate key
        array = Array(conversationsTemp.length)
            .fill('')
            .map((_, i) => ({ key: `${i}`, item: conversationsTemp[i] }))


        state.conversations = array;
    },
    setSelectedConversation(state, action) {
        state.selectedConversation = action.payload
    },

    setLogOut(state, action) {
        state.logOut = action.payload
    },

    setSystemWaves(state, action) {
        if (action.payload && action.payload.length) {
            let allConversationsTemp = [];
            let conversationsTemp = cloneDeep(action.payload)
            conversationsTemp.forEach((conversation, index) => {
                let wave = { body: conversation.body, timestamp: conversation.timestamp, from: conversation.from, files: conversation.files }
                conversation.waves = [];
                conversation.waves.push(wave);
                if (index < 10)

                    allConversationsTemp.push(conversation)
            });

            //sort by date
            allConversationsTemp.sort(function compare(a, b) {

                if (a.waves.length && a.waves[0].timestamp && b.waves.length && b.waves[0].timestamp) {
                    var dateA = new Date(a.waves[0].timestamp);
                    var dateB = new Date(b.waves[0].timestamp);
                    return dateB - dateA;
                }
                else return -1;
            });

            if (allConversationsTemp.length)
                array = Array(allConversationsTemp.length)
                    .fill('')
                    .map((_, i) => ({ key: `${i}`, item: allConversationsTemp[i] }))


            state.systemWaves = array;
        }
        else
            state.systemWaves = action.payload;
    },
    setSendMessage(state, action) {
        state.sendMessage = action.payload
    },
    filterConversations(state, action) {
        let conversationsTemp = [];

        state.allConversations.forEach((conversation, i) => {
            console.log(current(conversation))
            if (conversationsTemp.length < 10)
                if (StylesFunction.searchConversations(action.payload, conversation.item))
                    conversationsTemp.push(conversation)
                else
                    return;
        });

        state.searchConversations = conversationsTemp;

    },
    setConversations(state, action) {
        let conversationsTempGet = cloneDeep(action.payload);

        if (action.payload && action.payload.length) {
            conversationsTempGet.sort(function compare(a, b) {

                if (a.waves.length && a.waves[0].timestamp && b.waves.length && b.waves[0].timestamp) {
                    var dateA = new Date(a.waves[0].timestamp);
                    var dateB = new Date(b.waves[0].timestamp);
                    return dateB - dateA;
                }
                else return -1;
            });

            let conversationsWithOutError = [];
            conversationsTempGet.forEach((element, i) => {
                if (i >= 0 && i < 10)
                    if (element && element.waves.length > 0) {
                        conversationsWithOutError.push(element)
                    }
            });
            let array;
            if (conversationsWithOutError.length)
                array = Array(conversationsWithOutError.length)
                    .fill('')
                    .map((_, i) => ({ key: `${i}`, item: conversationsWithOutError[i] }))

            state.conversations = array;
            state.allConversations = array;
        }
        else
            state.conversations = [{ message: 'noConversation', key: "2", key: 2 }];
    },

    deleteConversationById(state, action) {
        let conversationsTemp = [];
        state.conversations.forEach(conversationT => {
            let conversation = conversationT.item;
            if (conversation._id != action.payload) {
                conversationsTemp.push(conversationT);
            }
        });
        state.conversations = conversationsTemp;
    },
    editOneConversation(state, action) {
        let conversationsTemp = [];
        state.conversations.forEach(conversationT => {
            let conversation = { ...conversationT }
            conversation = conversation.item;
            if (conversation._id != action.payload.conversation._id) {
                conversationsTemp.push(conversationT);
            }
            else {
                let conversationToUpdate = { ...conversation }
                conversationToUpdate[action.payload.type] = action.payload.editTrueOrFalse
                let conversationToUpdateItem = { ...conversationT }
                conversationToUpdateItem.item = conversationToUpdate;
                conversationsTemp.push(conversationToUpdateItem);
            }
        });
        state.conversations = conversationsTemp;
    },

    setInbox(state, action) {
        state.Inbox = action.payload
    },
    setTrash(state, action) {
        state.Trash = action.payload
    },
    setSent(state, action) {
        state.Sent = action.payload
    },
    setStarred(state, action) {
        state.Starred = action.payload
    },
    setUnReaded(state, action) {
        state.UnReaded = action.payload
    },
    setArchived(state, action) {
        state.Archived = action.payload
    },
    setTrash(state, action) {
        state.Trash = action.payload
    },
    setFollowUp(state, action) {
        state.FollowUp = action.payload
    },
    setSpam(state, action) {
        state.Spam = action.payload
    }

}

export default produce((state, action) =>
    createReducer(state, action, conversation), initialState);