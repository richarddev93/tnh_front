import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';
export default  StyleSheet.create({
    /* Containers */
    container:{
       flex:1  ,      
       paddingHorizontal:10,
       justifyContent: 'space-between',
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
    containerForm: {
      
      alignItems: 'center',
      alignContent:'center',
      padding: 10,
      // justifyContent:'center'
    
    },
    containerSelect :{
      justifyContent:'center',
      alignItems:'center'

    },
    /* Textos */
    title:{
        fontSize: 20,
        color: '#344955',
        padding: 1,
    },
    subTitle:{
        fontSize: 25,
        color: commonStyles.colors.primary
    },
    label:{
        fontSize: 15,
        color: '#344955',
        
    },
    textPass: {
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 120,
        marginTop: 10
    },
    /* Input */
    input: {
        width: '90%',
        height: 50, 
        marginHorizontal: 10,
        padding: 5,
        fontSize:  17,
        backgroundColor: '#fff'
        
    },
    inputPassword: {
      width: '80%',
      height: 50, 
      paddingLeft: 5,
      fontSize:  17,
      backgroundColor: '#fff',
      // borderLeftWidth:0
      
      
    },
    buttonShowPass :{
      marginVertical:6,
      width:'19%',
      height:52,
      borderColor :'gray',
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
     containerButton: {
        marginBottom:15,
        alignItems : 'center',
    },

    button:{
        height: 45,
        width: '80%',
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
 
    },
   
    buttonText:{
        fontSize: 15,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioGroup :{
        flexDirection : 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 15,
      },
      buttonInner: {
        marginBottom: 15,
      },
      labelText: {
        color: '#344955',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      item: {
        borderWidth: 1,
        borderColor: '#333',    
        backgroundColor: '#FFF',
      },
      label: {
        color: '#333'
      },
      itemSelected: {
        backgroundColor: '#333',
      },
      labelSelected: {
        color: '#FFF',
      },
      containerStyle:{
        flexWrap:'wrap',
        justifyContent:'center'
      },
      root: {
        maxWidth: 400,
        
      },

    });
