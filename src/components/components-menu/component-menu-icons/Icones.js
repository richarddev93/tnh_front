import React,{Component} from 'react'
import {View, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'



export default props => {
    return(
        <View style = {styles.container}>
            <Icon name = {props.icon} size = {20} color = {'#FFF'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        margin: 15,
        backgroundColor: 'tomato',
    }
})