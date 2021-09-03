import React ,{useState,useEffect}from 'react'
import { View, Text, TouchableOpacity, Slider, Linking,AsyncStorage,Image } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute } from '@react-navigation/native'
import MapView ,{ Marker ,Callout} from 'react-native-maps'
import * as Permissions from 'expo-permissions';
import styles  from './style';
import { colorsStyle } from '../../common'
import Slideshow from 'react-native-image-slider-show';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {getDistanceGoogle,getDataAddressGoogle}  from '../../services/api-other'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler'
import * as MailComposer from 'expo-mail-composer';



const index = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const service = route.params.service;
    // console.log("Serviços",service);
    const [serviceTitle,setServiceTitle] = useState('Serviço');
    const [username,setUsername] = useState('')
    const [loading,setLoading] = useState(false)
    const [region,setRegion ] = useState({
         
        latitude: -23.6176921,
        longitude: -46.5912418,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0031

    });

    const [regionUser,setRegionUser ] = useState(null);
    const [distanceUser,setDistanceUser] = useState(null);

    const imagens = service.imagem_servicos; 
    const urls = extractUrlImage(imagens);
    const message =`Olá ${service.nomefantasia}, me chamo ${username}. Te encontrei pelo Tem no Helipa.` 
    const cep = service.endereco.cep

    async function _getLocation() {
        let latServ = region.latitude
        let lngServ = region.longitude
        const { status } = await Permissions.getAsync(Permissions.LOCATION);
        
        if ( status != 'granted' ) {
            const response = await Permissions.askAsync(Permissions.LOCATION);
        }

        navigator.geolocation.getCurrentPosition(
           async ({coords: { latitude,longitude } }) => {
                setRegionUser({latitude,longitude,latitudeDelta: 0.0042,longitudeDelta: 0.0031});
                // console.log(latitude,longitude)
                let {distance,duration } = await getDistanceGoogle(
                                                {latitude,longitude},//Latlng usuário
                                                {latServ,lngServ});
                setDistanceUser({distance,duration})
                // console.log(distance,duration);
            },//success
            () => {},//failure
            {
                timeout:2000,
                enableHighAccuracy:true,
                maximumAge:1000
            }


        );

    }

    const  _retrieveData = async () => {

         try {

            // _getLocation() ;
            
            //Puxa o nome do usuário
           let value = await AsyncStorage.getItem('dados_usuario');
           if (value !== null) {            
               value = JSON.parse(value);
               setUsername(value.perfil.nome_completo);
           }
        //    console.log(regionUser)
           // pegando as infos de localização do usuarip
            // let latUser = await regionUser.latitude;
            // let lngUser = regionUser.longitude;

           //busca latitude e longitude  do serviço
           console.log("distancia",distanceUser)
           let {lat,lng} =  await getDataAddressGoogle(cep);

           
           setRegion({
               latitude:lat,
               longitude:lng,
               latitudeDelta: 0.0042,
               longitudeDelta: 0.0031
            });
          

         } catch (error) {
           console.log("44 -Detail-AsyncStorage",error)
         }
    };

     useEffect(() => {
         setLoading(true);
         _retrieveData();   
         _getLocation() ;
     }, []);

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
    function sendWhats (number) {
        Linking.openURL(`whatsapp://send?text=${message}&phone=55${number}`);
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
                        <Text style = {styles.titleHeader}>{service.nomefantasia}</Text>
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
                    <View style={styles.subHeader}>
                        <View style={styles.detailTitleContainer}>
                            <Text style={styles.title}>{service.nomefantasia}</Text>
                            <Rating  startingValue={parseFloat(service.nota_media)} fractions ={1} readonly type = {'star'}  style={styles.rating} imageSize = {15} />                      
                        </View>
                        <Text>{service.categoria[0]}</Text>
                        { service.site != "" ? <Text style = {styles.siteUrl}>{service.site}</Text> : null }
                    </View>
                    {/* description service */}
                    <View style={styles.descServiceContainer}>
                        <Text>{"   "+service.desc}</Text>
                    </View>
                        {/*schedule service */}
                    <View style = {styles.contactContainer}>
                        <Text style = {styles.titleContact}>Horário</Text>
                        {service.servico_horario.map( (horario,index) =>{
                            return ( <Text  key = {index} style = {styles.textContact}>  - {horario}</Text>)
                        })}
                       
                    </View>
                        {/* contact service */}
                    <View style = {styles.contactContainer}>
                        <Text style = {styles.titleContact}>Clique para entrar em contato</Text>
                        <TouchableOpacity style={styles.containerButton} onPress = { () => sendEmail()}>
                            <Text style = {styles.textContact}>  Email: {service.email}  <Icon name = {'envelope-o'} size = {20} style={styles.icon} color = {'blue'}/></Text>
                        </TouchableOpacity>    
                        <TouchableOpacity style={styles.containerButton} onPress = {() => sendWhats(service.servico_telefone[0])}>
                            <Text style = {styles.textContact}>  Telefone: {service.servico_telefone[0]}  <Icon name = {'whatsapp'} size = {20} style={styles.icon} color = {'green'}/></Text>                      
                        </TouchableOpacity>
                    </View>
                        {/* address service */}
                    <View style = {styles.adressContainer}>
                        <Text style = {styles.titleContact}>Endereço</Text>
                    <Text style = {styles.textContact}><Icon name = {'home'} size = {20} style={styles.icon} color = {'orange'}/>  {service.endereco.lograd +", "+ service.endereco.num}</Text>
                    <Text style = {styles.textContact}>       {service.endereco.compl}</Text>                      
                    </View>
                    

                    <View style={styles.containerMap}>
                    <Text style = {styles.titleContact}>Localização - {distanceUser == null ? '' : distanceUser.distance}/ {distanceUser ==null ? '' : distanceUser.duration}</Text>
                        <MapView style= {styles.map}
                            initialRegion={regionUser}
                            showsUserLocation 
                            loadingEnabled
                            rotateEnabled={false}
                            scrollEnabled={false}
                            zoomEnabled={false}
                            showsPointsOfInterest={false}
                            showsBuildings={false}>
                            <Marker 
                                coordinate ={ region }
                                image={require('../../../assets/marker3.png')}
                                >
                                    <Callout>
                                        <Text>{service.nomefantasia}</Text>
                                    </Callout>
                            </Marker>
                        </MapView>
                    </View>
                    </ScrollView>
                </View>
            </View>
        )
}

export default index
