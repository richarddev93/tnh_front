import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default props => {
   
   
   
    return(
        <View style = {styles.container}> 
            <TextInput {...props} style = {styles.input}/>
            <Icon name = {props.icon} size = {20} style={styles.icon} color = {'#AAA'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 70,
        margin: 20,
        backgroundColor: '#eee',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize:  17,
        padding: 10
    },
    icon:{
        color: 'tomato',
        marginRight: 5,
    },
    input: {
        marginLeft: 20,
        width: '80%',
        fontSize: 15,
    }
})