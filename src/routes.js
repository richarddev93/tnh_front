import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/login/Login.js'

import AuthOrApp from './screens/home/AuthOrApp.js';
import Cadastro from './screens/cadastro/index.js'
import RecuperarSenha from './screens/recuperarSenha/Index'
import TermosDeUso from './TermoUso'
import TabRoutes from './RoutesHome.js';
import Detail from './screens/servicos-detail/index';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="AuthOrApp" screenOptions = {{ headerShown: false  }}>
        
        <Stack.Screen name="AuthOrApp" component={AuthOrApp}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="TermosDeUso" component={TermosDeUso}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>

        <Stack.Screen name = "Home" component ={TabRoutes}/>
        <Stack.Screen name = "Detail" component ={Detail}/>
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Routes;

