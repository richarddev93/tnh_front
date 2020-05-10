import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';

export default StyleSheet.create({
    container :{
        marginTop :10,
        marginHorizontal :2,
        padding:10,
        justifyContent:'center',
        borderColor : 'black',
        borderWidth : 2,
        
    },
    headerStyle: {
        flexDirection:'row',
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:Constants.statusBarHeight + 10 ,
        marginBottom : 10
        
    },
    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
        /* Textos */
    title:{
        fontSize: 20,
        color: '#344955',
        padding: 1,
        fontWeight : 'bold'
    },
    containerSlider :{
        padding:10,
        marginVertical:5,
        borderColor :'red',
        borderWidth : 1,
        justifyContent :'center'
    },
    containerDetail :{
        marginVertical:5,
        padding :10,      
        borderColor :'blue',
        borderWidth : 1,
        justifyContent :'center'

    },
    containerContact :{
        marginVertical:5,
        padding :10,
        borderColor :'green',
        borderWidth : 1,
        justifyContent :'center'

    },
    containerMap :{
        padding :10,
        marginVertical:5,
        borderColor :'yellow',
        borderWidth : 1,
        justifyContent :'center'

    },
    map :{
        width:ScreenWidth - 50,
        height: 300,
    }

})