import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


/* ===== ROTAS HOME ===== */
import Home from './screens/Home.js'
import Favoritos from './components/components-menu/screens/Favoritos.js'
/* ===== /// ===== */

import Login from './screens/Login.js'

import Cadastro from './screens/Cadastro.js'
import AuthOrApp from './screens/home/AuthOrApp.js';
import Cadastro1 from './components/components-cadastro/Form1.js'
import TermosDeUso from './TermoUso'


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="AuthOrApp" screenOptions = {{ headerShown: false  }}>
        
        <Stack.Screen name="AuthOrApp" component={AuthOrApp}/>
        <Stack.Screen name="Login" component={Login}/>
        
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Favoritos" component={Favoritos}/>


        <Stack.Screen name="Cadastro" component={Cadastro1}/>
        <Stack.Screen name="TermosDeUso" component={TermosDeUso}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

