import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default props => {
 

    return(
        <View style = {styles.container}>   
            <Icon name = {props.icon} size = {20} style={styles.icon} color = {'#AAA'}/>
            <TextInput {...props} style = {styles.input}/>
            <Icon name = {props.icon2} size = {20} style = {styles.icon2}/>
        
            {props.showIconEyepassword ? 
                <TouchableOpacity onPress = { props.handleVisibility} >
                    <Icon name = { ( props.secureTextEntry) ? 'eye' : 'eye-slash' }  size = {18} style={styles.icon} color = {'#AAA'}/>
                </TouchableOpacity>
                :null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 50,
        margin: 5,
        backgroundColor: '#eee',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize:  17,
    },
    icon:{
        color: '#AAA',
        marginLeft: 20,
        padding: 10
    },
    input: {
        marginLeft: 0,
        width: '80%',
        fontSize: 15,
    }
})