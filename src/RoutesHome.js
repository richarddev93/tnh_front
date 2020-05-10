import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import commonStyles from './commonStyles'
/* ===== ROTAS HOME ===== */
import Home from './screens/Home.js'
import Favoritos from './screens/Favoritos/Index'
import { color } from 'react-native-elements';
/* ===== /// ===== */

// const Tab = createMaterialBottonNavigator();
const Tab = createBottomTabNavigator()
export default function TabRoutes({navigation}) {
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
      <Tab.Screen name ="Categoria" component={Home}
      options={{
        tabBarLabel : 'Categorias',
        tabBarIcon :({ color }) => (
          <MaterialCommunityIcons name= "home" color ={color} size ={26} />
        ),
      }} /> 
      <Tab.Screen name = "Mapa" component={Favoritos} 
      options ={{
        tabBarLabel : 'Mapa',
        tabBarIcon : ({ color }) => (
          <MaterialCommunityIcons name = "map" color={color} size ={26} />
        )
      }}/>
    </Tab.Navigator>
  );
}


