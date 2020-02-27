import React, {Component} from 'react'
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        StyleSheet} from 'react-native'
import commonStyles from '../../commonStyles'

class Form extends Component{
    state = {
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
                    <Text style = {styles.subTitle}>Dados Pessoais</Text>
                </View>
                <View style = {styles.containerForm}>
                    <Text style = {styles.label}>Nome completo</Text>
                    <TextInput style = {styles.input}
                               autoCompleteType = 'name'
                               value = {this.state.nome}
                               placeholder = {'Ex.: Ana Silva Souza'}
                               placeholderTextColor = {'#AAA'}
                               onChangeText = {nome => this.setState({nome})}
                               keyboardType = {'default'} />
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
                               keyboardType = {'default'} />
                    
                </View>
                <View style = {styles.containerButton}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}> Próximo </Text>
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
        padding: 30
    },
    containerButton: {
        marginTop: 10,
        alignItems: 'flex-end',
        justifyContent:'flex-end'
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
    buttonText:{
        fontSize: 15,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
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
    /* Botões */
    button:{
        height: 50,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
        marginTop: 10
    },
})

export default Form