import React, {Component} from 'react'
import {View, Text, StyleSheet,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import commonStyles from '../../commonStyles'


function FavScreen() {
    return(
        <View style = {{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
            <Text>Favoritos</Text>
        </View>
    )
}

function RecenteScreen(){
    return(
        <View style = {{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
          <Text>Recentes</Text>
        </View>
    )
}

function LocationScreen(){
    return(
        <View style = {{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
           <Text>Localização</Text>
        </View>
    )
}

function ConfigScreen(){
    <View style = {{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
        <Text>Configurações</Text>
    </View>
}



const Tab = createBottomTabNavigator()

export default class Footer extends Component {
    render(){
        return(
            <NavigationContainer independent = {true}>
                <Tab.Navigator screenOptions = {({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName
                        if (route.name === 'Favoritos'){
                            iconName = focused
                            ? 'heart'
                            : 'heart'
                        } else if (route.name === 'Recentes'){
                            iconName = focused 
                            ? 'clock-o'
                            : 'clock-o'
                        } else if (route.name === 'Localização'){
                            iconName = focused
                            ? 'map-marker'
                            : 'map-marker'
                        } else if (route.name === 'Configurações'){
                            iconName = focused
                            ? 'cog'
                            : 'cog'
                        }
                        return <Icon name = {iconName} size = {size} color = {color} />
                    },
                })} 
                tabBarOption = {{
                    activeTintColor: 'tomato', inactiveTintColor:'gray'
                }}
                >
                  <Tab.Screen name = "Favoritos" component = {FavScreen} />
                  <Tab.Screen name = "Recentes" component = {RecenteScreen} />
                  <Tab.Screen name = "Localização" component = {LocationScreen} />
                  <Tab.Screen name = "Configurações" component = {ConfigScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
