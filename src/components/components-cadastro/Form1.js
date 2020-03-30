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

 export default class Form extends Component{

   state = {
        id : 0,
        nome: '',
        senha: '',
        confirmSenha: '',
        email: '',
        user: '',
        form: null,
        valueButton :'',
        usuario :{
            username : '',
	        email     :    '',
	        password  : '',
	        password2 : '',
	        is_staff  : false
        },
        perfil :{
            nome_completo:''
        },
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
            this.signup()
        }
        if(idForm==2){
            this.setState({
                form:2,
                titleForm : 'Quase lá!',
                subTitleForm:'Endereço',
            })
        }
        if (idForm ==3){
            this.setState({
                form:3,
                titleForm : 'Último passo',
                subTitleForm:'Permissões',
                valueButton : 'Salvar'
            })
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
                            value = {this.state.nome}
                            label = 'Usuário'
                            label = 'Nome completo'
                            placeholder = {'Ex.: Aninha94'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined' 
                            onChangeText = {nome => this.setState({nome})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'default'}
                            />  
                
                <TextInput style = {styles.input}
                            autoCompleteType = 'off'
                            value = {this.state.user}
                            label = 'Usuário'
                            placeholder = {'Ex.: Aninha94'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined'
                            onChangeText = {user => this.setState({user})}
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
                            value = {this.state.senha}
                            label = 'Senha'
                            placeholder = {'Informe a senha'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined'
                            onChangeText = {senha => this.setState({senha})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'default'} />

                <TextInput style = {[styles.input]}
                            autoCompleteType = 'password'
                            value = {this.state.confirmSenha}
                            label = 'Confirme a Senha'
                            placeholder = {'Confirme a senha'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined'
                            onChangeText = {confirmSenha => this.setState({confirmSenha})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'default'}/>
                <TextInput style = {styles.input}
                            autoCompleteType = 'off'
                            value = {this.state.telefone}
                            label = 'Telefone'
                            placeholder = {'Ex.: 11 99999 9999'}
                            placeholderTextColor = {'#AAA'}
                            mode = 'outlined' 
                            onChangeText = {nome => this.setState({telefone})}
                            theme={{colors: {primary: '#F9AA33', underlineColor: 'transparent'}}}
                            keyboardType = {'default'}
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

    //Função de cadastro
    signup(){
       
            Alert.alert("Em Desenvolvimento")
            /*
        {
	"username" : " fulano1",
	"email"     :    "email@email.com.br",
	"password"  : "1234",
	"password2" : "1234",
	"is_staff"  : false
        }
            */
        
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
                
                <KeyboardAvoidingView  keyboardVerticalOffset = {useHeaderHeight.HEIGHT + 20} behavior="padding" enabled> 
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

