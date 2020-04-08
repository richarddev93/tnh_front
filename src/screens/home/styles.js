import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight+10,
        backgroundColor: '#F1E9E9',
        flex:1
    },
    conteudo:{
        marginTop: 20,
        paddingHorizontal: 20,
    },
    containerHeader:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    containerText:{
        alignItems: 'baseline',
        justifyContent: 'space-around'
    },
    categorias:{
        marginTop: 20,

    },
    caixaCategoria:{
        height: 150,
        width: 150,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#AAA',
    
    },
    footer:{
        flex: 1,
        width: '100%',
        backgroundColor: commonStyles.colors.secondary,
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        position: 'relative',
    },
    footerContent:{
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    /* ===== TEXTOS ===== */
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold' 
    },
    textCategorias: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    Title:{
        fontSize: 20,
        marginTop: 10,
        marginBottom: 25,
        fontWeight: 'bold'
    },
    footerText:{
        color: '#fff',
        fontSize: 15,
        marginTop: 2,
    },
    /* ===== INPUT's ===== */  
    input:{
        backgroundColor: '#DCDCDC'
    }
})