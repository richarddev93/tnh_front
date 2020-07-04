import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

import Favoritos from '../components/components-menu/screens/Favoritos'

import Feather from 'react-native-vector-icons/Feather'

import styles from './home/styles'
import { TextInput } from 'react-native-paper'


class Home extends Component {
    constructor(props) {
        super(props);
    
        console.log(this.props)
    }

    sair = ()=>{
        AsyncStorage.clear();
    }

    render(){
        return(
            <View style = {styles.container}>
                
                <View style = {styles.containerHeader}>
                    <Feather name = 'filter' size = {40} color = '#000' onPress ={this.sair}/>
                    <View style = {styles.containerText}>
                        <Text style = {styles.textHeader}> Nome do usuário <Feather name = 'user' size = {40} color = '#000'/></Text>
                    </View>
                </View>
                
                <View style = {styles.conteudo}>
                    <Text style = {styles.textCategorias}>{`Pesquise\nno Helipa`}</Text>

                    <TextInput style = {styles.input}
                    autoCompleteType = 'off'
                    label = 'Pesquise'
                    placeholder = {'Lojinha exemplo'}
                    placeholderTextColor = {'#AAA'}
                    mode = 'outlined'
                    theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                    keyboardType = {'default'}/>

                    
                        <View style = {styles.categorias}>
                            
                            <Text style = {styles.Title}>Categorias</Text>

                            <ScrollView horizontal= {true}>
                                
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Categorie</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Categorie</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Categorie</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Categorie</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Categorie</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Categorie</Text>
                                </View>

                            </ScrollView>

                        </View>

                        <View style = {styles.categorias}>
                            
                            <Text style = {styles.Title}>Melhores no Helipa</Text>

                            <ScrollView horizontal= {true}>
                                
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Best</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Best</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Best</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Best</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Best</Text>
                                </View>
                                <View style = {styles.caixaCategoria}>
                                    <Text style = {styles.categoriaTexto}>Name Best</Text>
                                </View>

                            </ScrollView>

                        </View>
                  
                </View>

                   

            </View>
            
        )
    }
}

export default Home