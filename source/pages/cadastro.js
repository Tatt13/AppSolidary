import React, { Component } from 'react';

import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { faUserAlt, faCheckCircle, faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import * as Animatable from 'react-native-animatable';

export default class Cadastro extends Component {
    constructor(props){
        super(props)

        
        this.state={id_user: 6, nome:"", email:"", senha:"",  createdAt: "2019-10-28",
        updatedAt: "2020-05-12"}
        this.signup=this.signup.bind(this)
    }
    async signup(){
        const data = this.state
        const usuarios = await Axios.post("http://192.168.0.27:3000/usuarios", data)
        console.log(usuarios)
        this.props.navigation.navigate('Home')
    }

    super(props){
        this.state={
            check_textInputChange: false,
            password:'',
            password_confirm:'',
            secureTextEntry: true,
            secureTextEntry_confirm: true
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

    secureTextEntry_confirm(){
        this.setState({
            secureTextEntry_confirm: !this.state.secureTextEntry_confirm
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#ff69b4', '#87cefa']} style={styles.gradient}>
                    <View style={styles.header}>
                        <Text style={styles.welcome}>Registe-se e ajude a fazer mais sorrisos!</Text>
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
                            marginTop: 20
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
                        <Text style={[styles.textEmail,{
                            marginTop: 20
                        }
                        
                        ]}>Confirmar palava-passe</Text>
                        <View style={styles.action}>
                            <FontAwesomeIcon 
                                icon={faLock}
                                color="#C71585"
                                size={20}
                            />
                            {this.state.secureTextEntry_confirm ?
                            <TextInput
                                placeholder= "Confirme sua palavra-passe..."                                
                                style={styles.textInput}
                                secureTextEntry={true}
                                value={this.state.password_confirm}
                                onChangeText={[(e) => {
                                    this.setState({ senha: e })
                                }], (text)=>this.setState({
                                    password_confirm:text
                                })}
                            />
                            :
                            <TextInput
                                placeholder= "Confirme sua palavra-passe..."                                
                                style={styles.textInput}                                
                                value={this.state.password_confirm}
                                onChangeText={[(e) => {
                                    this.setState({ senha: e })
                                }], (text)=>this.setState({
                                    password_confirm:text
                                })}
                            />
                            }
                            <TouchableOpacity
                                onPress={()=>this.secureTextEntry_confirm()}>
                                {this.state.secureTextEntry_confirm ?
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
                        <View style={styles.textPrivate}>
                            <Text style={styles.color_textPrivate}>
                                Ao registar-se concorda com os nossos
                            </Text>
                            <Text style={[styles.color_textPrivate,{
                                fontWeight: 'bold'
                            }]}>
                                {" "}
                                Termos de Serviço
                            </Text>
                            <Text style={styles.color_textPrivate}>
                               e
                            </Text>
                            <Text style={[styles.color_textPrivate,{
                                fontWeight: 'bold'
                            }]}>
                                {" "}
                               Política de Privacidade.
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={ this.signup} >
                            <View style={styles.button}>                            
                                <LinearGradient colors={['#ff69b4', '#C71585']} style={styles.signIn}>
                                    <Text style={styles.textEntrar}>Registar-se</Text>
                                </LinearGradient>                                                                
                            </View>
                        </TouchableOpacity>
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
        marginTop:20
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
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    color_textPrivate: {
        color: 'gray'
    }  

});         