import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home.js'
import Login from './screens/Login.js'
import Cadastro from './screens/Cadastro.js'

import Form from './components/components-cadastro/Form1'
import Form2 from './components/components-cadastro/Form2'
import Form3 from './components/components-cadastro/Form3'
import Form4 from './components/components-cadastro/Form4'

import Favorites from './components/components-menu/component-menu-footer-navigator/Favorites'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Login" >
        <Stack.Screen name="Login" component={Login} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options = {{title: null, headerShown: false}}/>
        {/* Cadastro Navigators */}
        <Stack.Screen name="Cadastro" component={Cadastro} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Form" component={Form} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Form2" component={Form2} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Form3" component={Form3} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Form4" component={Form4} options = {{title: null, headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

