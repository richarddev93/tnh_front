import React, {Component} from 'react'
import {Text, 
        View,
        } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import styles from '../styles/stylesFav'

export default class Favoritos extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Favoritos</Text>
            </View>
        )
    }
}