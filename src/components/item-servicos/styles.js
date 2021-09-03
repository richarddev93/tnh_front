import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';

export default StyleSheet.create({

    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 18,
        color: '#000',
        padding: 1,
        fontWeight : 'bold'
        
    },
    titleShimmer:{
        height:18        
    },
    titlevalue :{
        fontSize:16,
        color: '#344955',
        padding: 1,
    },
    titleinfo :{
        fontSize: 14,
        color: '#000',
        padding: 1,

    },
    titleinfov :{
        fontSize:8,
        color: '#344955',
    },
    titleDetailContainer :{
        flexDirection:'row',
        justifyContent : 'space-between'
    },
    containerItem :{
        flexDirection:'row',
        alignItems:'center',
        borderRadius : 3,
        borderColor :'gray',
        backgroundColor:'#FFF',
        paddingHorizontal :9,
        marginBottom :10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,       
    },
    containerDetail:{
        justifyContent:'center',
        padding : 2,
        flex:1,
        marginLeft : 3,
    },
    image :{
        width:80,
        height :80,
        padding:5,
        marginRight : 3,
        borderRadius : 3,
    },
    containerServiceInfo :{
        flexDirection : 'row',
        flex:2,        
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
    },
    rating:{
        alignContent:'flex-start',
        alignItems :'flex-start'
    },
    buttonFavoritesShimmer :{
        height:35,
        width :35
    },
    infoTextShimmer :{
        height:45,
        marginTop:5
    },
    imageShimmer :{
        width:80,
        height :80,
        marginRight : 3,
        borderRadius : 3,
    },
    // containerButtonFavorites :{
    //     borderColor:'black',
    //     borderWidth :2
    // }
    
    
})