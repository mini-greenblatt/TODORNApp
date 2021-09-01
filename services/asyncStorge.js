import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageDaTa {
    _storeData = async (item, itemKategory) => {
        try {
            // alert(JSON.stringify(item))
            await AsyncStorage.setItem(itemKategory, JSON.stringify(item));

            // await AsyncStorage.setItem(
            //     item
            // );
        } catch (error) {
            // Error saving data
        }
    };
    _retrieveData = async (itemKategory) => {
        try {
            // alert(itemKategory)
            const keys = await AsyncStorage.getAllKeys();
            // alert(keys)
            const value = await AsyncStorage.multiGet(keys);

            if (value !== null) {
                // We have data!!
                // alert(value.length)
                return value;
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };
    _removeItem = async (itemId, itemKategory) => {
        try {
            let itemArray = await AsyncStorage.getItem(itemKategory);
            let itemArray1 = JSON.parse(itemArray);
            let alteredArray = itemArray1.filter((item) => {
                item.id !== itemId

            });
            await AsyncStorage.setItem(itemKategory, JSON.stringify(alteredArray));
        }
        catch (error) {
            console.log(error)
        }
    };
    _addTask = async () => {

        // const listOfTasks = [...this.state.listOfTasks, this.state.text];

        await AsyncStorage.setItem('listOfTasks',
            JSON.stringify(listOfTasks));

        this._updateList()
    }

    getData = async () => {
        let tasks=[];
        AsyncStorage.getAllKeys((err, keys) => {
            if (keys.length > 0)
                AsyncStorage.multiGet(keys, (err, stores) => {
                    stores.map((result, i, store) => {
                        if (result)
                            debugger
                        // get at each store's key/value so you can work with it
                        let key = store[i][0];
                        if (key === 'task') {
                            tasks.push = result[1]
                        }
                        // tasks.push(action.payload);
                        // dispatch(actions.addNewTask(action.payload));

                    })
                })
            })
            
            return tasks;
    }

}
export default new AsyncStorageDaTa()