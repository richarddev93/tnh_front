import {Alert} from 'react-native'


let server = ''
const teste = true //Chave para torcar de servidor

if (teste) {
    server ='http://192.168.0.100:8000/api/' 
}else{
    server ='https://tnh-webservice.herokuapp.com/api/' 
}

function showError (err){
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso', msg)
}

export {server,showError, showSuccess}