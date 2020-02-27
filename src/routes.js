import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home.js'
import Login from './screens/Login.js'
import Cadastro from './screens/Cadastro.js'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Login" >
        <Stack.Screen name="Login" component={Login} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options = {{title: null, headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

