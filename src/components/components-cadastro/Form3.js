import React, {Component} from 'react'
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        StyleSheet,
        Slider,
        Alert} from 'react-native'
import axios from 'axios'

import commonStyles from '../../commonStyles'

import barCad from './barCad'
import {showError} from '../../common'

 export default class Form extends Component{
   
    

   state = {
        id : 0,
        cep: 0,
        tpLog: '',
        lograd: '',
        num: 0,
        compl: '',
        counter: 0
    }
    
    searchCep = async () => {
        try{
            const res = await axios.get(`viacep.com.br/ws/${this.state.cep}/json/`)
                
            const {docs} = res.data
            this.setState({counter: docs.length})
            console.log(docs)
            if (res.status == '200'){
                this.navigateToHome()
                
            }else{
                Alert.alert("Falha")
            }
            
            
        }catch(e){
            console.log(e)
            showError(e)
            //this.props.navigation.navigate('Home')
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.containerTitle}>
                    <Text style = {styles.title}>Vamos começar?</Text>
                    <Text style = {styles.subTitle}>Endereço</Text>
                </View>
                <View style = {styles.containerForm}>
                <Text style = {styles.label}>CEP</Text>
                        <TextInput style = {styles.input}
                        autoCompleteType = 'postal-code'
                        value = {this.state.cep}
                        placeholder = {'00000-000'}
                        placeholderTextColor = {'#AAA'}
                        onChangeText = {cep => this.setState({cep})}
                        onSubmitEditing = {this.searchCep}
                        keyboardType = {'default'}/>  
                <Text style = {styles.label}>Logradouro</Text>
                        <TextInput style = {styles.input}
                        autoCompleteType = 'street-address'
                        value = {this.state.lograd}
                        placeholder = {'Rua Exemplo'}
                        placeholderTextColor = {'#AAA'}
                        onChangeText = {lograd => this.setState({lograd})}
                        keyboardType = {'default'} />
                <Text style = {styles.label}>Tipo do Logradouro</Text>
                <TextInput style = {styles.input}
                            autoCompleteType = 'off'
                            value = {this.state.tpLog}
                            placeholder = {'Travessa'}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {tpLog => this.setState({tpLog})}
                            keyboardType = {'email-address'} />
                <Text style = {styles.label}>Número</Text>
                <TextInput style = {styles.input}
                            autoCompleteType = 'cc-number'
                            value = {this.state.num}
                            placeholder = {'Nº 00'}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {num => this.setState({num})}
                            keyboardType = {'default'} />
                <Text style = {styles.label}>Complemento</Text>
                <TextInput style = {styles.input}
                            autoCompleteType = 'off'
                            value = {this.state.compl}
                            placeholder = {'Apto 2'}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {counter => this.setState({counter})}
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
