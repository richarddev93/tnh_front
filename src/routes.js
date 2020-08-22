import React,{useState,useEffect}from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import api  from '../src/services/api'
import Login from './screens/login/'

import AuthOrApp from './screens/home/AuthOrApp.js';
import Cadastro from './screens/cadastro/index.js'
import RecuperarSenha from './screens/recuperarSenha/Index'
import TermosDeUso from './TermoUso'
import TabRoutes from './RoutesHome.js';
import Detail from './screens/servicos-detail/index';
import ListServices from './screens/lista-servicos/'


import RootStackScreen from './RootStackScreen';
import { View } from 'react-native-animatable'; 
import { ActivityIndicator } from 'react-native-paper';
import { AsyncStorage } from 'react-native';

const Stack = createStackNavigator();

function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
   

  const  _retrieveData = async () => {
    let tokenUser = null
     try {
       let value = await AsyncStorage.getItem('dados_usuario');
       if (value !== null) {
           
           tokenUser = JSON.parse(value)
          //  console.log('value',tokenUser.token)
         setUserToken(tokenUser.token)
         api.defaults.headers.common['Authorization'] = `Token ${tokenUser.token}`
       }

       return tokenUser;

     } catch (error) {
       console.log("34 - _retrieveData() - routes",error)
     }
   }
    
  useEffect(   ()=> {
    _retrieveData();
    setTimeout( ()=>{
      setIsLoading(false);
    },1000);

  }, []);

   
  if (isLoading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#F9AA33"/>
      </View>
    )
  }else {
    
    return (
      <NavigationContainer >
        
          {/* <RootStackScreen /> */}
          <Stack.Navigator initialRouteName ={ userToken == null ? "RootStackScreen" : "Home" } screenOptions = {{ headerShown: false  }}>
          <Stack.Screen name = "RootStackScreen"  component ={RootStackScreen}/>
          <Stack.Screen name = "Home" component ={TabRoutes}/>
          <Stack.Screen name = "Detail" component ={Detail}/>               
          <Stack.Screen name = "ListServices" component ={ListServices}/>               
        </Stack.Navigator>
      
     </NavigationContainer>
   );
  }
}

export default Routes;

