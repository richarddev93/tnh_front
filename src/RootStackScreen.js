import React from 'react'
import {createStackNavigator }from '@react-navigation/stack';

// importando telas iniciais
import SplashScreen from './screens/splashScreen';
import Login from  './screens/login';
import Cadastro from './screens/cadastro';
import RecuperarSenha from './screens/recuperarSenha/Index'
import TermosDeUso from './TermoUso'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator  headerMode= 'none'>
        <RootStack.Screen name= "SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name= "Login" component={Login}/>
        <RootStack.Screen name= "Cadastro" component={Cadastro}/>
        <RootStack.Screen name="TermosDeUso" component={TermosDeUso}/>
        <RootStack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
