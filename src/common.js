import {Alert} from 'react-native'


let server = ''
const teste = true //Chave para torcar de servidor

const colorsStyle = {
    primaryColor : "#f9aa33",
    primaryLightColor : "#ffdc65",
    primaryDarkColor : "#c17b00",
    secondaryColor : "#0f6aad",
    secondaryLightColor : "#5798df",
    secondaryDarkColor : "#00407d",
    primaryTextColor : "#000000",
    secondaryTextColor : "#ffffff"
}

if (teste) {
    server ='http://10.0.1.114:8000/api/' 
}else{
    server ='https://tnh-webservice.herokuapp.com/api/' 
}

function showError (err){
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso', msg)
}

// function useFetch  (url) {
// const data
//     return {data}
// }

export {server,showError, showSuccess,teste,colorsStyle}
