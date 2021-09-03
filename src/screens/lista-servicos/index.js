import React,{useState,useEffect}from 'react'
import { AsyncStorage,View, Text,Image,TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import {useNavigation, useRoute} from '@react-navigation/native'
import Item from '../../components/item-servicos/index'
import api from '../../services/api'
import Spinner from 'react-native-loading-spinner-overlay';




export default Index = () => {

    const navigation = useNavigation()
    const [ services,setServices ] = useState([])
    const [loading,setLoading] = useState(true)
    const [userid,setUserId] = useState(0)
    const [titleCategory, setTitleCategory] = useState("categoria")
  
    const route = useRoute();

    
    function navigateToDetailService (service) {
        navigation.navigate('Detail',{ service });
    }
    const  _retrieveData = async () => {

        try {
            const query = route.params.category;
            // console.log("query",query.desc);
            // console.log("query",query.id);

          return query
        } catch (error) {
          console.log("34 - ********* List Services",error)
        }
      }

    async function loadServices(){

        const query =  await _retrieveData()
        console.log(query.id)
        const url = 'servico/servicos/'
        
        setTitleCategory(query.desc);
        const options = { params : {categoria : query.id} }
        setLoading(true);
        try {

            const response = await api.get(`${url}`, options)
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
                       
                    </TouchableOpacity>                      
                </View>
                <View style = {styles.containerTitle}>
                    <Text style = {styles.title}>{titleCategory}</Text>
                </View>
                <View >
                    <MaterialCommunityIcons name = {'arrow-bottom-left-thick'}  size = {28} style={styles.icon} color = {'#344955'}/>
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