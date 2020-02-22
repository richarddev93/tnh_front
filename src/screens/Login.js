import React, {Component } from 'react'
import {View,
        Text,
        ImageBackground,
        StyleSheet,
        TextInput,
        Button,
        Alert,
        TouchableOpacity
        } from 'react-native'

import fundo from '../../assets/imgs/fundo.jpg'

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={fundo}
                    style={styles.background}>
                    
                        <View style={styles.conteudo}>
                          
                            <TextInput editable maxLength={60} 
                                 autoCompleteType={"username"} 
                                 style = {styles.inputs}
                                 placeholder = {'Usuário'}
                                 placeholderTextColor = {'#fff'}/>
                           
                            <TextInput editable maxLength={30} 
                                 autoCompleteType={"password"} 
                                 style = {styles.inputs}
                                 placeholder = {'Senha'}
                                 placeholderTextColor = {'#fff'}
                                 keyboardType = {'default'}/>

                            <Text style = { {fontsize : 17 ,color:'#fff',marginTop: -10}}>Possui cadastro? Inscreva-se </Text>
                          
                          <View style={styles.containerButton}>
                           
                            <TouchableOpacity
                                style={styles.button}
                                onPress={()=>{this.props.navigation.navigate('Home')}} >
                                <Text style = {styles.textoButton}> Logar</Text>
                            </TouchableOpacity>
                            
                          </View>
                        <Text style={{fontSize: 18, color: '#fff', marginTop: -10, padding: 2,}}> Esqueceu sua senha ?</Text>
                        </View>

                </ImageBackground>
            </View>
        )
    }
} 


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        flex:1,
    },

    conteudo: {
        flex: 2,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 160
    },

    inputs:{
        width: '80%',
        height: 30,
        borderRadius: 1,
        borderBottomWidth: 2,  
        margin: 15,
        padding: 5,
        fontSize:  17,
        fontWeight: 'bold',
        
    },

    containerButton:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20 
        },

    button: {
        width: '80%',
        height: 45,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: "#AAA",
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        margin: 5,

    },
    textoButton:{
        fontSize: 20,
        fontWeight: 'bold'
    },

    logo: {
        width: 100,
        height: 100,
    }

})