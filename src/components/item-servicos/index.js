import React from 'react'
import { Text, View, TouchableOpacity ,Image,Alert} from 'react-native'
import styles from './styles'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'
import { Rating, AirbnbRating } from 'react-native-ratings';

export default index = ({service,handleClick}) =>{
    const distancia = null
    const horario = null
    const tel = null
    const categoria = null
    console.log("Dentro do item",service.imagem_servicos[0].imagem)
    return (
        <View style={styles.containerItem}>
            <Image style={styles.image}  source={service.imagem_servicos[0].imagem ? {uri : service.imagem_servicos[0].imagem} : {uri: 'https://img.icons8.com/metro/52/000000/shop.png',}}/>
            <View style={styles.containerDetail}>
                <View style ={styles.titleDetailContainer}>
                    <Text style ={styles.title}><Text style={styles.titlevalue}>{typeof service.nomefantasia == 'undefined' ? 'Mesquita Contruções' : service.nomefantasia }</Text></Text>
                    <Text style={styles.title}><Text style ={styles.titlevalue}>{distancia == null ? '100' : distancia}</Text> km</Text>
                </View>
                
                <View style= {styles.containerServiceInfo}>
                    <View style ={styles.infoText}>
                        <Text style ={styles.titleinfo}>{typeof service.categoria == null ? 'Construção' : service.categoria[0]}</Text>
                        <Rating type = {'star'}  style={styles.rating} imageSize = {15} />
                        {/* <Rating imageSize={15} readonly fractions={1}  startingValue={parseFloat(service.nota_media)} style ={styles.rating} /> */}
                        <Text style ={styles.titleinfo}><Feather  name = 'clock'color = '#344955' size = {15}/> {typeof service.servico_horario == 'undefined' ? ' Seg à Sex' : service.servico_horario[0] } </Text>
                        <Text style ={styles.titleinfo}><Feather name = 'phone' color = '#344955' size = {15} /> {typeof service.servico_telefone == 'undefined' ? ' 99999 -9999' : service.servico_telefone[0]}</Text>
                       
                    </View>
                    
                    <View style = {styles.containerServiceInfo3}>
                        <TouchableOpacity style ={styles.buttonFavorites} onPress={()=>handleClick()}>
                            <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}