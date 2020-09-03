import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage,
    ImageBackground,
} from 'react-native'
import axios from 'axios'
import { showError } from '../../common';

import fundo from '../../../assets/imgs/background/fundoDefinitivo.jpg'

export default class AuthOrApp extends Component {

    navigateToHome = (data) => {
        this.props.navigation.navigate('Home',data)
    }
    navigateToLogin =(data) =>{
        this.props.navigation.navigate('Login')
    }

    componentDidMount= async () => {
        //AsyncStorage.removeItem('dados_usuario')
        const userDataJson = await AsyncStorage.getItem('dados_usuario')
        let userData = null
        console.log('Iniciando ...')
        try {
            userData = JSON.parse(userDataJson)
        } catch (e) {
            showError(e.message)
            //está inválido
        }
        if (userData && userData.token) {
            // console.log("1")
            // // console.log(userData)
            // console.log(userData.token)

            axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`
            this.navigateToHome(userData)
            //console.log("AuthorApp -aqui 01")
        }else{
            this.navigateToLogin()
            //console.log("AuthorApp -aqui 02")
        }
    }

    render(){
        return (
            
                <ImageBackground source = {fundo} style = {styles.background}>
                    
                      <ActivityIndicator size = 'large'/>
                    
                </ImageBackground>
                
           
        )
    }
}

const styles = StyleSheet.create({
    container : {
        
        
        backgroundColor : '#000'
    },
    background:{
        flex:1,
        alignItems :'center',
        justifyContent :'center',
    }

})