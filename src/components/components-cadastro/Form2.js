import React, {Component} from 'react'
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        StyleSheet,
        Slider,
        Alert,
        Image} from 'react-native'
import commonStyles from '../../commonStyles'
import barCad from './barCad'

import Yoda from '../../../assets/imgs/logo/yoda.jpg'

 export default class Form extends Component{
   
   state = {
        id : 0,
        nome: '',
        senha: '',
        confirmSenha: '',
        email: '',
        user: '',
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.containerTitle}>
                    <Text style = {styles.title}>Vamos começar?</Text>
                    <Text style = {styles.subTitle}>Dados pessoais</Text>
                </View>
                <View style = {styles.containerForm}>
                    <View style = {styles.containerPreview}>
                        <Image source={Yoda} style = {styles.picPreview}/>
                    </View>
                <Text style = {styles.label}>Foto</Text>
                        <TextInput style = {styles.input}
                        autoCompleteType = 'off'
                        value = {this.state.user}
                        placeholder = {'Ex.: Aninha94'}
                        placeholderTextColor = {'#AAA'}
                        onChangeText = {user => this.setState({user})}
                        keyboardType = {'default'} />
                <Text style = {styles.label}>Telefone</Text>
                <TextInput style = {styles.input}
                            autoCompleteType = 'email'
                            value = {this.state.email}
                            placeholder = {'Ex.: Aninha94@email.com'}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {email => this.setState({email})}
                            keyboardType = {'email-address'} />
                                
                
            </View>
                    <View style ={styles.containerBall}>
                        <View style = {styles.ball}></View>
                        <View style = {styles.ball2}></View>
                        <View style = {styles.ball3}></View>
                        <View style = {styles.ball4}></View>
                    </View>
                    
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /* Containers */
    container:{
        marginTop: 30,
    },
    containerTitle: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerForm: {
        marginTop:10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 30,
    
    },
    containerBall:{
        marginTop: -5,
        padding: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    containerPreview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    /* Textos */
    title:{
        fontSize: 40,
        color: '#000',
        padding: 10,
    },
    subTitle:{
        fontSize: 25,
        color: commonStyles.colors.primary
    },
    label:{
        fontSize: 15,
        color: '#000',
        
    },
    textPass: {
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 120,
        marginTop: 10
    },
    /* Input */
    input: {
        width: 300,
        height: 50,
        borderRadius: 5,
        shadowOpacity: 20,
        shadowColor: '#000',
        shadowRadius: 5,
        backgroundColor: '#DDD',
        padding:10,
        margin: 5,
        marginLeft: -3
    },
    /* Bolas */
    ball: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: commonStyles.colors.secondary,

    },
    ball2: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: commonStyles.colors.primary,

    },
    ball3: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: commonStyles.colors.secondary,

    },
    ball4: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: commonStyles.colors.secondary,

    },
    /* IMGS */
    picPreview: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 55,
        padding:5
    }
})
