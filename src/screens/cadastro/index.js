import React, {Component} from 'react'
import {View, 
        Text,
        TouchableOpacity,
        Dimensions,
        KeyboardAvoidingView
    } from 'react-native'
import { TextInput } from 'react-native-paper';
import styles from './styles'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

 export default class Form extends Component{
    
    

   state = {
        id : 0,
        nome: '',
        senha: '',
        confirmSenha: '',
        email: '',
        user: '',
    }

    navigateToHome = () => {
        this.props.navigation.navigate('Form2')
    }

    render(){
        return(

            
            <View style = {styles.container}>
                 <KeyboardAvoidingView  behavior="padding" enabled>
                 <View style = {styles.containerTitle}>
                    <Text style = {styles.title}>Vamos começar?</Text>
                    <Text style = {styles.subTitle}>Dados cadastrais</Text>
                </View>

                 </KeyboardAvoidingView>
                 <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button}
                        onPress = {
                          this.navigateToHome
                        }>
                        <Text style = {styles.buttonText}> Próximo </Text>
                    </TouchableOpacity>                
                 </View>
            </View>
        )
    }
}

