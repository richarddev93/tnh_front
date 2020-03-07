import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
} from 'react-native'


import Header from '../components/components-menu/Header'
import Content from '../components/components-menu/Content'
import Best from '../components/components-menu/Best'

export default class Home extends Component {
   
    render(){
        return(
          <View style = {styles.container} >
            <Header/>
            <Content/>  
            <Best/>
          </View> 
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F1E9E9',
        flex: 1
    }
})
