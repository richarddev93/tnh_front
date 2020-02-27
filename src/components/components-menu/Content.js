import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Plataform,
    Image
} from 'react-native'

import AuthInput from '../components-login/AuthInput'

class Content extends Component {
    
    state = {
        search : ''
    }
    
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.containerSearchBar}>
                    <Text style = {styles.title}>{`Pesquise\nno Helipa`}</Text>
                    <AuthInput icon = 'search' 
                        editable
                        value = {this.state.search}
                        style = {styles.input}
                        placeholder = {'Busque um serviço ou segmento'}
                        placeholderTextColor = {'#AAA'}
                        onChangeText = {search => this.setState({search})}
                        autoCorrect = {false}
                        />
                </View>
                <View style = {styles.conteudo}>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /* Container */
    container: {
        marginTop: 50,
        padding: 10
    },
   
    containerSearchBar: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        

    },
    /* Textos */
    title: {
        fontSize: 28,
        color: '#000',
        marginLeft: 5,
        margin: 10
    },
    /* Input */
    input: {
        width: '90%',
        borderRadius: 15,
        height: 20,
        backgroundColor: '#AAA'
    }

})

export default Content