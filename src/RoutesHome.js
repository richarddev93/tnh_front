import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import commonStyles from './commonStyles'
/* ===== ROTAS HOME ===== */
import Home from './screens/Home.js'
import Favoritos from './screens/favoritos/index'
import Categorias from './screens/categorias/index'
import ListServices from './screens/lista-servicos/'
import { color } from 'react-native-elements';
/* ===== /// ===== */

// const Tab = createMaterialBottonNavigator();
const Tab = createBottomTabNavigator()
export default function TabRoutes({navigation}) {

  console.log("Dentro do tab routes")
  return (
    <Tab.Navigator initialRouteName = "Home" 
    tabBarOptions={{
      activeTintColor: commonStyles.colors.primary,
      inactiveTintColor: commonStyles.colors.disabled,
      activeBackgroundColor: commonStyles.colors.secondary,
      inactiveBackgroundColor: commonStyles.colors.secondary
    }}>
      <Tab.Screen name ="Home" component={Home}
      options={{
        tabBarLabel : 'Home',
        tabBarIcon :({ color }) => (
          <MaterialCommunityIcons name= "home" color ={color} size ={26} />
        ),
      }} /> 
      <Tab.Screen name = "Favoritos" component={Favoritos} 
      options ={{
        tabBarLabel : 'Favoritos',
        tabBarIcon : ({ color }) => (
          <MaterialCommunityIcons name = "heart" color={color} size ={26} />
        )
      }}/>
      <Tab.Screen name ="Categoria" component={Categorias}
      options={{
        tabBarLabel : 'Categorias',
        tabBarIcon :({ color }) => (
          <MaterialCommunityIcons name= "format-list-bulleted-type" color ={color} size ={26} />
        ),
      }} /> 
      <Tab.Screen name = "Mapa" component={ListServices} 
      options ={{
        tabBarLabel : 'Mapa',
        tabBarIcon : ({ color }) => (
          <MaterialCommunityIcons name = "map" color={color} size ={26} />
        )
      }}/>
    </Tab.Navigator>
  );
}



