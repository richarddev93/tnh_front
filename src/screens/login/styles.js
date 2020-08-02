import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems :'center'
    },

    background:{
        flex:1,
    },

    conteudo: {
        justifyContent:'center',
        alignItems: 'center',
        marginBottom :25 
    },

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

    containerButton:{
        margin: 15,        
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20 
        },

    button: {
        width: 320,
        height: 45,
        backgroundColor: commonStyles.colors.secondary,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 5,

    },
    buttonDisable: {
        width: 320,
        height: 45,
        backgroundColor: commonStyles.colors.disabled,
        color: commonStyles.font.color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 5,
        

    },
    textoButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff',
    },

    logo: {
        width: 100,
        height: 100,
    },

    subTitle:{
        fontSize: 45,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: -220,
        padding: 0,
        
    },
    
    title1: {
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color : '#344955'  
    },

    title2: {
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color : '#344955'
       
    },

    containerTitle:{
        justifyContent: 'center',
        alignItems: 'center',
        margin :30   
    },

    spinnerTextStyle: {
        color: '#FFF',
      },
      input2: {
        width: '90%',
        height: 50, 
        marginHorizontal: 10,
        padding: 5,
        fontSize:  17,
        backgroundColor: '#fff'
        
    },
    inputPassword: {
        width: '85%',
        height: 50, 
        paddingLeft: 5,
        fontSize:  17,
        backgroundColor: '#fff',
        // borderLeftWidth:0
        
        
      },
      buttonShowPass :{
        marginVertical:6,
        width:'14%',
        height:52,
        borderColor :'#344955',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius : 4,
        borderBottomRightRadius : 4,
        paddingRight : 5,
        backgroundColor: '#344955'
        // borderLeftWidth:0
  
      },
      containerPass :{
      width:'90%',
      flexDirection:'row'
  
    },

    })