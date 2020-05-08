import React,{useState,useEffect}from 'react'
import { AsyncStorage,View, Text,Image,TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import Item from '../../components/item-servicos/index'
import api from '../../services/api'





export default Index = () => {

    const navigation = useNavigation()
    const [ services,setServices ] = useState([])
    const {loading,setLoading} = useState(false)
    const [userid,setUserId] = useState(0)


    function navigateToDetailService () {
        navigation.navigate('Detail')
    }
   const  _retrieveData = async () => {
       let dados_user = null
        try {
          let value = await AsyncStorage.getItem('dados_usuario');
          if (value !== null) {
              console.log('value',value)
            dados_user = JSON.parse(value)
            setUserId(dados_user.id)
          }

          return dados_user
        } catch (error) {
          console.log("34 - *********Favoritos",error)
        }
      }

    async function  loadFavoritos (){

        const dados_user =  await _retrieveData()
        let favoritos = null

        try {
            const response = await api.get('servico/favoritos/?user='+dados_user.id+'&is_active=true',{
                headers: { 
                    Authorization: `Token ${dados_user.token}`,
                    'Content-Type': 'application/json',
                }
            }
           )
           console.log("Responseee 54",response.data)
           favoritos = response.data
           return favoritos
        } catch (error) {
            console.log("Erro nos favoritos 54",error)
        }

    }
    async function loadServices(){

        const dados_user =  await _retrieveData()
        console.log(dados_user,"dados user")
        try {
            const response = await api.get('servico/servicosfavoritos/1/',{
            // const response = await api.get('servico/servicosfavoritos/'+dados_user.id+'/',{
                headers: { 
                    Authorization: `Token ${'bf6de4c43c98a7b5bf35c302120c02ff81be1963'}`,
                    'Content-Type': 'application/json',
                }
            })
            console.log(response.data)
           setServices( response.data )

        } catch (error) {
            console.log("74 - Favoritos",error)
        }

    }
    async function removeFavorite(nomefantasia){
        Alert.alert(String(userid),String(nomefantasia))
    }

    useEffect(() => {
       api.get('servico/servicosfavoritos/1/',{
            // const response = await api.get('servico/servicosfavoritos/'+dados_user.id+'/',{
                headers: { 
                    Authorization: `Token ${'bf6de4c43c98a7b5bf35c302120c02ff81be1963'}`,
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                setServices(res.data);
              })
              .catch(err => {
                console.log(err);
              })

        // loadServices()
    }, [])
    
    return (
        <View style = {styles.container}>
            <View style = {styles.headerStyle}>                    
                <View >
                    <TouchableOpacity onPress={()=>Alert.alert("Voltando")}>
                        <Text style = {styles.title}>Favoritos</Text>
                    </TouchableOpacity>                      
                </View>
                <View style = {styles.containerTitle}>
                </View>
                <View >
                    <MaterialCommunityIcons name = {'filter'}  size = {28} style={styles.icon} color = {'#344955'}/>
                </View>
            </View>
            <FlatList
                data ={services}
                style = {styles.list}
                keyExtractor={service => String(service.id)}
                showsVerticalScrollIndicator = {false}
                renderItem ={ ({item:service}) =>(
                    <Item service = {service} handleClick = {() => removeFavorite(service.id)}/>
                )}
            />
        </View>
    )
}


