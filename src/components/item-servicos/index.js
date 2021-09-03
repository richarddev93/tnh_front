import React from 'react'
import { Text, View, TouchableOpacity ,Image,Alert} from 'react-native'
import styles from './styles'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';


export default index = ({service,handleClick,shimmerLoading}) =>{

    let imageService = null;
    let loading = typeof shimmerLoading == 'undefined' ? true :shimmerLoading ;

    imageService = typeof service.imagem_servicos[0]  === 'undefined'  || typeof service.imagem_servicos[0].imagem  === 'undefined' 
                    ? 'https://img.icons8.com/metro/52/000000/shop.png'
                    :  service.imagem_servicos[0].imagem ;

    return (
        <View style={styles.containerItem}>
            <ShimmerPlaceHolder style= {styles.imageShimmer} autoRun ={true} visible = {loading}>
                {/* <Image style={styles.image}  source={ imageService ? {uri : imageService } : {uri: 'https://img.icons8.com/metro/52/000000/shop.png'}}/>                 */}
                <Image style={styles.image}  source={ { uri : imageService } }/>                
            </ShimmerPlaceHolder>
            <View style={styles.containerDetail}>
                <View style ={styles.titleDetailContainer}>
                    <ShimmerPlaceHolder style= {styles.titleShimmer} autoRun ={true} visible = {loading}>
                        <Text style ={styles.title}><Text style={styles.titlevalue}>{typeof service.nomefantasia == 'undefined' ? 'Mesquita Contruções' : service.nomefantasia }</Text></Text>
                    </ShimmerPlaceHolder>
                </View>
                
                <View style= {styles.containerServiceInfo}>
                    <ShimmerPlaceHolder style= {styles.infoTextShimmer} autoRun ={true} visible = {loading}>
                        <View style ={styles.infoText}>
                            <Text style ={styles.titleinfo}>{typeof service.categoria == null ? 'Construção' : service.categoria[0]}</Text>
                            <Rating type = {'star'} imageSize={15} readonly fractions={1}  startingValue={typeof service.nota_media == 'undefined' ? 0 :parseFloat(service.nota_media)} style ={styles.rating} /> 
                            <Text style ={styles.titleinfo}><Feather name = 'phone' color = '#344955' size = {15} /> {typeof service.servico_telefone == 'undefined' ? ' 99999 -9999' : service.servico_telefone[0]}</Text>
                        </View>
                    </ShimmerPlaceHolder>
                </View>
            </View>
            <View style ={styles.containerButtonFavorites} >
                <ShimmerPlaceHolder style= {styles.buttonFavoritesShimmer} autoRun ={true} visible = {loading}>
                    <TouchableOpacity onPress={()=>handleClick()}>
                        <MaterialCommunityIcons name = {'heart'}  size = {35} style={styles.icon} color = {'red'}/>
                    </TouchableOpacity>
                </ShimmerPlaceHolder>
            </View>
        </View>

    )
}