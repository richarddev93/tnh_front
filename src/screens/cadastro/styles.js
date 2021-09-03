import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';
export default  StyleSheet.create({
    /* Containers */
      container: {
        flex: 1,
    },
    header: {
        flex:0.2,
        justifyContent:'flex-end',
        alignItems:'flex-start',
        
    },
    
    footer: {
      flex:1,
      // alignItems:'center',
      backgroundColor:'#f3f5f6',
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      paddingVertical:50,
      paddingHorizontal:30,

  },
    headerStyle: {
        flexDirection:'row',
        marginTop: 1,
        marginLeft:5,
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
      
      // alignItems: 'center',
      // alignContent:'center',
      // padding: 10,
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
        color: 'gray',
        
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
      flexDirection:'row',
        height: 45,
        width: '90%',
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent:'space-evenly'
 
    },
   
    buttonText:{
        fontSize: 15,
        color: '#FFF',

    },
    radioGroup :{
        flexDirection : 'row',
        alignItems: 'center'
    },
    buttonContainer: {
      marginTop:20,
        padding: 5,
        alignItems:'center'
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
