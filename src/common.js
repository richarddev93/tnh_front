import {Alert} from 'react-native'

const server ='https://tnh-webservice.herokuapp.com/api/cadastro/login/' 

function showError (err){
    Alert.alert('Ops! Ocorreu um Problema!', `Mensage: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso', msg)
}

export {server,showError, showSuccess}