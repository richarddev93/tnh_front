import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


/* ===== ROTAS HOME ===== */
import Home from './screens/Home.js'
import Favoritos from './components/components-menu/screens/Favoritos.js'
/* ===== /// ===== */

import Login from './screens/login/Login.js'

import AuthOrApp from './screens/home/AuthOrApp.js';
import Cadastro from './screens/cadastro/Index.js'
import RecuperarSenha from './screens/recuperarSenha/Index'
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


        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="TermosDeUso" component={TermosDeUso}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

