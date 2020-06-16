import React, { Component } from 'react';

import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';



export default class DoacaoDinheiro extends Component {
   
    render(){
        function imagePickerCallback(data){
            console.log(data);
        }
        return(
            <View style={styles.container}>
                <LinearGradient colors={['#FF69B4', '#FF1493']} style={styles.gradient}>
                    <View style={styles.header}>
                        <Text style={styles.textIban}>IBAN Desengaveta</Text>
                        <Text style={styles.textNumber}>AO06.0000.0000.0000.0000</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.textValor}>Quanto deseja doar?</Text>
                        <View style={styles.action}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Digite o valor*"
                            />
                            <Text style={styles.moeda}>AKZ</Text>
                        </View>
                        <View style={styles.comprovativo}>
                            <Text style={styles.textAnexo}>Adicionar Comprovativo</Text>
                            <Image source={require('../../assets/placeholderGaleria.png')}
                                style={styles.galeria}
                            />
                            <TouchableOpacity style={styles.buttonCaarregar}
                                onPress={()=> ImagePicker.showImagePicker({}, imagePickerCallback )}
                            >
                                <Text style={styles.buttonTextImage}>Carregar Imagem</Text>
                            </TouchableOpacity>
                        </View>
                        
                            <TouchableOpacity >                            
                                    <View style={styles.buttonConfirmar}>
                                        <LinearGradient colors={['#ff69b4', '#C71585']} style={styles.estilo}>
                                            <Text style={styles.buttonText}>Confirmar</Text>
                                        </LinearGradient>
                                    </View>                         
                            </TouchableOpacity>
                        
                    </View>

                </LinearGradient>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
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
    textIban: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Subway-Black'        
    },
    textNumber: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold' 
    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
       
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginLeft: 20,
        marginRight: 20
    },
    textValor: {
        color: '#C71585',
        fontSize: 18,
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',       
        borderBottomWidth: 1,
        borderBottomColor: '#4F4F4F',
       
    },
   
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: 'grey',
        fontSize: 16 
    },
    moeda: {
        color: 'gray'
    },
    textAnexo: {
        color: '#C71585',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30
    },
    galeria: {
        width: 120,
        height: 120,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 30,
        marginTop: 10
    },
    buttonCaarregar: {
        marginTop: 10,
        borderColor: '#C71585',
        borderWidth: 1.5,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 15
    },
    buttonTextImage: {
        fontSize: 12,
        color: '#C71585'
    },
    buttonConfirmar: {
        flexDirection: 'row-reverse'
    },
    
    estilo: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }


})