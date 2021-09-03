import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        padding :10
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
    marginTop : 15,
   } 
})