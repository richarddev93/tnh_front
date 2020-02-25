import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    Animated, 
    TextInput,
    TouchableOpacity
} from 'react-native'



export default class Cadastro extends Component {
    render(){
        return(
            <Animated.View style = {styles.container}>
               
                <View style = {styles.title}>
                   
                    <Text style = {styles.textTitle}>Começando a criação </Text>
                    <Text style = {styles.textTitle}>da sua conta </Text>
                
                
                    
                    <TextInput editable maxLength={30} 
                                 autoCompleteType={"name"} 
                                 // value = {this.state.senha}
                                 style = {styles.input}
                                 placeholder = {'Digite o nome do usuário'}
                                 placeholderTextColor = {'#AAA'}
                                 secureTextEntry = {false}
                                 // onChangeText = {password => this.setState({password})}
                                 keyboardType = {'default'} />
                    
                    <TextInput editable maxLength={30} 
                                 autoCompleteType={"email"} 
                                 // value = {this.state.senha}
                                 style = {styles.input}
                                 placeholder = {'Digite seu email'}
                                 placeholderTextColor = {'#AAA'}
                                 secureTextEntry = {false}
                                 // onChangeText = {password => this.setState({password})}
                                 keyboardType = {'email-address'} />
                    
                    <TextInput editable maxLength={30} 
                                 autoCompleteType={"password"} 
                                 // value = {this.state.senha}
                                 style = {styles.input}
                                 placeholder = {'Digite uma senha'}
                                 placeholderTextColor = {'#AAA'}
                                 secureTextEntry = {true}
                                 // onChangeText = {password => this.setState({password})}
                                 keyboardType = {'default'} />
                    
                    <TextInput editable maxLength={30} 
                                 autoCompleteType={"password"} 
                                 // value = {this.state.senha}
                                 style = {styles.input}
                                 placeholder = {'Digite confirme sua senha'}
                                 placeholderTextColor = {'#AAA'}
                                 secureTextEntry = {true}
                                 // onChangeText = {password => this.setState({password})}
                                 keyboardType = {'default'} />
                
               
               
               </View>

            </Animated.View>
        )
    }
}

const styles  = StyleSheet .create({
    container :{
        flex:1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: '#fff'
    },
    title: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: -70,
        marginTop: 30,
    },
    textTitle: {
       fontSize: 30,
       fontWeight: 'bold',
       includeFontPadding: true,
    },

   
    
    input: {
        width: 250,
        height: 50,
        marginTop: 30,
        backgroundColor: '#eee',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize:  17,
        padding: 10
    }
    

})