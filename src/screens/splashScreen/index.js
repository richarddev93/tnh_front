import React from 'react'
import { View, Text,Button, Alert,ImageBackground, Image,TouchableOpacity } from 'react-native'
import logo from '../../../assets/logo.png'
import fundo from '../../../assets/imgs/background/fundoDefinitivo.jpg'

import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from  'react-native-animatable';

const index = ({navigation}) => {
    return (
        <View style= {styles.container} >
            <ImageBackground source={fundo} style={{width: '100%', height: '100%'}}>

            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    easing="linear"
                    source={logo}
                    style={styles.logo}
                    resizeMode='stretch'/>
                <Text style = {styles.title}>Tem no Helipa !</Text>
     
            </View>
            <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
                <Text style = {styles.title2}>O que você procura tem na quebrada!</Text>
                <Text style = {styles.text}>Entre com uma conta.</Text>
                <View style = {styles.button}>
                    <TouchableOpacity onPress ={ ()=> navigation.navigate('Login')}>
                        <LinearGradient
                            colors={['#ff920a','#F9AA33']}
                            style={styles.signin}
                        >
                            <Text style={styles.signinText}>Iniciar</Text>

                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
            </ImageBackground>

        </View>
    )
}

export default index
