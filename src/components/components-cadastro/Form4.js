import React, {Component} from 'react'
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        StyleSheet,
        Slider,
        Alert,
        Dimensions} from 'react-native'

import commonStyles from '../../commonStyles'

import { createStackNavigator } from '@react-navigation/stack'


let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height


 export default class Form extends Component{
   
    NavigateForm3 = () => {
        this.props.navigation.navigate('Form3')
    }


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
                    <Text style = {styles.subTitle}>FORM 4</Text>
                </View>
                <View style = {styles.containerForm}>
                <Text style = {styles.label}>Nome completo</Text>
                        <TextInput style = {styles.input}
                        autoCompleteType = 'name'
                        value = {this.state.nome}
                        placeholder = {'Ex.: Ana Silva Souza'}
                        placeholderTextColor = {'#AAA'}
                        onChangeText = {nome => this.setState({nome})}
                        keyboardType = {'default'}/>  
                <Text style = {styles.label}>Usuário</Text>
                        <TextInput style = {styles.input}
                        autoCompleteType = 'off'
                        value = {this.state.user}
                        placeholder = {'Ex.: Aninha94'}
                        placeholderTextColor = {'#AAA'}
                        onChangeText = {user => this.setState({user})}
                        keyboardType = {'default'} />
                <Text style = {styles.label}>E-mail</Text>
                <TextInput style = {styles.input}
                            autoCompleteType = 'email'
                            value = {this.state.email}
                            placeholder = {'Ex.: Aninha94@email.com'}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {email => this.setState({email})}
                            keyboardType = {'email-address'} />
                <Text style = {styles.label}>Senha</Text>
                <TextInput style = {styles.input}
                            autoCompleteType = 'password'
                            value = {this.state.senha}
                            placeholder = {'Informe a senha'}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {senha => this.setState({senha})}
                            keyboardType = {'default'} />
                <Text style = {styles.label}>Confirmar Senha</Text>
                <TextInput style = {styles.input}
                            autoCompleteType = 'password'
                            value = {this.state.confirmSenha}
                            placeholder = {'Confirme a senha'}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {confirmSenha => this.setState({confirmSenha})}
                            keyboardType = {'default'}/>
                    
                    
                </View>
                <View style ={styles.containerBall}>
                        <View style = {styles.ball}></View>
                        <View style = {styles.ball2}></View>
                        <View style = {styles.ball3}></View>
                        <View style = {styles.ball4}></View>
                    </View>
                    <View style = {styles.containerButton}> 
                    <TouchableOpacity style = {styles.buttonVolt}
                        onPress = {
                          this.NavigateForm3
                        }>
                        <Text style = {styles.buttonText}> Voltar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}
                        onPress = {
                          this.NavigateForm2
                        }>
                        <Text style = {styles.buttonText}> Finalizar </Text>
                    </TouchableOpacity>
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
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
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
        backgroundColor: commonStyles.colors.secondary,

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
        backgroundColor: commonStyles.colors.primary,

    },
    /* BUTTON */
    containerButton: {
        width: ScreenWidth,
        flexDirection:'row',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    containerProx:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    button:{
        height: 40,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginTop: -30
    },
    buttonVolt:{
        height: 40,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-10,
        padding: 10,
        marginHorizontal: 100
    },
    buttonProx:{
        height: 40,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-10,
        padding: 10,
        marginRight: -30
    },
    buttonText:{
        fontSize: 15,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
