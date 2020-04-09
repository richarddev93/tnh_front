import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

import Favoritos from '../components/components-menu/screens/Favoritos'

import Feather from 'react-native-vector-icons/Feather'

import styles from './home/styles'
import { TextInput } from 'react-native-paper'


class Home extends Component {

    render(){
        return(
            <View style = {styles.container}>
                
                <View style = {styles.containerHeader}>
                    <Feather name = 'filter' size = {40} color = '#000'/>
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

                    <View style = {styles.footer}>

                        <View style = {styles.footerContent}>
                            <Feather name = 'heart' size = {25} color = '#fff'/>
                            <TouchableOpacity onPress = {() => {}}>
                                <Text style = {styles.footerText}>Favoritos</Text>
                            </TouchableOpacity>    
                        </View>

                        <View style = {styles.footerContent}>
                            <Feather name = 'home' size = {25} color = '#fff'/>
                            <TouchableOpacity>
                                <Text style = {styles.footerText}>Home</Text>
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.footerContent}>
                            <Feather name = 'map-pin' size = {25} color = '#fff'/>
                            <TouchableOpacity>
                                <Text style = {styles.footerText}>Localização</Text>
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.footerContent}>
                            <Feather name = 'clock' size = {25} color = '#fff'/>
                            <TouchableOpacity>
                                <Text style = {styles.footerText}>Recentes</Text>
                            </TouchableOpacity>
                        </View>

                </View>

            </View>
            
        )
    }
}

export default Home