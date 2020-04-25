import React from 'react'
import { Text, View, TouchableOpacity ,Image} from 'react-native'
import styles from './styles'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'

export default index = ({imageurl,servico,distancia,categoria,horario,tel}) =>{
    console.log(categoria)
    return (
        <View style={styles.containerItem}>
            <Image style={styles.image}  source={{uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
            <View style={styles.containerDetail}>
                <View style ={styles.titleDetailContainer}>
                    <Text style ={styles.title}><Text style={styles.titlevalue}>{typeof servico == 'undefined' ? 'Mesquita Contruções' : servico }</Text></Text>
                    <Text style={styles.title}><Text style ={styles.titlevalue}>{typeof distancia == 'undefined' ? '10' : distancia}</Text> km</Text>
                </View>
                
                <View style= {styles.containerServiceInfo}>
                    <View style ={styles.infoText}>
                        <Text style ={styles.titleinfo}>Categoria : <Text styles = {styles.titleinfovalue}>{typeof categoria == 'undefined' ? 'Construção' : categoria}</Text></Text>
                        <Text style ={styles.titleinfo}>Horário     : <Text styles = {styles.titleinfovalue}>{typeof horario == 'undefined' ? 'Seg à Sex' :horario } </Text></Text>
                        <Text style ={styles.titleinfo}>Whats       : <Text styles = {styles.titleinfovalue}>{typeof tel == 'undefined' ? '99999 -9999' : tel}</Text></Text>
                    </View>
                    
                    <View style = {styles.containerServiceInfo3}>
                        <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>Alert.alert("Exclui Favorito")}>
                            <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}