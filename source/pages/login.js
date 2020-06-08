import React, { Component } from 'react';

import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { faUserAlt, faCheckCircle, faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import * as Animatable from 'react-native-animatable';


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { email: "", senha: "" }
        this.signin = this.signin.bind(this)
    }
    async signin() {
        const data = this.state
        const usuarios = await Axios.post("http://192.168.0.27:3000/sessao", data)

        if (usuarios.data.error) {
            alert(usuarios.data.error.message)
            return
        }

        this.props.navigation.navigate('Home')
    }

    
        super(props){
            this.state={
                check_textInputChange: false,
                password:'',
                secureTextEntry: true
            }
        }
        
    

    textInputChange(value){
        if(value.length!==0){
            this.setState({
                check_textInputChange: true
            });
        }
        else{
            this.setState({
                check_textInputChange: false
            });
        }
    }

    secureTextEntry(){
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

   
    render() {        
        
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#ff69b4', '#87cefa']} style={styles.gradient}>
                    <View style={styles.header}>
                        <Text style={styles.welcome}>Bem-vindo(a) a App do Desengaveta!</Text>
                    </View>
                    <Animatable.View 
                        animation='fadeInUpBig'
                        style={styles.footer}>
                        <Text style={styles.textEmail}>Email</Text>
                        <View style={styles.action}>
                            <FontAwesomeIcon 
                                icon={faUserAlt}
                                color="#C71585"
                                size={20}
                            />
                            <TextInput
                                placeholder= "Insira seu email..."                                
                                style={styles.textInput}
                                onChangeText={[(e) => {
                                    this.setState({ email: e })
                                }], (text)=>this.textInputChange(text)}
                            />
                            {this.state.check_textInputChange ?
                            <Animatable.View 
                                animation='bounceIn'>
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            :null }
                        </View>
                        <Text style={[styles.textEmail,{
                            marginTop: 35
                        }
                        
                        ]}>Palava-passe</Text>
                        <View style={styles.action}>
                            <FontAwesomeIcon 
                                icon={faLock}
                                color="#C71585"
                                size={20}
                            />
                            {this.state.secureTextEntry ?
                            <TextInput
                                placeholder= "Insira sua palavra-passe..."                                
                                style={styles.textInput}
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={[(e) => {
                                    this.setState({ senha: e })
                                }], (text)=>this.setState({
                                    password:text
                                })}
                            />
                            :
                            <TextInput
                                placeholder= "Insira sua palavra-passe..."                                
                                style={styles.textInput}                                
                                value={this.state.password}
                                onChangeText={[(e) => {
                                    this.setState({ senha: e })
                                }], (text)=>this.setState({
                                    password:text
                                })}
                            />
                            }
                            <TouchableOpacity
                                onPress={()=>this.secureTextEntry()}>
                                {this.state.secureTextEntry ?
                                <FontAwesomeIcon
                                    icon={faEyeSlash}
                                    color="gray"
                                    size={20}
                                />
                                :
                                <FontAwesomeIcon
                                icon={faEye}
                                color="gray"
                                size={20}
                            />
                                }
                            </TouchableOpacity>
                        </View>
                        <Text style={{color: '#DB7093', marginTop: 10, fontWeight: 'bold'}}>Esqueceu a palavra-passe?</Text>
                        <TouchableOpacity
                            onPress={this.signin}
                        >
                            <View style={styles.button}>
                            
                                <LinearGradient colors={['#ff69b4', '#C71585']} style={styles.signIn}>
                                    <Text style={styles.textEntrar}>Entrar</Text>
                                </LinearGradient>
                                                                
                            </View>
                        </TouchableOpacity>
                        <View style={styles.button2}>
                            <TouchableOpacity 
                                onPress={() => this.props.navigation.navigate('Cadastro')}
                                style={[styles.signIn, {
                                    borderColor: '#DB7093',
                                    borderWidth: 1
                                }]}
                                
                            >
                                <Text style={[styles.textRegisto],{
                                    color: '#DB7093',
                                    fontWeight: 'bold',
                                    fontSize: 18
                                    
                                }}>Registar-se</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </Animatable.View>
                </LinearGradient>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    gradient: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    welcome: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    textEmail: {
        color: '#C71585',
        fontSize: 18,
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 2
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: 'grey' 
    },
    button: {
        alignItems: 'center',
        marginTop:40
    },
    button2: {
        alignItems: 'center',
        marginTop:10
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textEntrar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },  

});
            