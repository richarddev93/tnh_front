import React from 'react'
import { View, Text,Image,TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import Item from '../../components/item-servicos/index'

export default Index = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.headerStyle}>                    
                <View >
                    <TouchableOpacity onPress={()=>Alert.alert("Voltando")}>
                        <Feather name= 'arrow-left' size = {28} color='#F9AA33'></Feather>
                    </TouchableOpacity>                      
                </View>
                <View style = {styles.containerTitle}>
                    <Text style = {styles.title}>Favoritos</Text>
                        {/* <Text style = {styles.subTitle}>{this.state.subTitleForm}</Text> */}
                </View>
                <View >
                <MaterialCommunityIcons name = {'filter'}  size = {28} style={styles.icon} color = {'#344955'}/>
                </View>
            </View>
            <ScrollView>
                <Item></Item>
            </ScrollView>
        </View>
    )
}


