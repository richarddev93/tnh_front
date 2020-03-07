import React, {Component} from 'react'
import {
        View,
        Text,
        StyleSheet,
        Image,
        } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import helipa from '../../../assets/imgs/background/teste/helipa-lounge.jpg'

class Best extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Melhor do Helipa</Text>
                <View style = {styles.containerQuadros}>
                    <Image source = {helipa} style = {styles.quadro}/>
                    <View style = {styles.containerTextQuadros}>
                        <Text style = {styles.textQuadros}>Helipa Lounge</Text>
                        <Icon name={'star'} size={20}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /* CONTAINERS */
    container: {
        marginTop: 10,
    },
    containerQuadros:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTextQuadros:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    /* TEXTOS */
    title:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    textQuadros:{
        fontSize: 15,
    },
    /* QUADRO */ 
    quadro:{
        height: 150,
        width: 150,
        resizeMode: "stretch",
        borderRadius: 30,
    },
})

export default Best