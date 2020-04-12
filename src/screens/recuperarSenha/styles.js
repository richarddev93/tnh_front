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
      marginBottom : 40,
      marginTop :40
      // justifyContent:'center'
    
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
    input: {
        width: '90%',
        height: 50, 
        marginHorizontal: 10,
        padding: 5,
        fontSize:  17,
        backgroundColor: '#fff',
        marginBottom : 15
        
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
    });
