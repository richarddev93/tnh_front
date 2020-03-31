import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home.js'
import Login from './screens/Login.js'
import Cadastro from './screens/Cadastro.js'
import AuthOrApp from './screens/home/AuthOrApp.js';
import Cadastro1 from './components/components-cadastro/Form1.js'
import TermosDeUso from './TermoUso'

import Form from './components/components-cadastro/Form1'
import Form2 from './components/components-cadastro/Form2'
import Form3 from './components/components-cadastro/Form3'
import Form4 from './components/components-cadastro/Form4'

import Favorites from './components/components-menu/component-menu-footer-navigator/Favorites'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="AuthOrApp" >
        <Stack.Screen name="AuthOrApp" component={AuthOrApp} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro1} options = {{title: null, headerShown: false}}/>
        <Stack.Screen name="TermosDeUso" component={TermosDeUso} options = {{title: null, headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

