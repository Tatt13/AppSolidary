import React, { Component } from 'react';

import Home from './source/pages/bottomPages/home';
import Doacao from './source/pages/bottomPages/doacao' ;
import Bazar from './source/pages/bottomPages/bazar' ;
import Chat from './source/pages/bottomPages/chat' ;
import Login from './source/pages/login';
import Cadastro from './source/pages/cadastro';
import TabsBaixo from './source/pages/bottomPages/tabsBaixo';
import TabsCima from './source/pages/topPages/tabsCima';
import SplasComponent from './source/pages/splashComponent';
import DoacaoDinheiro from './source/pages/tiposDoacoes/doacaoDinheiro';
import DoacaoAlimento from './source/pages/tiposDoacoes/doacaoAlimento';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, View} from 'react-native'; 



const Stack = createStackNavigator();


App = () => {
  
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="SplasComponent">        
        <Stack.Screen
          options={{headerShown: false}}
          name=" "
          component={SplasComponent}
        />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        
        <Stack.Screen name="Home" component={TabsBaixo} 
          options={{ 
            headerRight: () => (
              <View style={styles.iconNot}>
                <FontAwesomeIcon
                  icon={faBell}
                  size={20}
                  color={'#363636'}
                  
                />
              </View>
            ),
          }}
        />
        <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Doar" component={Doacao}/>
        <Stack.Screen options={{title:'Doar Dinheiro'}} name="DoacaoDinheiro" component={DoacaoDinheiro}/>
        
       
        
                        
      </Stack.Navigator>                
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  iconNot: {
    
    right: 30,
    
  }
})