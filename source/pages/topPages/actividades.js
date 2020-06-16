import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';



export default class Actividades extends Component {
  render() {
    return (

      <View style={{ flex: 2, backgroundColor: 'white' }}>
        <View style={{
          flex: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,

          elevation: 24,
        }} >
          <Image
            resizeMode='contain'
            source={require('../../assets/panfletoDesengaveta.png')}
            style={{

              width: 390,
              height: 465,
              marginTop: 25,
              marginLeft: 15,
              borderRadius: 15,
              elevation: 10
            }}
          />
        </View>
      </View>


    );
  }
}

