import React, {Component} from 'react'
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        StyleSheet,
        Slider,
        Alert} from 'react-native'
import commonStyles from '../../commonStyles'
import barCad from './barCad'

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
                    <Text style = {styles.subTitle}>Dados cadastrais</Text>
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
        backgroundColor: commonStyles.colors.primary,

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
        backgroundColor: commonStyles.colors.secondary,

    },
})
