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


import fundo from '../../assets/imgs/fundo.jpg'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../components/Home'
import AuthInput from '../components/AuthInput'
    

import {server,showError, showSuccess} from '../common'


export default class Login extends Component{
   
    state = {
        email: '',
        password: '',
    }

    signin = async () => {
        try{
            const res = await axios.post(`${server}`,{
                email: this.state.email,
                password: this.state.password
            })

            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            this.props.nagivation.navigate('Home')
        }catch(e){
            showError(e)
        }
    }
    

    render(){
        
        return(
            <View style={styles.container}>
                
                    
                        <View style ={ styles.conteudo}>
                          
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
                           
                            <AuthInput icon='lock' editable maxLength={30} 
                                 autoCompleteType={"password"} 
                                 value = {this.state.senha}
                                 style = {styles.inputs}
                                 placeholder = {'Senha'}
                                 placeholderTextColor = {'#AAA'}
                                 secureTextEntry = {true}
                                 onChangeText = {password => this.setState({password})}
                                 keyboardType = {'default'}/>

                            <Text style = { {fontSize : 17 ,color:'#fff',marginTop: 5}}>Possui cadastro? Inscreva-se </Text>
                          
                          <View style={styles.containerButton}>
                           
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.signin} >
                                <Text style = {styles.textoButton}> Logar</Text>
                            </TouchableOpacity>
                            
                          </View>
                        <Text style={{fontSize: 18, color: '#fff', marginTop: -5, padding: 2,}}> Esqueceu sua senha ?</Text>
                        </View>

               
            </View>
        )
    }
} 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c'
    },

    conteudo: {
        flex: 2,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 160
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
        width: '95%',
        height: 45,
        backgroundColor: '#4169E1',
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
    }

})