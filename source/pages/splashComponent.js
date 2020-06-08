import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    TouchableOpacity
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default class SplashComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#ff69b4', '#87cefa']} style={styles.gradient}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.header}>
                        <Animatable.Image
                            animation="bounceIn"
                            duration={1500}
                            source={require('../assets/desengaveta.png')}
                            style={styles.logo}
                            resizeMode={"stretch"}
                        />
                    </View>
                    <Animatable.View 
                    style={styles.footer}
                    animation="fadeInUpBig">
                        <Text style={styles.title}>Doe de forma mais prática!</Text>
                        <View style={styles.button}>
                            <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('Login')}>
                                <LinearGradient colors={['#ff69b4', '#87cefa']} style={styles.signIn}>
                                    <Text style={styles.textIn}>Começar</Text>
                                    <FontAwesomeIcon 
                                        icon={faChevronRight}
                                        color="white"
                                        size={16}                                         
                                    />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </LinearGradient>
            </View>
        );
    }
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4; 

var styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    gradient: {
        flex: 1
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    footer: {
        flex: 1,
        backgroundColor: 'white',        
        borderTopRightRadius: 98,
        borderBottomRightRadius: 98,
        paddingVertical: 58,
        paddingHorizontal: 38
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#C71585',
        fontFamily: 'Subway-Black',
        fontSize: 30,
        
    },
    subtitle: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold', 
        marginTop: 15,
        fontFamily: 'CaviarDreams_Bold'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 158,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textIn: {
        color: 'white',
        fontFamily: 'CaviarDreams_Bold',
        fontWeight: 'bold',
        fontSize: 16

    },
    

});

