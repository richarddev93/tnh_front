import React from 'react'
import { View, Text,Image,TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'


export default Index = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.headerStyle}>                    
                <View >
                    <TouchableOpacity onPress={()=>Alert.alert("Voltando")}>
                        <Feather name= 'arrow-left' size = {28} color='#F9AA33'></Feather>
                    </TouchableOpacity>                      
                </View>
                <View style = {styles.containerTitle}>
                    <Text style = {styles.title}>Favoritos</Text>
                        {/* <Text style = {styles.subTitle}>{this.state.subTitleForm}</Text> */}
                </View>
                <View >
                <MaterialCommunityIcons name = {'filter'}  size = {35} style={styles.icon} color = {'#344955'}/>
                </View>
            </View>
            <ScrollView>
            <View style={styles.containerItem}>
                <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
                <View style={styles.containerDetail}>
                    <View style ={styles.titleDetailContainer}>
                        <Text style ={styles.title}>Pedreiro Bicó</Text>
                        <Text style={styles.title}>0.5 km</Text>
                    </View>
                    
                    <View style= {styles.containerServiceInfo}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleCategory}>Categoria : Construção</Text>
                            <Text style ={styles.titleSchedule}>Horário     : Seg à Sex</Text>
                            <Text style ={styles.titleWhats}>Whats       : 98174-3885</Text>
                        </View>
                        
                        <View style = {styles.containerServiceInfo3}>
                            <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                                <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerItem}>
                <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
                <View style={styles.containerDetail}>
                    <View style ={styles.titleDetailContainer}>
                        <Text style ={styles.title}>Pedreiro Bicó</Text>
                        <Text style={styles.title}>0.5 km</Text>
                    </View>
                    
                    <View style= {styles.containerServiceInfo}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleCategory}>Categoria : Construção</Text>
                            <Text style ={styles.titleSchedule}>Horário     : Seg à Sex</Text>
                            <Text style ={styles.titleWhats}>Whats       : 98174-3885</Text>
                        </View>
                        
                        <View style = {styles.containerServiceInfo3}>
                            <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                                <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerItem}>
                <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
                <View style={styles.containerDetail}>
                    <View style ={styles.titleDetailContainer}>
                        <Text style ={styles.title}>Pedreiro Bicó</Text>
                        <Text style={styles.title}>0.5 km</Text>
                    </View>
                    
                    <View style= {styles.containerServiceInfo}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleCategory}>Categoria : Construção</Text>
                            <Text style ={styles.titleSchedule}>Horário     : Seg à Sex</Text>
                            <Text style ={styles.titleWhats}>Whats       : 98174-3885</Text>
                        </View>
                        
                        <View style = {styles.containerServiceInfo3}>
                            <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                                <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerItem}>
                <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
                <View style={styles.containerDetail}>
                    <View style ={styles.titleDetailContainer}>
                        <Text style ={styles.title}>Pedreiro Bicó</Text>
                        <Text style={styles.title}>0.5 km</Text>
                    </View>
                    
                    <View style= {styles.containerServiceInfo}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleCategory}>Categoria : Construção</Text>
                            <Text style ={styles.titleSchedule}>Horário     : Seg à Sex</Text>
                            <Text style ={styles.titleWhats}>Whats       : 98174-3885</Text>
                        </View>
                        
                        <View style = {styles.containerServiceInfo3}>
                            <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                                <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerItem}>
                <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
                <View style={styles.containerDetail}>
                    <View style ={styles.titleDetailContainer}>
                        <Text style ={styles.title}>Pedreiro Bicó</Text>
                        <Text style={styles.title}>0.5 km</Text>
                    </View>
                    
                    <View style= {styles.containerServiceInfo}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleCategory}>Categoria : Construção</Text>
                            <Text style ={styles.titleSchedule}>Horário     : Seg à Sex</Text>
                            <Text style ={styles.titleWhats}>Whats       : 98174-3885</Text>
                        </View>
                        
                        <View style = {styles.containerServiceInfo3}>
                            <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                                <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerItem}>
                <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
                <View style={styles.containerDetail}>
                    <View style ={styles.titleDetailContainer}>
                        <Text style ={styles.title}>Pedreiro Bicó</Text>
                        <Text style={styles.title}>0.5 km</Text>
                    </View>
                    
                    <View style= {styles.containerServiceInfo}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleCategory}>Categoria : Construção</Text>
                            <Text style ={styles.titleSchedule}>Horário     : Seg à Sex</Text>
                            <Text style ={styles.titleWhats}>Whats       : 98174-3885</Text>
                        </View>
                        
                        <View style = {styles.containerServiceInfo3}>
                            <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                                <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerItem}>
                <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
                <View style={styles.containerDetail}>
                    <View style ={styles.titleDetailContainer}>
                        <Text style ={styles.title}>Pedreiro Bicó</Text>
                        <Text style={styles.title}>0.5 km</Text>
                    </View>
                    
                    <View style= {styles.containerServiceInfo}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleCategory}>Categoria : Construção</Text>
                            <Text style ={styles.titleSchedule}>Horário     : Seg à Sex</Text>
                            <Text style ={styles.titleWhats}>Whats       : 98174-3885</Text>
                        </View>
                        
                        <View style = {styles.containerServiceInfo3}>
                            <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                                <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerItem}>
                <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
                <View style={styles.containerDetail}>
                    <View style ={styles.titleDetailContainer}>
                        <Text style ={styles.title}>Pedreiro Bicó</Text>
                        <Text style={styles.title}>0.5 km</Text>
                    </View>
                    
                    <View style= {styles.containerServiceInfo}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleCategory}>Categoria : Construção</Text>
                            <Text style ={styles.titleSchedule}>Horário     : Seg à Sex</Text>
                            <Text style ={styles.titleWhats}>Whats       : 98174-3885</Text>
                        </View>
                        
                        <View style = {styles.containerServiceInfo3}>
                            <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                                <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerItem}>
                <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
                <View style={styles.containerDetail}>
                    <View style ={styles.titleDetailContainer}>
                        <Text style ={styles.title}>Pedreiro Bicó</Text>
                        <Text style={styles.title}>0.5 km</Text>
                    </View>
                    
                    <View style= {styles.containerServiceInfo}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleCategory}>Categoria : Construção</Text>
                            <Text style ={styles.titleSchedule}>Horário     : Seg à Sex</Text>
                            <Text style ={styles.titleWhats}>Whats       : 98174-3885</Text>
                        </View>
                        
                        <View style = {styles.containerServiceInfo3}>
                            <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                                <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}


