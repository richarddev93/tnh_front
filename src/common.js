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
    server ='http://10.0.1.102:8000/api/' 
    // server ='http://10.0.1.114:8000/api/' 
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


const geraUsername = (nome,qtdCaract) =>{

    const BASE_STRING = "abcdefghijklmnopqrstuvxwyz#@!$%&ABCDESFGHIJKLMNOPKRSTUVZWYZ0123456789"
    
    const getIntRandom =(min,max) =>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let aux=""

    for (let i=0;i<qtdCaract;i++){
      aux += BASE_STRING[getIntRandom(0,BASE_STRING.length)];
    }
    
    aux = ` ${nome}_${aux}`
    return aux;

}

export {server,showError, showSuccess,teste,colorsStyle,geraUsername}
