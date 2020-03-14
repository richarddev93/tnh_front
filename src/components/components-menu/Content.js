import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Plataform,
    Image,
    ScrollView,
    SafeAreaView,
    Dimensions
} from 'react-native'

import AuthInput from '../components-login/AuthInput'

import restaurante from '../../../assets/imgs/background/background-categorias/restaurante.jpg'
import lava from '../../../assets/imgs/background/background-categorias/lava-rapido.jpg'
import cabeleireiro from '../../../assets/imgs/background/background-categorias/cabeleireiro.jpg'
import plus from '../../../assets/imgs/background/background-categorias/more.png'

import Icones from '../components-menu/component-menu-icons/Icones'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

class Content extends Component {
    
    state = {
        search : ''
    }
    
    
    render(){
        
        
        return(
            <View style = {styles.container}>
                <View style = {styles.containerSearchBar}>
                    <AuthInput
                        icon2 = 'paper-plane'
                        editable
                        value = {this.state.search}
                        placeholder = {'Busque um serviço ou segmento'}
                        placeholderTextColor = {'#808080'}
                        onChangeText = {search => this.setState({search})}
                        autoCorrect = {false}
                        />
                </View>
                <View style = {styles.conteudo}>
                        <View style = {styles.containerCategories}>
                            <View style = {styles.iconText}>
                                <Icones icon = {'shopping-bag'}/>
                                <Text style = {styles.textIcon}> Lojas </Text>
                            </View>
                            <View style = {styles.iconText}>
                                <Icones icon = {'coffee'}/>
                                <Text style = {styles.textIcon}> Café </Text>
                            </View>
                            <View style = {styles.iconText}>
                                <Icones icon = {'star'}/>
                                <Text style = {styles.textIcon}> Eventos </Text>
                            </View>
                            <View style = {styles.iconText}>
                                <Icones icon = {'briefcase'}/>
                                <Text style = {styles.textIcon}> Empregos </Text>
                            </View>
                        </View>
                        <View style = {styles.containerCategories}>
                            <View style = {styles.iconText}>
                                <Icones icon = {'car'}/>
                                <Text style = {styles.textIcon}> Automóveis </Text>
                            </View>
                            <View style = {styles.iconText}>
                                <Icones icon = {'book'}/>
                                <Text style = {styles.textIcon}> Livrarias </Text>
                            </View>
                            <View style = {styles.iconText}>
                                <Icones icon = {'paw'}/>
                                <Text style = {styles.textIcon}> Petshop </Text>
                            </View>
                            <View style = {styles.iconText}>
                                <Icones icon = {'ellipsis-h'}/>
                                <Text style = {styles.textIcon}> Mais </Text>
                            </View>
                         </View>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    /* Container */
    container: {
        height: 300,
        marginTop: -60
    },
   
    containerSearchBar: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 130,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: 340,
        borderWidth: 2,
        borderColor: '#DCDCDC',
        margin: 10
    },
    conteudo: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: 150,
        marginTop: 10
    },
    containerCategories: {
        width: screenWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",
        padding: 5,
        marginTop: 10
    },
    iconText:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    /* Textos */
    title: {
        fontSize: 28,
        color: '#000',
        marginLeft: 5,
        margin: 10
    },
    contentTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 40
    },
    textIcon:{
        fontSize: 15,
    },
    /* Input */
    input: {
        width: '90%',
        borderRadius: 15,
        height: 20,
        backgroundColor: '#AAA',
        marginLeft: 30,
    },

})

export default Content