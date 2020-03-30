import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    Animated, 
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

import Form from '../components/components-cadastro/Form2'

import commonStyles from '../commonStyles'

let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height




export default class Cadastro extends Component {

    
    render(){
        return(
            <Animated.View style = {styles.container}>
              <Form/>
            </Animated.View>
        )
    }
}

const styles  = StyleSheet .create({
    container :{
        flex:1,
        backgroundColor: '#F1E9E9',
        alignItems: 'center',
        justifyContent: 'center',
        width: ScreenWidth,
    },
    containerButton: {
        width: ScreenWidth,
        flexDirection:'row',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    containerProx:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    button:{
        height: 40,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginTop: -30
    },
    buttonVolt:{
        height: 40,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-10,
        padding: 10,
        marginHorizontal: 100
    },
    buttonProx:{
        height: 40,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-10,
        padding: 10,
        marginRight: -30
    },
    buttonText:{
        fontSize: 15,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
})