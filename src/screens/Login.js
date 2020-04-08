import React, {Component, useState, useEffect } from 'react'
import {View,
        Text,
        ImageBackground,
        StyleSheet,
        TextInput,
        Button,
        Alert,
        TouchableOpacity,
        StatusBar,
        KeyboardAvoidingView,
        AsyncStorage,
        Image
        } from 'react-native'

import axios from 'axios'

import fundo from '../../assets/imgs/background/fundoDefinitivo.jpg'
import logo from '../../assets/logo.png'
import AuthInput from '../components/components-login/AuthInput'
import commonStyles from '../commonStyles'
import Spinner from 'react-native-loading-spinner-overlay';
import { CheckBox } from 'react-native-elements'
import {server,showError, showSuccess} from '../common'
const serverLogin = server + 'cadastro/login/'

const initialState = {
    email: '',
    password: '',
    autenticado: false,
    escondeSenha : true,
    loading:false,
    secureTextEntry : true,
    loginauto: false,
}

export default class Login extends Component{
       
    state = {
        ...initialState
    }
    
    navigateToHome = () => {
        this.props.navigation.navigate('Home')
    }

    navigateToCadastro = () => {
        this.props.navigation.navigate('Cadastro')
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
        console.log("70")
        try{
            const res = await axios.post(`${serverLogin}`,{
                email: this.state.email,
                password: this.state.password
            })
            
            if (this.state.loginauto) {
                AsyncStorage.setItem('dados_usuario',JSON.stringify(res.data))
                console.log("Salvando Login Auto")
            }
            
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            console.log("80")
            json = res.data
            status = res.status
        }catch(error){
            console.log('catch')
            setTimeout(()=>{
                this.setState({
                    loading:false
                })
            },100)
            
            console.log(error.response,'##########################')
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
        
        return(
            <ImageBackground source = {fundo} style = {styles.background}>
                <View style = {styles.container}>
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
                     
                        <View style={styles.containerTitle}>
                            <Image style={{width: 150, height: 150,marginBottom:1}} source ={logo}/>                            
                            <Text style = {styles.title2}>Tem no Helipa</Text>
                        </View>
                                                
                        <View style ={styles.conteudo}>
                            {/* <Text style={styles.subTitle}> Login</Text> */}
                            <AuthInput 
                                icon = 'user'
                                value = {this.state.email}
                                style = {styles.inputs}
                                placeholder = {'Usuário'}
                                fontSize ={17}
                                placeholderTextColor = {'#AAA'}
                                onChangeText = {email => this.setState({email})} 
                                keyboardType = 'email-address'
                                />
                           
                            <AuthInput icon='lock' editable maxLength={30} 
                                autoCompleteType={"password"} 
                                value = {this.state.senha}
                                style = {styles.inputs}
                                placeholder = {'Senha'}
                                fontSize ={17}
                                placeholderTextColor = {'#AAA'}
                                secureTextEntry = {this.state.escondeSenha}
                                onChangeText = {password => this.setState({password})}
                                keyboardType = {'default'}
                                secureTextEntry ={this.state.secureTextEntry}
                                showIconEyepassword ={true}
                                handleVisibility = {this.hideOrShowPassword}/>
                            <CheckBox
                                title="Manter conectado"
                                checked={this.state.loginauto}
                                checkedColor={global.corPrincipal}
                                onPress={() => this.setState({ loginauto: !this.state.loginauto })}
                                containerStyle={{backgroundColor : 'transparent',borderColor :'transparent',marginVertical:-5}}
                                size ={20}
                             />               
                          
                            <View style={styles.containerButton}>  
                                          
                                <TouchableOpacity
                                    disabled={!validForm} //só habilito o botão para o susário se tiver email com @ e senha preeenchida
                                    style={validForm ?  styles.button : styles.buttonDisable }
                                    onPress={this.signin} >
                                    <Text style = {styles.textoButton}> Entrar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style ={{ marginTop:10 }} onPress = {this.navigateToCadastro}>
                                    <Text style= {styles.title1}>Esqueceu sua senha ?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
                <TouchableOpacity style={styles.containerButton} onPress = {this.navigateToCadastro}>
                                    <Text style= {styles.title1}>Possui cadastro? Inscreva-se </Text>
                        </TouchableOpacity>

                <TouchableOpacity onPress = {this.navigateToHome}>
                    <Text style = {{fontSize: 20}}>Entrar</Text>
                </TouchableOpacity>
            </ImageBackground>    
        )
    }
} 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems :'center'
    },

    background:{
        flex:1,
    },

    conteudo: {
        justifyContent:'center',
        alignItems: 'center',
        marginBottom :25 
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
        margin: 15,        
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
    buttonDisable: {
        width: 320,
        height: 45,
        backgroundColor: commonStyles.colors.disabled,
        color: commonStyles.font.color,
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
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color : '#344955'  
    },

    title2: {
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color : '#344955'
       
    },

    containerTitle:{
        justifyContent: 'center',
        alignItems: 'center',
        margin :30   
    },

    spinnerTextStyle: {
        color: '#FFF',
      },

    })