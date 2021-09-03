import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';


const height_logo = ScreenHeight * 0.28;

export default StyleSheet.create({
    container:{
        flex:1,
    },
    header: {
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        
    },
    footer: {
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingVertical:50,
        paddingHorizontal:30,

    },
    logo:{
        height:height_logo,
        width:height_logo
        
    },
    titleDetailContainer :{
        flexDirection:'row',
        justifyContent : 'space-between'
    },
   title :{
     fontSize:45,
     fontWeight:'700',
     color:'#fff'
     
   } ,
   title2 :{
     fontSize:28,
     fontWeight:'700',
     color:'#05375a'
     
   } ,
   text :{
     fontSize:22,
     marginTop:1,
     color:'gray'
     
   } ,
   signin :{
       width:200,
       height:40,
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row',
       borderRadius: 5,
        alignItems: 'center',
   },
   signinText :{
       fontSize:18,
       color:'#fff'
       
   },
   button :{
       alignItems:'flex-end',
       marginTop:30
   }

})