import React, {Component, useState, useEffect } from 'react'
import {View,
        Text,
        ImageBackground,
        StyleSheet,
        TextInput,
        Button,
        Alert,
        TouchableOpacity,
        } from 'react-native'

import axios from 'axios'
import * as Font from 'expo-font'

import fundo from '../../assets/imgs/background/fundoDefinitivo.jpg'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import AuthInput from '../components/components-login/AuthInput'
import commonStyles from '../commonStyles'
    

import {server,showError, showSuccess} from '../common'


export default class Login extends Component{
   

    hideOrShowPassword = () =>{
        if(escondeSenha == true){
            escondeSenha = false;
        }else{
            escondeSenha = true;
        }
    }
    
    state = {
        email: '',
        password: '',
        autenticado: false,
        escondeSenha : true
    }
    
    navigateToHome = () => {
        this.props.navigation.navigate('Home')
    }

    navigateToCadastro = () => {
        this.props.navigation.navigate('Cadastro')
    }

   erro =(code) =>{
        if (code==400 ) {
            Alert.alert("erro no email ou senha")
            return true
        }else {
            Alert.alert("Erro desconhecido")
            return true
        }
        

    }

    signin = async () => {
        try{
            const res = await axios.post(`${server}`,{
                email: this.state.email,
                password: this.state.password
            })
            
            console.log(res)
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            if (res.status == '200'){
                this.navigateToHome()
                
            }else{
                Alert.alert("Falha")
            }
            
            
        }catch(e){
            console.log(e)
            showError(e)
            //this.props.navigation.navigate('Home')
        }
    }
    

    render(){
        
        return(
            <View style = {styles.container}>
                
                <ImageBackground source = {fundo}
                       style = {styles.background}>
                        
                         <View style = {styles.containerTitle}>
                           
                             <Text style = {styles.title1}>Bem vindo de volta</Text>
                             <Text style = {styles.title2}>Tem no Helipa</Text>
                        
                        </View> 
                        
                        <View style ={styles.conteudo}>
                            <Text style={styles.subTitle}>Login</Text>
                            <AuthInput 
                                 icon = 'user'
                                 editable maxLength={60} 
                                 autoCompleteType={"username"} 
                                 value = {this.state.email}
                                 style = {styles.inputs}
                                 placeholder = {'Usuário'}
                                 placeholderTextColor = {'#AAA'}
                                 onChangeText = {email => this.setState({email})}
                                 autoCorrect = {false}
                                 
                                 />
                           
                            <AuthInput icon='eye' editable maxLength={30} 
                                 autoCompleteType={"password"} 
                                 value = {this.state.senha}
                                 style = {styles.inputs}
                                 placeholder = {'Senha'}
                                 placeholderTextColor = {'#AAA'}
                                 secureTextEntry = {this.state.escondeSenha}
                                 onChangeText = {password => this.setState({password})}
                                 onPress = {this.hideOrShowPassword}
                                 keyboardType = {'default'}/>
                          
                          
                          <View style={styles.containerButton}>
                           
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.signin} >
                                <Text style = {styles.textoButton}> Logar</Text>
                            </TouchableOpacity>
                            
                          </View>
                            <TouchableOpacity onPress = {this.navigateToCadastro}><Text style={{fontSize: 18, color: '#000', marginTop: -5, padding: 2,}}> 
                             Esqueceu sua senha ?
                            </Text></TouchableOpacity>
                        
                        

                        </View>

                    <TouchableOpacity onPress = {this.navigateToHome}>
                            <Text style = { 
                                {fontSize : 15
                                ,color:'#000'
                                ,marginBottom: 10
                                ,alignItems: 'flex-end'
                                ,justifyContent: 'center'
                                }}>Possui cadastro? Inscreva-se </Text></TouchableOpacity>

                </ImageBackground>     
        
            </View>
        )
    }
} 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },

    background:{
        flex:1,
        alignItems: 'center'
    
    },

    conteudo: {
        flex: 2,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: -230
    },

    inputs:{
        width: '90%',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#555',  
        margin: 15,
        padding: 10,
        fontSize:  17,
        backgroundColor: '#fff'
        
    },

    containerButton:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20 
        },

    button: {
        width: 320,
        height: 45,
        backgroundColor: commonStyles.colors.secondary,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 5,

    },
    textoButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff',
    },

    logo: {
        width: 100,
        height: 100,
    },

    subTitle:{
        fontSize: 45,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: -220,
        padding: 0,
    },
    
    title1: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'  
    },

    title2: {
        fontSize: 45,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    },

    containerTitle:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -170

    },

})