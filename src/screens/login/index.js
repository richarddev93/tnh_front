import React, {Component, useState, useEffect } from 'react'
import {View,
        Text,
        ImageBackground,
        Button,
        Alert,
        TouchableOpacity,
        KeyboardAvoidingView,
        AsyncStorage,
        Image
        } from 'react-native'
import { TextInput} from 'react-native-paper';
import axios from 'axios';
import api from '../../services/api'
import fundo from '../../../assets/imgs/background/fundoDefinitivo.jpg'
import logo from '../../../assets/logo.png'
import commonStyles from '../../commonStyles'
import Spinner from 'react-native-loading-spinner-overlay';
import { CheckBox } from 'react-native-elements'
import {Feather} from '@expo/vector-icons'
import {server,showError, showSuccess} from '../../common'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from  'react-native-animatable';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

const serverLogin = server + 'cadastro/login/'

import styles from './styles'


const initialState = {
    email: '',
    password: '',
    autenticado: false,
    escondeSenha : true,
    loading:false,
    secureTextEntry : true,
    loginauto: false,
}

export default class Index extends Component{
       
    
    state = {
        ...initialState
    }
    
    navigateToHome = () => {
        // console.log(this.props);
        this.props.navigation.navigate('Home')
    }

    navigateToCadastro = () => {
        this.props.navigation.navigate('Cadastro')
    }
    navigateToRecuperarSenha = () => {
        this.props.navigation.navigate('RecuperarSenha')
    }

    hideOrShowPassword = () =>{
     this.setState({
         secureTextEntry : !this.state.secureTextEntry
     })
    }

    signin = async () => {
        let json
        let status
        this.setState({
            loading : true
        })
        try{
            const res = await api.post(`${serverLogin}`,{
                email: this.state.email,
                password: this.state.password
            })
            
            if (this.state.loginauto) {
                AsyncStorage.setItem('dados_usuario',JSON.stringify(res.data))
                console.log("Salvando Login Auto")
            }
            
            api.defaults.headers.common['Authorization'] = `Token ${res.data.token}`
            json = res.data
            status = res.status
        }catch(error){
            console.log('catch',error)
            setTimeout(()=>{
                this.setState({
                    loading:false
                })
            },100)
            
            //console.log(error.response,'##########################')
            if (!error.status && !error.response) {
                showError('Verifique sua conexão ou tente mais tarde ! ')
            }else{

                if  (typeof error.response.status != "undefined" && error.response.status == 404 ) {
                        showError("Tente mais tarde!")
                        console.log("erro 1")              
                }else {
                        if (error.response.data.email) {
                        showError(error.response.data.email)
                            
                        } else if (error.response.data.erro[0]) {
                            showError(error.response.data.erro[0])
                            
                        }else {
                            console.log("Erro 100 login ")
                            showError("Impossivel conectar ao servidor,Verifique a conexão")
                            
                        }
                }
            }
            return
        }

        if (status == '200'){
            this.setState({
                loading:false
            })
          console.log(json.perfil)
         this.navigateToHome()
            
        }else{
            this.setState({
                loading:false
            })
            showError('Verifique sua conexão e tente mais tarde ! ')
        }
        
    }
    
    render(){

        const validations =[]
        validations.push( this.state.email && this.state.email.includes('@'))
        validations.push( this.state.password && this.state.password.length >=8 )

        const validForm = validations.reduce((t,a) => t && a )

        return  (
            <View style= {styles.container} >
                <Spinner
                    //visibility of Overlay Loading Spinner
                    visible={this.state.loading}
                    //Text with the Spinner 
                    textContent={'Carregando...'}
                    size = {'large'}
                    animation = {'fade'}
                    //Text style of the Spinner Text
                    textStyle={styles.spinnerTextStyle}
                 />
                <KeyboardAvoidingView  behavior="padding" enabled>
                    <ImageBackground source={fundo} style={{width: '100%', height: '100%'}}>
                        <Animatable.View style={styles.header} animation={'fadeInDownBig'}>
                            <Text style = {styles.title}>Seja Bem-Vindo !</Text>
                        </Animatable.View>

                        <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
                        

                        <Item style={{marginBottom:30}}>
                             <Feather name = {'mail'} size={25} color={'#344955'}/>   
                             <Input 
                                 autoCompleteType = 'email'
                                 value = {this.state.email}
                                 label = 'E-mail'
                                 placeholder = {'Ex.: Aninha94@email.com'}
                                 placeholderTextColor = {'#AAA'}
                                 onChangeText = {email => this.setState({email})}
                                 keyboardType = {'email-address'}
                                />

                         </Item>


                        <Item style={{marginBottom:5}}>
                             <Feather name = {'lock'} size={25} color={'#344955'}/>   
                             <Input 
                                placeholder = {'Informe a senha'}
                                placeholderTextColor = {'#AAA'}
                                autoCompleteType = 'password'
                                secureTextEntry ={this.state.secureTextEntry}
                                value = {this.state.password}
                                label = 'Senha'
                                onChangeText = {password => this.setState({password})}
                                keyboardType = {'default'}
                                />
                             <TouchableOpacity onPress={this.hideOrShowPassword} style ={styles.buttonShowPass}>
                                    <Feather name = { ( this.state.secureTextEntry) ? 'eye' : 'eye-off' }  size = {18} style={styles.icon} color = {'gray'}/>
                                </TouchableOpacity>
                         </Item>


                        <CheckBox
                            title="Manter conectado"
                            checked={this.state.loginauto}
                            checkedColor={global.corPrincipal}
                            onPress={() => this.setState({ loginauto: !this.state.loginauto })}
                            containerStyle={{backgroundColor : 'transparent',borderColor :'transparent',marginVertical:-5}}
                            size ={20}/>    

                        <View style = {styles.buttonContainer}>
                            <TouchableOpacity onPress ={this.signin}>
                                <LinearGradient
                                    colors={['#ff920a','#F9AA33']}
                                    style={styles.button} >
                                    <Text style={styles.buttonText}>Entrar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            

                            <TouchableOpacity onPress ={ this.navigateToCadastro}>
                                <LinearGradient
                                    colors={['#46505C','#344955']}
                                    style={styles.button} >
                                    <Text style={styles.buttonText}>Cadastrar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style ={{ marginBotton:20 }} onPress = {this.navigateToRecuperarSenha}>
                                <Text style= {styles.title1}>Esqueceu sua senha ?</Text>
                        </TouchableOpacity>

                        <Text></Text>
                    </Animatable.View>
                    </ImageBackground>
                </KeyboardAvoidingView  >
            </View>
        )
        
    }
} 
