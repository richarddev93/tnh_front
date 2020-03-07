import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    Animated, 
    TextInput,
    TouchableOpacity
} from 'react-native'

import Form from '../components/components-cadastro/Form1'
import barCad from '../components/components-cadastro/barCad'
import Form2 from '../components/components-cadastro/Form2'
import Form3 from '../components/components-cadastro/Form3'
import Form4 from '../components/components-cadastro/Form4'

import commonStyles from '../commonStyles'



export default class Cadastro extends Component {
    state = {
        flagGo: true,
        flagBack:false,
        pt1: true,
        pt2: false,
        pt3: false,
        pt4: false,
        textoBtn: ''
    }

    page1 = () => {
        <Form/>
    }

    Voltar = () => {
        if(this.state.pt1 == false && <Form2/> ){
            this.setState({pt1: this.state.pt1 = true})
            this.setState({pt2: this.state.pt2 = false})
            this.setState({pt3: this.state.pt3 = false})
            this.setState({pt4: this.state.pt4 = false})
        }else if (this.state.pt2 == false){
            this.setState({pt2: this.state.pt2 = true})
            this.setState({pt1: this.state.pt1 = false})
            this.setState({pt3: this.state.pt3 = false})
            this.setState({pt4: this.state.pt4 = false})
        }else if (this.state.pt3 == false){
            this.setState({pt3: this.state.pt3 == true})
            this.setState({pt1: this.state.pt1 = false})
            this.setState({pt2: this.state.pt2 = false})
            this.setState({pt4: this.state.pt4 = false})
        }
    } 

    Teste = () => {
        if (this.state.pt1 == true) {
            this.setState({pt1: !this.state.pt1})
            this.setState({pt2: this.state.pt2 = true})
            this.setState({pt3: this.state.pt3 = false})
            this.setState({pt4: this.state.pt4 = false})
        }else if (this.state.pt2 == true){
            this.setState({pt2: !this.state.pt2})
            this.setState({pt1: this.state.pt1 = false})
            this.setState({pt3: this.state.pt3 = true})
            this.setState({pt4: this.state.pt4 = false})
        }else if (this.state.pt3 == true){
            this.setState({pt3: !this.state.pt3})
            this.setState({pt1: this.state.pt1 = false})
            this.setState({pt2: this.state.pt2 = false})
            this.setState({pt4: this.state.pt4 = true})
        }
    }

    render(){
        return(
            <Animated.View style = {styles.container}>
                {this.state.pt1 &&
                   <Form/>
                }
                {this.state.pt2 &&
                    <Form2/>
                }
                {this.state.pt3 &&
                    <Form3/>
                }
                {this.state.pt4 &&
                    <Form4/>
                }
               <View style = {styles.containerButton}>
                {this.state.pt1 &&
                    
                    <TouchableOpacity style = {styles.button}
                        onPress = {
                          this.Teste
                        }>
                        <Text style = {styles.buttonText}> Próximo </Text>
                    </TouchableOpacity>
                }
                  
                   {this.state.pt2 &&
                    <TouchableOpacity style = {styles.buttonVolt}
                        onPress = {
                          this.Voltar
                        }>
                        <Text style = {styles.buttonText}> Voltar </Text>
                    </TouchableOpacity>
                    }
                    {this.state.pt2 && 
                        <TouchableOpacity style = {styles.buttonProx}
                        onPress = {
                          this.Teste
                        }>
                        <Text style = {styles.buttonText}> Próximo </Text>
                    </TouchableOpacity>
                    }
                   {this.state.pt3 &&
                    <TouchableOpacity style = {styles.buttonVolt}
                        onPress = {
                          this.Voltar
                        }>
                        <Text style = {styles.buttonText}> Voltar </Text>
                    </TouchableOpacity>
                    }
                    {this.state.pt3 && 
                        <TouchableOpacity style = {styles.buttonProx}
                        onPress = {
                          this.Teste
                        }>
                        <Text style = {styles.buttonText}> Próximo </Text>
                    </TouchableOpacity>
                    }
                   {this.state.pt4 &&
                    <TouchableOpacity style = {styles.buttonVolt}
                        onPress = {
                          this.Voltar
                        }>
                        <Text style = {styles.buttonText}> Voltar </Text>
                    </TouchableOpacity>
                    }
                    {this.state.pt4 && 
                        <TouchableOpacity style = {styles.buttonProx}
                        onPress = {
                          this.Teste
                        }>
                        <Text style = {styles.buttonText}> Finalizar </Text>
                    </TouchableOpacity>
                    }
                    
                </View>
            </Animated.View>
        )
    }
}

const styles  = StyleSheet .create({
    container :{
        flex:1,
        backgroundColor: '#F1E9E9'
    },
    containerButton: {
        width: '50%',
        flexDirection:'row',
        marginTop: 40,
        marginLeft: 120,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    containerProx:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    button:{
        height: 40,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: -20,
        padding: 10,
        marginTop: -30
    },
    buttonVolt:{
        height: 40,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-10,
        padding: 10,
        marginHorizontal: 100
    },
    buttonProx:{
        height: 40,
        width: 100,
        backgroundColor: commonStyles.colors.secondary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-10,
        padding: 10,
        marginRight: -30
    },
    buttonText:{
        fontSize: 15,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
})