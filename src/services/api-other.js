import axios from 'axios'

const buscarEnd = async (cep)=>{
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


export default buscarEnd