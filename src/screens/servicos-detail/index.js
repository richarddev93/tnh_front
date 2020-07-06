import React ,{useState,useEffect}from 'react'
import { View, Text, TouchableOpacity, Slider, Linking,AsyncStorage } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute } from '@react-navigation/native'
import MapView from 'react-native-maps'
import styles  from './style';
import { colorsStyle } from '../../common'
import Slideshow from 'react-native-image-slider-show';
import { Rating, AirbnbRating } from 'react-native-ratings';
import buscarEnd  from '../../services/api-other'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler'
import * as MailComposer from 'expo-mail-composer';


const index = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const service = route.params.service;
    //console.log("Serviços",service);
    const [serviceTitle,setServiceTitle] = useState('Serviço');
    const [username,setUsername] = useState('')

    const cep = service.endereco.cep
    
    const retornaEnd = async (cep)=>{
        const end = await buscarEnd(cep)
        console.log("End:v",end);
        if (end != '' ) {
          return end;          
        } else {
            return   '';         
        }
    }

    const  _retrieveData = async () => {
        let dados_user = ""
         try {
           let value = await AsyncStorage.getItem('dados_usuario');
           if (value !== null) {
               //console.log('value',value)
             dados_user = JSON.parse(value)
             setUsername(dados_user.perfil.nome_completo)
           }
         return dados_user
         } catch (error) {
           console.log("37 -Detail-AsyncStorage",error)
         }
       };
     //  

     useEffect(() => {
         console.log('Puxando os dados');
         console.log('CEP',retornaEnd(cep));
        _retrieveData();   
     }, [])
   
    const imagens = service.imagem_servicos; 
    const urls = extractUrlImage(imagens);
    const message =`Olá ${service.nomefantasia}, me chamo ${username}. Te encontrei pelo Tem no Helipa.` 
    function extractUrlImage(imagens) {
        let url =[]
        imagens.map( (image)=>{
            url.push({url:image.imagem})
        });
        //url.map((i) => console.log(i));

        return url
    }

    function sendEmail () {
        MailComposer.composeAsync({
            subject:`TNH: Dúvidas`,
            recipients: [service.email.trim()],
            body:message,
        })

    }

    function sendWhats () {
        Linking.openURL(`whatsapp://send?text=${message}&phone=${5511957242030}`);
    }

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
                        // dataSource={[
                        //     { url:'http://placeimg.com/640/480/any' },
                        //     { url:'http://placeimg.com/640/480/any' },
                        //     { url:'http://placeimg.com/640/480/any' }
                        // ]}
                        dataSource ={urls}
                        height = {180}
                        containerStyle ={styles.slideContainer} 
                        overlay = {false}
                        />
               

              <View style ={styles.detailContainer}>
                  <ScrollView>
                    {/* Title Service */}
                    <>
                        <View style={styles.detailTitleContainer}>
                            <Text style={styles.title}>{service.nomefantasia}</Text>
                            <Rating  type = {'star'}  style={styles.rating} imageSize = {15} />                      
                        </View>
                        <Text>{service.categoria[0]}</Text>
                        { service.site != "" ? <Text>{service.site}</Text> : null }
                    </>
                    {/* description service */}
                    <View style={styles.descServiceContainer}>
                        <Text style={{alignSelf:'center'}}>{service.desc}</Text>
                    </View>
                        {/*schedule service */}
                    <View style = {styles.contactContainer}>
                        <Text style = {styles.titleContact}>Horário</Text>
                        {service.servico_horario.map( (horario) =>{
                            return ( <Text style = {styles.textContact}>  - {horario}</Text>)
                        })}
                       
                    </View>
                        {/* contact service */}
                    <View style = {styles.contactContainer}>
                        <Text style = {styles.titleContact}>Contato</Text>
                        <TouchableOpacity style={styles.containerButton} onPress = { () => sendEmail()}>
                            <Text style = {styles.textContact}>  - Email: {service.email}</Text>
                        </TouchableOpacity>    
                        <TouchableOpacity style={styles.containerButton} onPress = {() => sendWhats()}>
                            <Text style = {styles.textContact}>  -Telefone: {service.servico_telefone[0]} <Icon name = {'whatsapp'} size = {20} style={styles.icon} color = {'green'}/></Text>                      
                        </TouchableOpacity>
                    </View>
                        {/* address service */}
                    <View style = {styles.adressContainer}>
                        <Text style = {styles.titleContact}>Endereço</Text>
                    <Text style = {styles.textContact}><Icon name = {'home'} size = {20} style={styles.icon} color = {'orange'}/>  {service.endereco.lograd +", "+ service.endereco.num}</Text>
                    <Text style = {styles.textContact}>       {service.endereco.compl}</Text>                      
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
