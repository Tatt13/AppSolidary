import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { faHandHoldingUsd, faHamburger, faTshirt, faShoePrints, faBoxOpen, faCarrot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export default class Doacao extends Component {

  render() {
    return (
      <View style={{flex: 1, backgroundColor:'white'}}>      
       <ScrollView>
       <View style={styles.container} >
          <LinearGradient colors={['#FF69B4', '#FF1493']} style={styles.gradient}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DoacaoDinheiro')}>
            <Text style={styles.texto}>{'Dinheiro'}</Text>
            </TouchableOpacity>
            <FontAwesomeIcon icon={faHandHoldingUsd} style={styles.icon} size={45}/>
            
          </LinearGradient>        
        </View>
        <View style={styles.container} >
          <LinearGradient colors={['#FF69B4', '#FF1493']} style={styles.gradient}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DoacaoAlimento')}>
            <Text style={styles.texto}>{'Alimento'}</Text>
            </TouchableOpacity>
            <FontAwesomeIcon icon={faCarrot} style={styles.icon} size={45}/>
          </LinearGradient>        
        </View>
        <View style={styles.container} >
          <LinearGradient colors={['#FF69B4', '#FF1493']} style={styles.gradient}>
            <Text style={styles.texto}>{'Vestuário'}</Text>
            <FontAwesomeIcon icon={faTshirt} style={styles.icon} size={45}/>
          </LinearGradient>        
        </View>
        <View style={styles.container} >
          <LinearGradient colors={['#FF69B4', '#FF1493']} style={styles.gradient}>
            <Text style={styles.texto}>{'Calçado'}</Text>
            <FontAwesomeIcon icon={faShoePrints} style={styles.icon} size={45}/>
          </LinearGradient>        
        </View>
        <View style={styles.container} >
          <LinearGradient colors={['#FF69B4', '#FF1493']} style={styles.gradient}>
            <Text style={styles.texto}>{'Outros'}</Text>
            <FontAwesomeIcon icon={faBoxOpen} style={styles.icon} size={45}/>
          </LinearGradient>        
        </View>
       </ScrollView>
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    height: 90,
    width: '90%',
    marginTop: 17,
    marginLeft: 20,
    
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0,
      height: 12,
    },
    shadowOpacity: 0.70,
    shadowRadius: 16.00,
    elevation: 24
    
  },

  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 25,
    marginLeft: 20
  },

  gradient: {
    flex: 1,
    borderRadius: 6
  },

  icon: {   
    position: 'absolute',
    marginTop: 30, 
    marginLeft: 300,
    color: 'white',
    opacity: 0.8
  }
})



