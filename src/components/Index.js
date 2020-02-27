import React,{ Component } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
// import {createDrawerNavigation} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/Login.js'
import Home from '../screens/Home'
// const MainNav = createSwitchNavigator (
//     {
//         Login:{
//             screen: Login,
//             navigationOptions:{
//                 header : null
//             }
//         },
//         Home:{
//             screen: Home,
//             navigationOptions:{
//                 headerTitle:'Home',
//             }
//         }
//     }
// )

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;