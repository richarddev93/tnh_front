import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        padding :10,
    },
    containerList :{
        flex:1,
    },
    headerStyle: {
        flexDirection:'row',
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:Constants.statusBarHeight,
        marginBottom : 10
        
    },
    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        color: '#344955',
        padding: 1,
        
    },
    titleDetailContainer :{
        flexDirection:'row',
        justifyContent : 'space-between'
    },
   list :{
    marginTop : 10,
   } ,
   containerItem :{
       backgroundColor:'#34495595',
       padding:2,
       
   },
   itemText :{
       fontSize: 18,
       fontWeight:'bold',
       color:'#fff',
       marginLeft:3,
   },
   background :{
    flex:1,
    // alignItems:'center',
    margin:5,
    justifyContent:'flex-end',
    height:80,
    borderRadius : 3,
    borderColor :'gray',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,    

   }
})