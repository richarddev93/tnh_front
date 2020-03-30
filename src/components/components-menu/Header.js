import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Plataform,
    Image,
    ImageBackground,
    StatusBar,
    AsyncStorage
} from 'react-native'

import fundo from '../../../assets/imgs/background/fundoDefinitivo.jpg'

import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'


class Header extends Component{

    constructor(props){
        super(props);
    }

    logout  = async ()=>{
            try {
                await AsyncStorage.removeItem('dados_usuario');
                delete axios.defaults.headers.common['Authorization'] 
                console.log('apagando os dados')
            }
            catch(exception) {
                console.log('Erouuuuuuuuu')
            }

    }
    render(){

console.log('Passando Props',this.props.texto)        

        return(
            <ImageBackground source = {fundo} style = {styles.container}>
                <StatusBar backgroundColor = {'#f9ba5b'} barStyle = {'light-content'} ></StatusBar>
                <View style = {styles.rowContainer}>
                    <TouchableOpacity onPress={this.logout}>
                    <Icon style = {styles.icon}   name= {'bars'} size = {30} color = {'#fff'}/>
                    </TouchableOpacity>
                    
                <View style =  {styles.rowContainer2}>   
                   <View style = {styles.columnContainer}>
                    <Text style = {styles.title}> { this.props.texto }</Text>
                    <Text style = {styles.subTitle}> Perfil </Text>
                   </View> 
                    <Icon name = {'user'} size = {30} color = {'#fff'}/>
                </View>
                </View>
            </ImageBackground>
            
        )
    }
}

const styles = StyleSheet.create({
    /* Containers */
    container: {
        marginTop: 0,
        padding: 5,
        height: 150
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowContainer2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
    },
    columnContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
    },

    /* Textos */
    title: {
        color: '#fff',
        height: 30,
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#fff',
        height: 30,
        fontSize: 15,
        marginLeft: 50,
        marginBottom: 5
    },
    
})

export default Header