import React,{useState,useEffect}from 'react'
import { AsyncStorage,View, Text,Image,TouchableOpacity, Alert,ImageBackground } from 'react-native'
import styles from './styles'
import {Feather,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import Item from '../../components/item-servicos/index'
import api from '../../services/api'
import Spinner from 'react-native-loading-spinner-overlay';




export default Index = () => {

    const navigation = useNavigation()
    const [categories,setCategories ] = useState([])
    const [loading,setLoading] = useState(true)
    const [userid,setUserId] = useState(0)

    const image = { uri: "https://reactjs.org/logo-og.png" };
    function navigateToListService (category) {
        navigation.navigate('ListService',{ category });
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
          console.log("34 - _retrieveData() - Categorias",error)
        }
      }
    const NUM_COLUMNS = 2;
    async function loadCategories(){

        const dados_user =  await _retrieveData()
        //console.log(dados_user,"dados user")
        setLoading(true);
        try {
            const response = await api.get('servico/categorias/',{
                headers: { 
                    Authorization: `Token ${dados_user.token}`,
                    'Content-Type': 'application/json',
                }
            })
          console.log(response.data)
           setCategories( response.data )
          
        } catch (error) {
            console.log("74 - LoadCategories",error)
        }
        setLoading(false);
    }

    useEffect(() => {
        console.log('Entrando em Categorias ...')
        loadCategories()
    }, [])
    
    
    return (
        <View style = {styles.container}>
            <Spinner
                //visibility of Overlay Loading Spinner
                visible={loading}
                //Text with the Spinner 
                textContent={'Carregando Categorias...'}
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
            <View style={styles.containerList}>
                {categories.length != 0 
                    ?
                    <FlatList
                            data ={categories}
                            keyExtractor={categoria => String(categoria.id)}
                            showsVerticalScrollIndicator = {false}
                            renderItem ={ ({item:categoria}) =>(
                                
                                <TouchableOpacity 
                                    onPress ={() => alert( "Indo para a Lista de serviços da categorias" )}
                                    key={categoria.id} style={styles.containerItem}>
                                      <ImageBackground source = {{uri : categoria.img} } style = {styles.background}>
                                        <Text style={styles.itemText}>{categoria.desc}</Text>
                                      </ImageBackground>
                                </TouchableOpacity>
                            )}
                            numColumns ={NUM_COLUMNS}
                        />
                    :
                    <View style={styles.nocontent}>
                        <Text>Adicione um serviço a sua lista de favoritos</Text>
                    </View>  
                }
            </View>

        </View>
    )
}


