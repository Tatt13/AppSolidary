import React, { Component } from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import TabsBaixo from '../bottomPages/tabsBaixo';


const Stack = createStackNavigator();

Home = () => {
  

    return (        
      /* <Stack.Navigator >        
        <Stack.Screen options={{headerShown: false}} name="TabsBaixo" component={TabsBaixo}/>
      </Stack.Navigator>  */ 

      <TabsBaixo />
      
    );

}

export default Home;