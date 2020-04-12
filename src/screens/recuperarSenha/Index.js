
import React, {Component} from 'react'
import {View, 
        Text,
        TouchableOpacity,
        KeyboardAvoidingView,
        Alert,
        AsyncStorage
    } from 'react-native'
import Toast from 'react-native-root-toast';
import { TextInput} from 'react-native-paper';
import styles from './styles'
import * as Permissions from 'expo-permissions';
import { TagSelect } from 'react-native-tag-select-max';
import { CheckBox } from 'react-native-elements'
import {Feather} from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay';
import { ScrollView } from 'react-native-gesture-handler';

import ValidaForm from  '../../validateForm'
import buscarEnd  from '../../services/api-other'
import api from '../../services/api'
import {showError,teste} from '../../common'

let initialState = null
if (teste) {
     initialState = {
        email        : '',
        isloading:false,
        formValid: false,
        isloading:false

    }
} else {
     initialState = {
        email        : '',
        isSuccess:false,
        formValid: false,
        isloading:false
    }
}
 export default class Form extends Component{

    state = {
        ...initialState
    }

    navigateToBack =() =>{
        this.props.navigation.goBack()
    }
    componentDidMount(){
    }
    validateForm = (form) =>{
        //form 1
        let email = this.state.email
                if (email == '' || !ValidaForm(email,'EMAIL')) {
                    console.log('email',email)
                    Alert.alert('Atenção','Digite um email Válido !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }
        //chama o signup
       return true

    }
    //Função de cadastro
    recuperarSenha = async () => {
        let json,json2
        let status,status2
        console.log("EMAIL",this.state.email)
        this.setState({
            isloading : true
        })
               
            try {
                console.log("TRYs")
                const response = await api.post('rest-auth/password/reset/',
                    {                 
                        email : this.state.email,
                    },
                    {
                        headers: { 
                            'Content-Type': 'application/json',
                        }
                    }
                 
                )
                console.log('response email',response)

                status = response.status
                                
            } catch (error) {
                this.setState({
                    isloading:false,
                });
                console.log("EROOOUUUUU")
                if (error.response.data.email ) {
                    console.log("Erro de email",JSON.stringify(error.response.data.email[0]))
                    showError(JSON.stringify(error.response.data.email[0]))
                } else {
                    showError("Erro ao enviar! Tente novamente mais tarde.")
                }
                console.log("ERRO GERAL 1",error.response)
                console.log("Erro Cadastro",error.response.data)
            
                return
            }

            this.setState({
                isloading:false,
                isSuccess : true
            });
            console.log("STATUS",status)
            if (status == 200 ) {
               console.log("Enviado com Sucesso") 
                Toast.show('Enviado com Sucesso', {
                duration: Toast.durations.LONG,
                position: -100,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                backgroundColor:'#49E046',
                textColor: '#fff',
                opacity : 0.6
            });
            //    this.navigateToBack()
            }
        
    }
        
    
    

    render(){
        return( 
            <View style = {styles.container}>
                <Spinner
                    //visibility of Overlay Loading Spinner
                    visible={this.state.isloading}
                    //Text with the Spinner 
                    textContent={'Carregando...'}
                    size = {'large'}
                    animation = {'fade'}
                    //Text style of the Spinner Text
                    textStyle={styles.spinnerTextStyle}
                />
                <KeyboardAvoidingView   behavior="padding" enabled> 
                    <View style = {styles.headerStyle}>                    
                        <View >
                            <TouchableOpacity onPress={this.navigateToBack}>
                                <Feather name= 'arrow-left' size = {28} color='#F9AA33'></Feather>
                            </TouchableOpacity>                      
                        </View>
                        <View style = {styles.containerTitle}>
                                <Text style = {styles.title}>Recuperar Senha</Text>
                                {/* <Text style = {styles.subTitle}>{this.state.subTitleForm}</Text> */}
                        </View>
                        <View style ={{width:28}}/>
                    </View>
                    <View style = {styles.containerForm}>
                        <TextInput style = {styles.input}
                            autoCompleteType = 'email'
                            value = {this.state.email}
                            label = 'E-mail'
                            placeholder = {'Ex.: Aninha94@email.com'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined'
                            onChangeText = {email => this.setState({email})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'email-address'} 
                            disabled={this.state.isSuccess}
                            />

                            <TouchableOpacity disabled ={this.state.isSuccess} style = {styles.button}
                                onPress = {
                                this.recuperarSenha
                                }>
                                <Text style = {styles.buttonText}> Enviar </Text>
                            </TouchableOpacity>  

                            { this.state.isSuccess ? <Text style = {styles.title}>Redefinição de Senha foi enviada para seu e-mail ! </Text>  : null  }    
                    </View>
                </KeyboardAvoidingView>
            </View>
        
        )
    }
}

