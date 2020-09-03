import axios from 'axios';
import { GOOGLE_GEOCODING_API_KEY } from 'react-native-dotenv';


const apiGoogle = 'https://maps.googleapis.com/maps/api/';
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
        const response = await axios.get(`${apiGoogle}geocode/json?address=${cep}&key=${GOOGLE_GEOCODING_API_KEY}`);
        //console.log(response.data);
        lat = response.data.results[0].geometry.location.lat;
        lng = response.data.results[0].geometry.location.lng;
        console.log("OK API")
        } catch (error) {
        console.log('error busca latlog - api-other',error)
    }
    return {lat,lng} 
}

export const getDistanceGoogle = async (origin,destination) =>{
    let distance ='';
    let duration ='';
     //https://maps.googleapis.com/maps/api/distancematrix/json?units=metric
     //&origins=-23.6204458,-46.5903713
     //&destinations=-23.6192913%2C-46.5903568
     if ( typeof origin =='undefined'|| typeof destination == 'undefined')  {
            return null
     }
    //  console.log("origin,destination");
    //  console.log(origin);
    //  console.log(destination);


     
    try {
        const response = await axios.get(`${apiGoogle}distancematrix/json?units=metric&origins=${origin.latitude},${origin.longitude}&destinations=${destination.latServ}%2C${destination.lngServ}&key=${GOOGLE_GEOCODING_API_KEY}`);
        //console.log(response);

        if ( response.status = "OK") {
            distance = response.data.rows[0].elements[0].distance.text
            duration = response.data.rows[0].elements[0].duration.text

        }
        console.log("OK API GOOGLE DISTANCE")
        } catch (error) {
        console.log('error busca distancia google - api-other',error)
    }
    return {distance,duration} 
}



