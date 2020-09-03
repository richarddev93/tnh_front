import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';
const height_logo = ScreenHeight * 0.28;


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex:0.4,
        justifyContent:'flex-end',
        alignItems:'flex-start',
        
    },
    title :{
      fontSize:30,
      fontWeight:'700',
      color:'#fff',
      marginLeft:8,
      marginBottom:35
    } ,
    inputs:{
        width: '90%',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#555',  
        margin: 15,
        padding: 10,
        fontSize:  17,
        backgroundColor: '#fff'
        
    },
    containerTitle:{
        justifyContent: 'center',
        alignItems: 'center',
        margin :30   
    },

    footer: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#f3f5f6',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingVertical:50,
        paddingHorizontal:30,

    },
    input2: {
        flex:1,
    width: '100%',
    height: 45, 
    marginHorizontal: 10,
    paddingVertical: 3,
    fontSize:  18,
    backgroundColor: '#f3f5f6',
    marginVertical:5

    },
    text :{
        fontSize:22,
        marginTop:1,
        color:'gray'
        
    } ,
   button :{
       width:'100%',
       height:50,
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row',
       borderRadius: 5,
       marginVertical:10
   },
   buttonText :{
       fontSize:18,
       color:'#fff'
       
   },
   buttonContainer :{
       marginTop:15,
       width:'100%'

   },
   inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
searchIcon: {
    padding: 10,
},
input3: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},

})
