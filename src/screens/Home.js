import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    SafeAreaView
} from 'react-native'


import Header from '../components/components-menu/Header'
import Content from '../components/components-menu/Content'
import Best from '../components/components-menu/Best'
import Footer from '../components/components-menu/Footer'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class Home extends Component {
   
    
    render(){
        return(
            <View style = {styles.container} >
                   <Text>DFSFDSDFSGA</Text>
             </View>  
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F1E9E9',
        flex:1
    }
})
