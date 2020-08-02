import React,{useState,useEffect}from 'react'
import { AsyncStorage,View, Text,Image,TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import Item from '../../components/item-servicos/index'
import api from '../../services/api'
import Spinner from 'react-native-loading-spinner-overlay';




export default Index = () => {

    const navigation = useNavigation()
    const [ services,setServices ] = useState([])
    const [loading,setLoading] = useState(true)
    const [userid,setUserId] = useState(0)


    function navigateToDetailService (service) {
        navigation.navigate('Detail',{ service });
    }
   const  _retrieveData = async () => {
       let dados_user = null
        try {
          let value = await AsyncStorage.getItem('dados_usuario');
          if (value !== null) {
              //console.log('value',value)
            dados_user = JSON.parse(value)
            setUserId(dados_user.id)
          }

          return dados_user
        } catch (error) {
          console.log("34 - *********Favoritos",error)
        }
      }

    async function loadServices(){

        const dados_user =  await _retrieveData()
        //console.log(dados_user,"dados user")
        setLoading(true);
        try {
            const response = await api.get('servico/servicosfavoritos/'+dados_user.id+'/',{
                headers: { 
                    Authorization: `Token ${dados_user.token}`,
                    'Content-Type': 'application/json',
                }
            })
          // console.log(response.data)
           setServices( response.data )
          
        } catch (error) {
            console.log("74 - Favoritos",error)
        }
        setLoading(false);
    }
    async function removeFavorite(nomefantasia){
        Alert.alert(String(userid),String(nomefantasia))
    }

    useEffect(() => {
        loadServices()
    }, [])
    
    return (
        <View style = {styles.container}>
            <Spinner
                //visibility of Overlay Loading Spinner
                visible={loading}
                //Text with the Spinner 
                textContent={'Carregando...'}
                size = {'large'}
                animation = {'fade'}
                //Text style of the Spinner Text
                textStyle={styles.spinnerTextStyle}
            />
            <View style = {styles.headerStyle}>                    
                <View >
                    <TouchableOpacity onPress={()=>Alert.alert("Voltando")}>
                        <Text style = {styles.title}>Categorias</Text>
                    </TouchableOpacity>                      
                </View>
                <View style = {styles.containerTitle}>
                </View>
                <View >
                    <MaterialCommunityIcons name = {'filter'}  size = {28} style={styles.icon} color = {'#344955'}/>
                </View>
            </View>
            {services.length != 0 
                ?
                <FlatList
                    data ={services}
                    style = {styles.list}
                    keyExtractor={service => String(service.id)}
                    showsVerticalScrollIndicator = {false}
                    renderItem ={ ({item:service}) =>(
                        <TouchableOpacity onPress ={() => navigateToDetailService( service )}>
                            <Item 
                                service = {service} 
                                handleClick = {() => Alert.alert("Em Desenvolvimento")}
                                shimmerLoading ={!loading}
                            />
                        </TouchableOpacity>
                    )}
                />
                :
                <View style={styles.nocontent}>
                    <Text>Adicione um serviço a sua lista de favoritos</Text>
                </View>    
                    }
        </View>
    )
}


