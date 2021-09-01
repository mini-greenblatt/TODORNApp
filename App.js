import * as React from 'react';
import SignIn from './src/components/SignIn'
import Profile from './src/components/Profile'
import Tasks from './src/components/tasks/Tasks'
import HeaderTasks from './src/components/tasks/HeaderTasks'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store'

const Stack = createNativeStackNavigator();
// 
function App() {
  return (
    <>
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Sign In to NoteWordy" component={SignIn} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="HeaderTasks" component={HeaderTasks} />
          <Stack.Screen name="Tasks" component={Tasks} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
    </>
  );
}

export default App;