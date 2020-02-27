import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Plataform,
    Image
} from 'react-native'



import Icon from 'react-native-vector-icons/FontAwesome'



class Header extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.rowContainer}>
                    <Icon style = {styles.icon} name= {'list-ul'} size = {30} color = {'#000'}/>
                <View style =  {styles.rowContainer2}>   
                   <View style = {styles.columnContainer}>
                    <Text style = {styles.title}> Olá Richard </Text>
                    <Text style = {styles.subTitle}> Perfil </Text>
                   </View> 
                    <Icon name = {'user'} size = {30} color = {'#000'}/>
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /* Containers */
    container: {
        marginTop: 5,
        padding: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowContainer2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
    },
    columnContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
    },

    /* Textos */
    title: {
        color: '#000',
        height: 30,
        fontSize: 20,
        marginTop: 20
    },
    subTitle: {
        color: '#000',
        height: 30,
        fontSize: 15,
        marginLeft: 50,
        marginBottom: 5
    },
    
})

export default Header