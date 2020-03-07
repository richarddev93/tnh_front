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

class Content extends Component {
    
    state = {
        search : ''
    }
    
    
    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        
        return(
            <View style = {styles.container}>
                <View style = {styles.containerSearchBar}>
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
                    <Text style = {styles.contentTitle}> Categorias </Text>
                    <SafeAreaView style = {styles.scrollContainer}>
                    <ScrollView horizontal={true} 
                    pagingEnabled = {true} 
                    showsHorizontalScrollIndicator = {true}
                    >
                    <View style = {styles.containerQuadro}>                    
                            <Image source = {restaurante} style = {styles.quadros}/>
                            <View style = {styles.containerTextoQuadros}>
                                <Text style = {styles.textoQuadros}> Restaurantes </Text> 
                            </View>
                            <Image source = {lava} style = {styles.quadros}/>
                            <View style = {styles.containerTextoQuadros}>
                                <Text style = {styles.textoQuadros}> Lava-Rápido </Text> 
                            </View>
                            <Image source = {cabeleireiro} style = {styles.quadros}/>
                            <View style = {styles.containerTextoQuadros}>
                                <Text style = {styles.textoQuadros}> Cabeleireiros </Text> 
                            </View>
                            <Image source = {plus} style = {styles.quadros}/>
                            <View style = {styles.containerTextoQuadros}>
                                <Text style = {styles.textoQuadros}> Veja mais </Text> 
                            </View>
                    </View>
                    </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /* Container */
    container: {
        marginTop: 10,
        padding: 10
    },
   
    containerSearchBar: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    conteudo: {
        marginTop: 80,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft:-220
    },
    containerQuadro:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 140
    },
    containerTextoQuadros:{
        marginLeft: -130,
        height: 32,
        backgroundColor: '#000',
        opacity: 0.7,
        width: 130,
        alignItems:'center',
        justifyContent: 'center',
    },
    scrollContainer:{
        marginLeft: 70,
        marginTop: -400
    },
    /* QUADROS */
    quadros:{
        height: 130,
        width: 130,
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 10,
        opacity: 0.7,
        backgroundColor: '#fff',
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
        marginLeft: 10
    },
    textoQuadros: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',    
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