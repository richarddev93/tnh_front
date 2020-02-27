import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
} from 'react-native'


import Header from '../components/components-menu/Header'
import Content from '../components/components-menu/Content'

export default class Home extends Component {
   
    
    render(){
        
        return(
          <View style = {styles.container} >
            <Header/>
            <Content/>  
          </View> 
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F8F8FF',
        flex: 1
    }
})
