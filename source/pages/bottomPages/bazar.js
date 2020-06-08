import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class Bazar extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.containerTitulo}>
            <Text style={styles.titulo}> Productos Disponivéis</Text>
          </View>
          <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.card}>            
              <Image source={require('../../assets/sapatos.jpg')}
                style={{width: 183, height: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20, resizeMode: 'contain'}}
              />
              <Text style={styles.nameProduct}>Tênis Feminino</Text>
              <Text style={styles.ProductDescription}>Tamanho 38</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.ProductValue}>AOA 3500</Text>              
                  <FontAwesomeIcon icon={faShoppingCart} style={styles.iconName}/>              
              </View>
            </View>
            <View style={styles.card2}>            
              <Image source={require('../../assets/sapatos.jpg')}
                style={{width: 183, height: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20, resizeMode: 'contain'}}
              />
              <Text style={styles.nameProduct}>Tênis Feminino</Text>
              <Text style={styles.ProductDescription}>Tamanho 38</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.ProductValue}>AOA 3500</Text>              
                  <FontAwesomeIcon icon={faShoppingCart} style={styles.iconName}/>              
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.card}>            
              <Image source={require('../../assets/sapatos.jpg')}
                style={{width: 183, height: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20, resizeMode: 'contain'}}
              />
              <Text style={styles.nameProduct}>Tênis Feminino</Text> 
              <Text style={styles.ProductDescription}>Tamanho 38</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.ProductValue}>AOA 3500</Text>              
                  <FontAwesomeIcon icon={faShoppingCart} style={styles.iconName}/>              
              </View>
            </View>
            <View style={styles.card2}>            
              <Image source={require('../../assets/sapatos.jpg')}
                style={{width: 183, height: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20, resizeMode: 'contain'}}
              />
              <Text style={styles.nameProduct}>Tênis Feminino</Text>
              <Text style={styles.ProductDescription}>Tamanho 38</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.ProductValue}>AOA 3500</Text>              
                  <FontAwesomeIcon icon={faShoppingCart} style={styles.iconName}/>              
              </View>
            </View>
          </View>
          </ScrollView>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f2'
  },
  titulo: {    
    marginLeft: 20,
    color: 'deeppink',
    fontWeight: 'bold',
    fontSize: 16
  },
  containerTitulo: {
    marginTop: 12,
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    padding: 10
    
  },
  card: {
    marginTop: 12,
    marginLeft: 15,
    width: 183,
    height: 350,
    backgroundColor: 'white',
    borderRadius: 20
  },
  card2:{
    marginTop: 12,
    marginLeft: 15,
    width: 183,
    height: 350,
    backgroundColor: 'white',
    borderRadius: 20
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 12 
  },
  ProductDescription: {
    fontSize: 14,
    color: 'grey',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
  },
  ProductValue: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 40,
    marginLeft: 15,
   
  },
  iconName: {   
    marginTop: 25,
    marginLeft: 50,
    backgroundColor: 'deeppink',
    color: 'white',
    borderRadius: 5,
    padding: 18
    
  },
 
  
})

