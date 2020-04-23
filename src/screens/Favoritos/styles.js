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
    containerItem :{
        flexDirection:'row',
        borderRadius : 3,
        borderWidth :1,
        borderWidth : 0.5,
        borderColor :'gray',
        padding :3,
        marginBottom :3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,



        
    },
    containerDetail:{
        justifyContent:'center',
        padding : 2,
        flex:1

    },

    image :{
        width:80,
        height :80,
        padding:5,
        marginRight : 3
    },
    containerServiceInfo :{
        flexDirection : 'row',
        flex:2

    },
    infoText :{
        flex:3,
        flexDirection :'column',
        alignContent : 'center',
    },
    containerServiceInfo3 :{
        flex:1,
        flexDirection :'column',
        alignContent:'center',
        alignItems : 'center',
        justifyContent : 'center',
    }
    


})