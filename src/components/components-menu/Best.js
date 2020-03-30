import React, {Component} from 'react'
import {
        View,
        Text,
        StyleSheet,
        Image,
        Dimensions,
        } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import helipa from '../../../assets/imgs/background/teste/helipa-lounge.jpg'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

class Best extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Melhores do Helipa</Text>
                <View style = {styles.containerQuadros}>
                    <Image source = {helipa} style = {styles.quadro}/>
                </View>
                    <View style = {styles.containerTextQuadros}>
                        <Text style = {styles.textQuadros}>Helipa Lounge</Text>
                        <Icon name={'star'} size={20}/>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /* CONTAINERS */
    container: {
        width: screenWidth,
        height: 100,
        marginTop: 60
    },
    containerQuadros:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    containerTextQuadros:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 10
    },
    /* TEXTOS */
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        padding: 5
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
        margin: 10,
        alignItems: 'flex-start'
    },
})

export default Best