import axios from 'axios';
import { GOOGLE_GEOCODING_API_KEY } from 'react-native-dotenv';

export const buscarEnd = async (cep)=>{
      //console.log(cep)
      let endereco = ''
    //   console.log(typeof cep)
    //   console.log(cep.length)
    //   console.log(cep)
    try{
        const res = await axios.get('https://viacep.com.br/ws/'+ cep+'/json/')
        //console.log('retorno CEP',res.data)
        endereco = res.data
    }catch(error){
        console.log('error busca cep - api-other',error)
    }
   return endereco     
}


export const getDataAddressGoogle = async (cep) =>{
    let lat ='';
    let lng ='';

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${GOOGLE_GEOCODING_API_KEY}`);
        //console.log(response.data);
        lat = response.data.results[0].geometry.location.lat;
        lng = response.data.results[0].geometry.location.lng;
        console.log("OK API")
        } catch (error) {
        console.log('error busca latlog - api-other',error)
    }
    return {lat,lng} 
}


