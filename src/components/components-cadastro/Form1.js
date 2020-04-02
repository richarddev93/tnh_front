import React, {Component} from 'react'
import {View, 
        Text,
        TouchableOpacity,
        Dimensions,
        KeyboardAvoidingView,
        Alert,
        StatusBar
    } from 'react-native'
import { TextInput ,RadioButton ,Divider} from 'react-native-paper';
import styles from './styles'
import * as Permissions from 'expo-permissions';
import { TagSelect } from 'react-native-tag-select-max';
import { CheckBox } from 'react-native-elements'
import Constants from 'expo-constants'
import {Feather} from '@expo/vector-icons'
import { useHeaderHeight } from 'react-navigation-stack'
import { ScrollView } from 'react-native-gesture-handler';
import ValidaForm from  '../../../src/validateForm'

 export default class Form extends Component{

   state = {
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
        logradouro    : '',
        num_lograd    :  0,
        complemento   : '',
        bairro        : '',
        interesses    : [],
        tag:{
            totalSelected:0,
            itemsSelected:[]
        },
        termoUso:false,
        isloading:false,
        formValid: false,
        titleForm : 'Vamos Começar ?',
        subTitleForm:'Dados de Acesso'
    }

    navigateToHome = () => {
        this.props.navigation.navigate('Form2')
    }
    navigateToBack =() =>{
        this.props.navigation.goBack()
    }
    componentDidMount(){
        this.registerForPushNotificationsAsync()
        this.setState({
            form:1,
            valueButton :'Próximo'
        })
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
            console.log("1-----",this.state.form)
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
    //Form Acessos
    form1() {
        return (
            <View style = {styles.containerForm}>
                <TextInput style = {styles.input}
                            autoCompleteType = 'name'
                            value = {this.state.nome_completo}
                            label = 'Nome completo'
                            placeholder = {'Ex.: Tio Flavão'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined' 
                            onChangeText = {nome_completo => this.setState({nome_completo})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'default'}
                            />  
                
                <TextInput style = {styles.input}
                            autoCompleteType = 'off'
                            value = {this.state.username}
                            label = 'Usuário'
                            placeholder = {'Ex.: Aninha94'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined'
                            onChangeText = {username => this.setState({username})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'default'} />

                <TextInput style = {styles.input}
                            autoCompleteType = 'email'
                            value = {this.state.email}
                            label = 'E-mail'
                            placeholder = {'Ex.: Aninha94@email.com'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined'
                            onChangeText = {email => this.setState({email})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'email-address'} />

                <TextInput style = {styles.input}
                            autoCompleteType = 'password'
                            value = {this.state.password}
                            label = 'Senha'
                            placeholder = {'Informe a senha'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined'
                            onChangeText = {password => this.setState({password})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'default'} />

                <TextInput style = {[styles.input]}
                            autoCompleteType = 'password'
                            value = {this.state.password2}
                            label = 'Confirme a Senha'
                            placeholder = {'Confirme a senha'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined'
                            onChangeText = {password2 => this.setState({password2})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'default'}/>
                <TextInput style = {styles.input}
                            autoCompleteType = 'off'
                            value = {this.state.telefone}
                            label = 'Telefone'
                            placeholder = {'Ex.: 11999999999'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined' 
                            onChangeText = {telefone => this.setState({telefone})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            />  

            
        </View>
        )
    }
    //Form Endereço
    form2() {
        return (
            <ScrollView>
            <View style = {styles.containerForm}>

            <TextInput style = {styles.input}
                            label = {'Cep'}
                            autoCompleteType = 'postal-code'
                            value = {this.state.cep}
                            placeholder = {'Ex. 04235-420'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined' 
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            onChangeText = {cep => this.setState({cep})}
                            onSubmitEditing = {this.searchCep}
                            keyboardType = {'default'}/>  


                <TextInput style = {styles.input}
                            label = {'Logradouro'}
                            autoCompleteType = 'off'
                            value = {this.state.tpLog}
                            placeholder = {'Ex. Rua da União'}
                            mode = 'outlined' 
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {tpLog => this.setState({tpLog})}
                            keyboardType = {'email-address'} />

                <TextInput style = {styles.input}
                            label = {'Número'}
                            autoCompleteType = 'cc-number'
                            value = {this.state.num}
                            placeholder = {'Ex. 12'}
                            mode = 'outlined' 
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {num => this.setState({num})}
                            keyboardType = {'default'} />
                
                <TextInput style = {styles.input}
                            label ={'Complemento'}
                            autoCompleteType = 'off'
                            value = {this.state.compl}
                            placeholder = {'Ex. Perto do Bar'}
                            mode = 'outlined' 
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            placeholderTextColor = {'#AAA'}
                            onChangeText = {counter => this.setState({counter})}
                            keyboardType = {'default'}/>                 
                
                <TextInput style = {styles.input}
                            autoCompleteType = 'off'
                            value = {this.state.user}
                            label = 'Bairro'
                            placeholder = {'Ex.: Heliópolis'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined'
                            onChangeText = {user => this.setState({user})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'default'} />


            
        </View>
        </ScrollView>
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
                        data={data}
                        max={6}
                        ref={(tag) => {
                            this.tag = tag;
                        }}
                        onMaxError={() => {
                            Alert.alert('Ops', 'No máximo 4 categorias');
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
                        onPress={() => this.setState({termoUso: !this.state.termoUso})}
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
        let validated = false
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
        let interesses = this.state.interesses
        let termoUso = this.state.termoUso
        


        switch (form) {
            case 1:
                var objER = /^[0-9]$/;
                if ( nome_completo == '' || nome_completo.length < 3 || objER.test(nome_completo)) {
                    console.log(nome_completo,'*******nome')
                    Alert.alert('Atenção','Digite um Nome Válido !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }
                if (username =='' || username.length <3 ){
                    Alert.alert('Atenção','Digite um usuário válido !',[{text: 'Ok'},],{ cancelable: true })
                    return false 
                }
                if (email == '' || !ValidaForm(email,'EMAIL')) {
                    console.log('email',email)
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
                if ( cep == 0|| cep.length < 8 || !validForm(cep,'CEP')) {
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
                if (interesses.length<1){
                    Alert.alert('Atenção','É necessário aceitar os termos de uso .',[{text: 'Ok'},],{ cancelable: true })
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
    signup(){
       
            Alert.alert("Em Desenvolvimento")
        
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
                <View style = {styles.headerStyle}>
                    <TouchableOpacity onPress={this.previousForm}>
                        <Feather name= 'arrow-left' size = {28} color='#F9AA33'></Feather>
                    </TouchableOpacity>                      
                </View>
                <View style = {styles.containerTitle}>
                        <Text style = {styles.title}>{this.state.titleForm}</Text>
                        <Text style = {styles.subTitle}>{this.state.subTitleForm}</Text>
                </View>
                
                <KeyboardAvoidingView   behavior="padding" enabled> 
                        {this.state.form ==1 ? this.form1() 
                        :this.state.form ==2 ? this.form2()
                        :this.form3()
                        }
                </KeyboardAvoidingView>
                
                
                    <View style = {styles.containerButton}>

                        <TouchableOpacity style = {styles.button}
                            onPress = {
                            this.nextForm
                            }>
                            <Text style = {styles.buttonText}> {this.state.valueButton} </Text>
                        </TouchableOpacity>    

                    </View>
                
               
            </View>
        
        )
    }
}

