import React ,{useState}from 'react'
import { View, Text, TouchableOpacity, Slider } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import MapView from 'react-native-maps'
import styles  from './style';
import { colorsStyle } from '../../common'
import Slideshow from 'react-native-image-slider-show';
import { Rating, AirbnbRating } from 'react-native-ratings';
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler'




const index = () => {

    const navigation = useNavigation()

    const [serviceTitle,setServiceTitle] = useState('Serviço');
   
    function navigationToBack (){
        navigation.goBack()        
    }

    return (
        <View style = {styles.container}>

            {/*Header */}
            <View style = {styles.headerStyle}>                              
                <View >
                    <TouchableOpacity onPress={navigationToBack}>
                        <Feather name= 'arrow-left' size = {28} color={colorsStyle.secondaryColor}></Feather>
                    </TouchableOpacity>                      
                </View>
                <View style = {styles.containerTitle}>
                        <Text style = {styles.title}>{serviceTitle}</Text>
                        {/* <Text style = {styles.subTitle}>{this.state.subTitleForm}</Text> */}
                </View>
                <View style ={{width:28}}/>
            </View>
            <Slideshow 
                        dataSource={[
                            { url:'http://placeimg.com/640/480/any' },
                            { url:'http://placeimg.com/640/480/any' },
                            { url:'http://placeimg.com/640/480/any' }
                        ]}
                        height = {180}
                        containerStyle ={styles.slideContainer} 
                        overlay = {false}
                        />
               

              <View style ={styles.detailContainer}>
                  <ScrollView>
                    {/* Title Service */}
                    <View style={styles.detailTitleContainer}>
                        <Text style={styles.title}>Serviço do Seu Xé</Text>
                        <Rating  type = {'star'}  style={styles.rating} imageSize = {15} />                      
                    </View>
                    {/* description service */}
                    <View style={styles.descServiceContainer}>
                        <Text style={{alignSelf:'center'}}>Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Quem manda na minha terra sou euzis! Per aumento de cachacis, eu reclamis. Leite de capivaris, leite de mula manquis sem cabeça.
                                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é. Atirei o pau no gatis, per gatis num morreus. Quem num gosta di mim que vai caçá sua turmis! Aenean aliquam molestie leo, vitae iaculis nisl.
                        </Text>
                    </View>
                        {/* contact service */}
                    <View style = {styles.contactContainer}>
                        <Text style = {styles.titleContact}>Contato</Text>
                        <Text style = {styles.textContact}>  - Email: richardmachado.93@outlook.com</Text>
                        <Text style = {styles.textContact}>  -Telefone:  98174-3885 <Icon name = {'whatsapp'} size = {20} style={styles.icon} color = {'green'}/></Text>                      
                    </View>
                        {/* address service */}
                    <View style = {styles.adressContainer}>
                        <Text style = {styles.titleContact}>Endereço</Text>
                        <Text style = {styles.textContact}><Icon name = {'home'} size = {20} style={styles.icon} color = {'orange'}/>  Rua Indepedência de Heliópolis,28</Text>
                        <Text style = {styles.textContact}>       Casa 02, proximo ao bar central</Text>                      
                    </View>
                    

                    <View style={styles.containerMap}>
                        <Text style = {styles.titleContact}>Localização</Text>
                        <MapView style= {styles.map}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                            }}
                                            
                        />
                    </View>
                    </ScrollView>
                </View>
            </View>
    )
}

export default index
