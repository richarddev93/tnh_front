import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{      
        flex:1,
    },
    detailContainer :{
        flex:1,
        marginVertical :10,
        marginHorizontal :5,
        padding:10,
        backgroundColor :'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,  
        justifyContent:'center'     
        
    },
    headerStyle: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:Constants.statusBarHeight + 10 ,
        marginBottom : 10
        
    },
    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
        /* Textos */
    title:{
        fontSize: 20,
        color: '#344955',
        fontWeight : 'bold'
    },
    containerSlider :{
        padding:10,
        marginVertical:5,
        borderColor :'red',
        borderWidth : 1,
        justifyContent :'center'
    },
    detailTitleContainer :{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:2,
    },
    descServiceContainer :{
        flex:1,
        marginVertical:5,
    },
    contactContainer :{
        marginVertical:5,
        padding :5,
        justifyContent :'center'

    },
    containerMap :{
        padding :5,
        justifyContent :'center',
        alignItems:'center'

    },
    map :{
        marginTop:5,
        width:ScreenWidth - 50,
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,   
    },
    slideContainer :{       

    },
    rating:{
        justifyContent:'center',
    },
    titleContact:{
        fontSize:16,
        fontWeight:'bold'

    },
    textContact:{
        fontSize:15,
    },
    subHeader :{

    },
    siteUrl :{
        color:'blue'

    }


})