import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

class barCad extends Component {
   render(){ 
   return(
   <View style ={styles.container}>
        <View style = {styles.ball}></View>
        <View style = {styles.ball2}></View>
        <View style = {styles.ball3}></View>
        <View style = {styles.ball4}></View>
    </View>
    )
   }
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ball: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: commonStyles.colors.primary
    },
    ball2: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: commonStyles.colors.secondary
    },
    ball3: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: commonStyles.colors.secondary
    },
    ball4: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: commonStyles.colors.secondary
    },

})

export default barCad