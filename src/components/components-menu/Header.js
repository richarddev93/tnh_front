import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Plataform,
    Image,
    ImageBackground,
    StatusBar
} from 'react-native'

import fundo from '../../../assets/imgs/background/fundoDefinitivo.jpg'

import Icon from 'react-native-vector-icons/FontAwesome'



class Header extends Component{
    render(){
        return(
            <ImageBackground source = {fundo} style = {styles.container}>
                <StatusBar backgroundColor = {'#f9ba5b'} barStyle = {'light-content'} ></StatusBar>
                <View style = {styles.rowContainer}>
                    <Icon style = {styles.icon} name= {'bars'} size = {30} color = {'#fff'}/>
                <View style =  {styles.rowContainer2}>   
                   <View style = {styles.columnContainer}>
                    <Text style = {styles.title}> Olá Richard </Text>
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