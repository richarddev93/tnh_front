import React, {Component} from 'react'
import {View, 
        Text,
        TouchableOpacity,
        KeyboardAvoidingView,
        Alert,
        AsyncStorage,
        ImageBackground
    } from 'react-native'
import Toast from 'react-native-root-toast';
import styles from './styles'
import * as Permissions from 'expo-permissions';
import { TagSelect } from 'react-native-tag-select-max';
import { CheckBox } from 'react-native-elements'
import {Feather} from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay';
import {  Item, Input } from 'native-base';
import * as Animatable from  'react-native-animatable';
import fundo from '../../../assets/imgs/background/fundoDefinitivo.jpg'
import { LinearGradient } from 'expo-linear-gradient';


import ValidaForm from  '../../validateForm'
import buscarEnd  from '../../services/api-other'
import api from '../../services/api'
import {showError,teste,geraUsername} from '../../common'

let initialState = null
if (teste) {
     initialState = {
        id           :  0,
        form         : null,
        valueButton  : '',
        username     : 'richafrd2022_22',
        email        : 'emafwil122@email.com.br',
        password     : '123456',
        password2    : '123456',
        is_staff     : false,
        nome_completo : 'Richard Machado',
        telefone      : '11981743885',
        cep           : '04235370',
        tpLograd :'R',
        logradouro    : 'Rua Independencia',
        num_lograd    :  '28',
        complemento   : 'CAsa 02',
        bairro        : 'Helipa',
        localidade :'São Paulo',
        uf:'SP',
        interesses    : '',
        tags:[{"id":6,"label":"Farmácias"},{"id":7,"label":"Confeitaria"},{"id":9,"label":"Farmácia"},{"id":13,"label":"Informática"},{"id":14,"label":"Restaurantes"}],
        termoUso:false,
        isloading:false,
        formValid: false,
        titleForm : 'Vamos Começar ?',
        subTitleForm:'Dados de Acesso',
        isloading:false,
        secureTextEntry:true,
        secureTextEntry2:true

    }
} else {
     initialState = {
        id           :  0,
        form         : null,
        valueButton  : '',
        username     : '',
        email        : '',
        password     : '',
        password2    : '',
        is_staff     : false,
        nome_completo : '',
        telefone      : '',
        cep           : '',
        tpLograd :'R',
        logradouro    : '',
        num_lograd    :  0,
        complemento   : '',
        bairro        : '',
        localidade :'São Paulo',
        uf:'SP',
        interesses    : '',
        tags:[],
        termoUso:false,
        isloading:false,
        formValid: false,
        titleForm : 'Vamos Começar ?',
        subTitleForm:'Dados de Acesso',
        isloading:false,
        secureTextEntry:true,
        secureTextEntry2:true,
    
    }
}
 export default class Form extends Component{

    state = {
        ...initialState
    }

    navigateToLogin = async () => {
    const { navigation,route } = this.props;
    //     console.log("Route",this.props);
    //     console.log(this.state.email);
    // route.refresh(this.state.email)    
    navigation.goBack();
    //.onSelect({ selected: true });
        await AsyncStorage.setItem('emaillogin', this.state.email);
        // this.props.navigation.state.route.onGoBack();
       // this.props.navigation.goBack()
        
    }

    navigateToBack =() =>{
        this.props.navigation.goBack()
    }

    componentDidMount(){
        //buscarEnd('04235370')
        this.registerForPushNotificationsAsync()
        this.setState({
            form:1,
            valueButton :'Próximo'
        })
    }

    // hideOrShowPassword = () =>{
    //     this.setState({
    //         secureTextEntry : !this.state.secureTextEntry
    //     })
    // }
    hideOrShowPassword = (secureText,x) =>{
        console.log(secureText)

        switch (x) {
            case 1:
                this.setState({
                    secureTextEntry: !secureText
                })
                
                break;
            case 2:
                this.setState({
                    secureTextEntry2: !secureText
                })
            default:
                break;
        }
    }

    nextForm =()=>{
        let idForm = this.state.form + 1
        if (idForm > 3){
            if(this.validateForm(this.state.form)){
                this.signup()
            }
            this.validateForm(this.state.form)           
        }
        if(idForm==2){
            if(this.validateForm(this.state.form)){
                this.setState({
                    form:2,
                    titleForm : 'Quase lá!',
                    subTitleForm:'Endereço',
                })
            }
        }
        if (idForm ==3){
            if(this.validateForm(this.state.form)){
                this.setState({
                    form:3,
                    titleForm : 'Último passo',
                    subTitleForm:'Permissões',
                    valueButton : 'Salvar'
                })
            }
        }  
    }

    previousForm =()=>{
        let idForm = this.state.form
        if (idForm == 3){

            this.setState({
                form:2,
                titleForm : 'Quase lá!',
                subTitleForm:'Endereço',
                valueButton : 'Próximo'
            })
        }else if(idForm == 2){
            this.setState({
                form:1,
                titleForm : 'Vamos Começar ?',
                subTitleForm:'Dados de Acesso'
            })
            
        }else{
            this.props.navigation.goBack()
        }
    }

    retornaEnd = async (cep)=>{
        const end = await buscarEnd(cep)
        //console.log('retornaend',end)
        if (end != '' ) {
            //console.log(end.logradouro)
            //console.log(end.bairro)
            this.setState({
                logradouro : end.logradouro,
                bairro : end.bairro
            })
            
        } else {
            Alert.alert('Eroou','digite um cep valido')
            
        }

    }

    changeTag =(tags)=>{
        let interesses =''
        for (let i =0;i<=tags.length -1;i++){
            interesses= interesses + tags[i].id +','
        }
        this.setState({
            tags,
            interesses

        })

        let body = {
            
            nome_completo: this.state.nome_completo,
            interesses:this.state.interesses ,
            tpLograd:this.state.tpLograd ,
            lograd: this.state.logradouro,
            num: this.state.num_lograd,
            compl: this.state.complemento,
            bairro: this.state.bairro ,
            locali: this.state.localidade,
            cep: this.state.cep,
            uf: this.state.uf,
            
        }
    }
    genaratorUser = (nome)=>{

        return nome;
    }

    //Form Acessos
    form1() {
        return (
            <View style = {styles.containerForm}>
                <View  style={{width:'100%', marginBottom:8}}>
                    <Text style={styles.label}>Nome</Text>
                    <Item>
                        <Input 
                            autoCompleteType = 'name'
                            value = {this.state.nome_completo}
                            label = 'Nome completo'
                            placeholder = {'Ex.: Tio Flavão'}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {nome_completo => this.setState({nome_completo})}
                            keyboardType = {'default'}/>              
                    </Item>
                </View>
                
                <View  style={{width:'100%', marginBottom:8}}>
                     <Text style={styles.label}>Email</Text>
                    <Item>
                        <Input 
                            autoCompleteType = 'email'
                            value = {this.state.email}
                            label = 'E-mail'
                            placeholder = {'Ex.: Aninha94@email.com'}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {email => this.setState({email})}
                            keyboardType = {'email-address'} />
                    </Item>
                </View>

                <View  style={{width:'100%', marginBottom:8}}>
                    <Text style={styles.label}>Senha</Text>
                    <Item>
                        <Input 
                            autoCompleteType = 'password'
                            value = {this.state.password}
                            label = 'Senha'
                            placeholder = {'Informe a senha'}
                            placeholderTextColor = {'#AAA'}
                            secureTextEntry ={this.state.secureTextEntry}
                            onChangeText = {password => this.setState({password})}
                            keyboardType = {'default'}/>
                            <TouchableOpacity onPress={()=> this.hideOrShowPassword(this.state.secureTextEntry,1)}>
                                <Feather name = { ( this.state.secureTextEntry) ? 'eye' : 'eye-off' }  size = {20} style={styles.icon} color = {'#F9AA33'}/>
                            </TouchableOpacity>
                    </Item>
                </View>

                <View  style={{width:'100%', marginBottom:8}}>
                    <Text style={styles.label}>Confirme a Senha</Text>
                    <Item>
                        <Input 
                            autoCompleteType = 'password'
                            value = {this.state.password2}
                            label = 'Confirme a Senha'
                            placeholder = {'Confirme a senha'}
                            placeholderTextColor = {'#AAA'}
                            secureTextEntry ={this.state.secureTextEntry2}
                            onChangeText = {password2 => this.setState({password2})}
                            keyboardType = {'default'}/>
                        <TouchableOpacity onPress={() =>this.hideOrShowPassword(this.state.secureTextEntry2,2)} >
                            <Feather name = { ( this.state.secureTextEntry2) ? 'eye' : 'eye-off' }  size = {20} style={styles.icon} color = {'#F9AA33'}/>
                        </TouchableOpacity>
                    </Item>
                </View>

                <View  style={{width:'100%', marginBottom:8}}>
                   <Text style={styles.label}>Telefone</Text>   
                    <Item>
                        <Input
                            autoCompleteType = 'off'
                            value = {this.state.telefone}
                            label = 'Telefone'
                            placeholder = {'Ex.: 11999999999'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined' 
                            onChangeText = {telefone => this.setState({telefone})}
                            keyboardType ={'number-pad'} />  
                    </Item>
                </View>
            
           </View>
        )
    }

    //Form Endereço
    form2() {
        return (            
            <View style = {styles.containerForm}>
                    <View style={{width:'100%',marginTop:8}}>
                        <Text style={styles.label}>CEP</Text>
                        <Item>
                            <Input 
                                label = {'Cep'}
                                autoCompleteType = 'postal-code'
                                value = {this.state.cep}
                                placeholder = {'Ex. 04235-420'}
                                placeholderTextColor = {'#AAA'}
                                onChangeText = {cep => this.setState({cep})}
                                onSubmitEditing = {cep => this.retornaEnd(this.state.cep)}
                                keyboardType = {'number-pad'}/>  
                        </Item>
                    </View>

                    <View style={{width:'100%',marginTop:8}}>
                        <Text style={styles.label}>Rua</Text>
                        <Item>
                            <Input 
                                label = {'Logradouro'}
                                autoCompleteType = 'off'
                                value = {this.state.logradouro}
                                placeholder = {'Ex. Rua da União'}
                                placeholderTextColor = {'#AAA'}
                                onChangeText = {logradouro => this.setState({logradouro})}
                                keyboardType = {'email-address'} />
                        </Item>
                    </View>
                    <View style={{width:'100%',marginTop:8}}>
                        <Text style={styles.label}>Número</Text>
                        <Item>
                            <Input 
                                label = {'Número'}
                                autoCompleteType = 'cc-number'
                                value = {this.state.num_lograd}
                                placeholder = {'Ex. 12'}
                                placeholderTextColor = {'#AAA'}
                                onChangeText = {num_lograd => this.setState({num_lograd})}
                                keyboardType = {'default'} />
                        </Item>
                    </View>
                    <View style={{width:'100%',marginTop:8}}>
                        <Text style={styles.label}>Complemento</Text>
                        <Item>
                            <Input 
                                label ={'Complemento'}
                                autoCompleteType = 'off'
                                value = {this.state.complemento}
                                placeholder = {'Ex. Perto do Bar'}
                                placeholderTextColor = {'#AAA'}
                                onChangeText = {complemento => this.setState({complemento})}
                                keyboardType = {'default'}/>                 
                        </Item>
                    </View>
                    <View style={{width:'100%',marginTop:8}}>
                        <Text style={styles.label}>Bairro</Text>
                        <Item>
                            <Input 
                                autoCompleteType = 'off'
                                value = {this.state.bairro}
                                label = 'Bairro'
                                placeholder = {'Ex.: Heliópolis'}
                                placeholderTextColor = {'#AAA'}
                                onChangeText = {user => this.setState({user})}
                                keyboardType = {'default'} />
                        </Item>
                    </View>


            
        </View>
        )
    }

    //Form Termos
    form3() {

        const data = [
            { id: 1, label: 'Lojas' },
            { id: 2, label: 'Igrejas' },
            { id: 3, label: 'Adegas' },
            { id: 4, label: 'Festa' },
            { id: 5, label: 'Lanchonetes' },
            { id: 6, label: 'Farmácias' },
            { id: 7, label: 'Confeitaria' },
            { id: 8, label: 'Brechós' },
            { id: 9, label: 'Farmácia' },
            { id: 10, label: 'Bares' },
            { id: 11, label: 'Pedreiro' },
            { id: 13, label: 'Informática' },
            { id: 14, label: 'Restaurantes' },
            { id: 15, label: 'Imóveis' },
            { id: 16, label: 'Papelaria' },
            { id: 17, label: 'Presentes' },
            { id: 18, label: 'Serviços Diversos' },
            
          ];

        return (
            <View style = {styles.containerForm}>
                <View style={styles.containerSelect}>
                    <Text style={styles.labelText}>Selecione até 4 Categorias para Promoções:</Text>
                    <TagSelect
                        value={this.state.tags}
                        data={data}
                        max={6}
                        ref={(tag) => {
                            this.tag = tag;
                        }}
                        onMaxError={() => {
                            Alert.alert('Ops', 'No máximo 6 categorias');
                        }}
                        containerStyle={styles.containerStyle}
                        />
                </View>


               
                <View >
                    <TouchableOpacity activeOpacity={0.8}  onPress = {() => this.props.navigation.navigate('TermosDeUso')}>
                        <Text style={{color: '#006281',alignSelf:'center',paddingBottom:5,fontWeight:'bold'}}>Termos de uso</Text>
                    </TouchableOpacity>
                    <CheckBox
                        title='Li e aceito os termos de uso'
                        onPress={() => {
                            this.setState({termoUso: !this.state.termoUso })
                            this.changeTag(this.tag.itemsSelected)
                        }}
                        checked={this.state.termoUso}
                        containerStyle={{
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            padding: 0,
                            paddingBottom: 10,
                            margin: 0,
                            
                        }}
                    />
                </View>


            
             </View>
        )
    }

    validateForm = (form) =>{
        //form 1
        let username = this.state.username
        let email = this.state.email
        let password = this.state.password
        let password2 = this.state.password2
        let nome_completo = this.state.nome_completo
        let ddd = this.state.telefone.toString().substr(0,2) 
        let cel = this.state.telefone.toString().substr(2)

        //form 2
        let cep = this.state.cep
        let lograd =this.state.logradouro
        let num_lograd = this.state.num_lograd
        let bairro = this.state.bairro
        //form 3  
        let tags = this.state.tags
        let termoUso = this.state.termoUso
        
        switch (form) {
            case 1:
                var objER = /^[0-9]$/;
                if ( nome_completo == '' || nome_completo.length < 3 || objER.test(nome_completo)) {
                    Alert.alert('Atenção','Digite um Nome Válido !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }
                if (username =='' || username.length <3 ){
                    Alert.alert('Atenção','Digite um usuário válido !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }
                if (email == '' || !ValidaForm(email,'EMAIL')) {
                    Alert.alert('Atenção','Digite um email Válido !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }
                if (password == '' || password2 == '' || password2 != password ){
                    Alert.alert('Atenção','senhas invalidas !',[{text: 'Ok'},],{ cancelable: true })
                    return false
                }                
                if (ddd == '' ){
                    Alert.alert('Atenção','Digite um telefone com ddd válido !',[{text: 'Ok'},],{ cancelable: true })
                    return false
                }                
                if (cel == '' || cel.length <8 || cel.length>9  ){
                    Alert.alert('Atenção','Digite um Telefone Valido !',[{text: 'Ok'},],{ cancelable: true })
                    return false
                }                
                break;
            case 2:
                if ( cep == 0|| cep.length < 8 ) {
                    Alert.alert('Atenção','Digite um CEP Válido !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }
                if (lograd =='' ){
                    Alert.alert('Atenção','Digite uma rua válida !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }
                if (num_lograd < 0 ) {
                    Alert.alert('Atenção','Digite um número Válido !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }
                if (bairro =='' ){
                    Alert.alert('Atenção','Digite uma quebrada válida !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }        
                break;
            
            case 3:
                
                if (tags.length<1){
                    Alert.alert('Atenção','Escolha no mímino 4 categorias .',[{text: 'Ok'},],{ cancelable: true })
                    return false
                }
                if ( !termoUso) {
                    Alert.alert('Atenção','É necessário aceitar os termos de uso .',[{text: 'Ok'},],{ cancelable: true })
                    return false   
                }                     
                break;

            default:

                return false 
                break;
        }     
        
        //chama o signup
       return true

    }

    //Função de cadastro
    signup = async () => {
        let json,json2

        const  ind = this.state.nome_completo.indexOf(" ")
        let firstName = this.state.nome_completo.substring(0,ind);
        firstName = firstName.toLowerCase()
        console.log(firstName);
        let status,status2

        if(this.validateForm(this.state.form)){
            
            this.setState({
                isloading : true
            })
               
            try {
                // const response = await axios.post(servercadastro,{
                const response = await api.post('cadastro/usuario',{
                    username  : geraUsername(firstName,5),
                    email     : this.state.email,
                    password  : this.state.password,
                    password2 : this.state.password2,
                    is_staff  : false  
                    },
                    {
                        headers: { 
                            'Content-Type': 'application/json',
                        }
                    }
                 
                )
                //POST PERFIL
                if (response.status == 201 && response.data.id){
                    
                     const response2 = await api.post('cadastro/perfil/'+ response.data.id +'/',{
                        
                            nome_completo: this.state.nome_completo,
                            //interesses:this.state.interesses ,
                            // tpLograd:this.state.tpLograd ,
                            // lograd: this.state.logradouro,
                            // num: this.state.num_lograd,
                            // compl: this.state.complemento,
                            // bairro: this.state.bairro ,
                            // locali: this.state.localidade,
                            // cep: this.state.cep,
                            // uf: this.state.uf,
                            tel:this.state.telefone,
                            user: response.data.id
                          
                        },{
                            headers: { 
                                Authorization: `Token ${response.data.token}`,
                                'Content-Type': 'application/json',
                            }
                        }
                    )
                    console.log("Cadastrou perfil",response2)
                    json = response.data;
                    json2 = response2.data;
                    status = response.status
                    status2 = response2.status
                    
                }
                
            } catch (error) {
                this.setState({
                    isloading:false,
                });
                
                if (error.response.data.email ) {
                    console.log("Erro de email",JSON.stringify(error.response.data.email[0]))
                    showError(JSON.stringify(error.response.data.email[0]))
                } 
                if (error.response.data.username ) {
                    showError(JSON.stringify(error.response.data.username[0]))
                }
                console.log("ERRO GERAL 1",error.response)
                console.log("ERRO GERAL",error.response2)
                console.log("Erro Cadastro",error.response.data)
            
                return
            }

            this.setState({
                isloading:false,
            });
            if (status == 201 && status2 == 201) {
               console.log("Cadastrado com Sucesso") 
                Toast.show('Cadastrado com Sucesso', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                onShow: () => {
                    // calls on toast\`s appear animation start
                },
                onShown: () => {
                    // calls on toast\`s appear animation end.
                },
                onHide: () => {
                    // calls on toast\`s hide animation start.
                },
                onHidden: () => {
                    // calls on toast\`s hide animation end.
                   
                }
            });
               this.navigateToLogin()
            }

         } else {
            return
        }
    }

    registerForPushNotificationsAsync = async () => {
        const { status: existingStatus } = await Permissions.getAsync(
          Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
      
        // only ask if permissions have not already been determined, because
        // iOS won't necessarily prompt the user a second time.
        if (existingStatus !== 'granted') {
          // Android remote notification permissions are granted during the app
          // install, so this will only ask on iOS
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
      
        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted') {
          return;
        }
      
        // Get the token that uniquely identifies this device
        // let token = await Notifications.getExpoPushTokenAsync();
        // await this.setState({
        //     imei:token
        // });
    }   

    render(){

        return(
                
            
            <View style = {styles.container}>
                <Spinner
                    //visibility of Overlay Loading Spinner
                    visible={this.state.isloading}
                    //Text with the Spinner 
                    textContent={'Carregando...'}
                    size = {'large'}
                    animation = {'fade'}
                    //Text style of the Spinner Text
                    textStyle={styles.spinnerTextStyle}
                />
                <KeyboardAvoidingView   behavior="padding" enabled> 
                <ImageBackground source={fundo} style={{width: '100%', height: '100%'}}>
                        <Animatable.View style={styles.header} animation={'fadeInDownBig'}>
                            <View style = {styles.headerStyle}>                    
                                <View >
                                    <TouchableOpacity onPress={this.previousForm}>
                                        <Feather name= 'arrow-left' size = {28} color='#f8f8f8'></Feather>
                                    </TouchableOpacity>                      
                                </View>
                                <View style = {styles.containerTitle}>
                                        <Text style = {styles.title}>{this.state.subTitleForm}</Text>
                                        {/* <Text style = {styles.subTitle}>{this.state.subTitleForm}</Text> */}
                                </View>
                                <View style ={{width:28}}/>
                            </View>
                        </Animatable.View>

                        <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
                            <View >
                             {  this.form1() }                               
                            </View>

                            <View style = {styles.buttonContainer}>
                                <TouchableOpacity onPress ={ this.signup}>
                                    <LinearGradient
                                        colors={['#46505C','#344955']}
                                        style={styles.button} >
                                        <Text style={styles.buttonText}>Cadastrar</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>


                        </Animatable.View>

                    </ImageBackground>
                </KeyboardAvoidingView>
                
               
            </View>
        
        )
    }
}

