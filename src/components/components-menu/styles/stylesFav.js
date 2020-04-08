import {StyleSheet,Dimensions} from 'react-native'
import commonStyles from '../../../commonStyles'
let ScreenWidth = Dimensions.get('window').width
let ScreenHeight = Dimensions.get('window').height
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight + 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

