import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default props => {
   
   
   
    return(
        <View style = {styles.container}> 
                
            <Icon name = {props.icon} size = {20} style={styles.icon} color = {'#AAA'}/>
            <TextInput {...props} style = {styles.input}/>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 45,
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
    },
    input: {
        marginLeft: 20,
        width: '70%',
    }
})