import React ,{useState}from 'react'
import { View, Text, TouchableOpacity, Slider } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import MapView from 'react-native-maps'
import styles  from './style';

const index = () => {

    const navigation = useNavigation()

    const [serviceTitle,setServiceTitle] = useState('Serviço');
   
    function navigationToBack (){
        navigation.goBack()        
    }

    return (
        <View>
            {/*Header */}
            <View style = {styles.headerStyle}>                              
                <View >
                    <TouchableOpacity onPress={navigationToBack}>
                        <Feather name= 'arrow-left' size = {28} color='#F9AA33'></Feather>
                    </TouchableOpacity>                      
                </View>
                <View style = {styles.containerTitle}>
                        <Text style = {styles.title}>{serviceTitle}</Text>
                        {/* <Text style = {styles.subTitle}>{this.state.subTitleForm}</Text> */}
                </View>
                <View style ={{width:28}}/>
            </View>
            <View style = {styles.container}>
                
                <View style = {styles.containerSlider} >
                    <Text style = {{fontSize: 30 } }> Photos </Text>
                </View>

                <View style = {styles.containerDetail}>
                    <Text style = {{fontSize: 30 } }> Detalhes </Text>
                </View>
                <View style={styles.containerContact}>
                    <Text style = {{fontSize: 30 } }> Contato </Text>
                </View>
                <View style={styles.containerMap}>
                    <Text style = {{fontSize: 30 } }> Map </Text>
                    <MapView style= {styles.map}
                       initialRegion={{ latitude: 23.619115,
                                        longitude: 46.590329,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421, }}
                                        
                    />
                </View>

            </View>
        </View>
    )
}

export default index
