import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    Animated, 
    TextInput,
    TouchableOpacity
} from 'react-native'

import Form from '../components/components-cadastro/Form'


export default class Cadastro extends Component {
    render(){
        return(
            <Animated.View style = {styles.container}>
                <Form />
            </Animated.View>
        )
    }
}

const styles  = StyleSheet .create({
    container :{
        flex:1,
        backgroundColor: '#F8F8FF'
    },
    
})