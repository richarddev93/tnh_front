import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default props => {
    return(
        <View style = {styles.container}> 
            <Icon name = {props.icon} size = {20} style={styles.icon}/>
            <TextInput {...props} style = {styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        margin: 5,
        backgroundColor: '#eee',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize:  17,
    },
    icon:{
        color: '#333',
        marginLeft: 20,
    },
    input: {
        marginLeft: 20,
        width: '70%',
    }
})