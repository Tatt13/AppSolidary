import React, { Component } from 'react';

import {StyleSheet} from  'react-native';

import Feed from '../topPages/feed';
import Actividades from '../topPages/actividades';
import Home from './home';
import Doacao from './doacao';
import Bazar from './bazar';
import Chat from './chat';



import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faStore, faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabs from '../topPages/homeTabs';




const BottomTabs = createBottomTabNavigator();


TabsBaixo = () => {  

    return (        
      
        <BottomTabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            
              let iconName;
              
              if (route.name === 'Home') {
                return <FontAwesomeIcon icon={faHome} style={styles.icon} color={color}/>
              } else if 
                (route.name === 'Doação') {
                  return <FontAwesomeIcon icon={faHeart} color={color}/>
              } 
              else if (route.name === 'Bazar') {
                return <FontAwesomeIcon icon={faStore} color={color}/>
              }
              else if (route.name === 'Chat') {
                return <FontAwesomeIcon icon={faCommentDots} color={color}/>
              }
  
              // You can return any component that you like here!
              return <FontAwesomeIcon name={iconName} size={size} color={color} />;

            },
            
          })}
          tabBarOptions={{            
            activeTintColor: 'deeppink',
            inactiveTintColor: 'gray',
          }}>
            
            <BottomTabs.Screen name="Home" component={HomeTabs} options={{title:'Home'}}/>
            <BottomTabs.Screen name="Doação" component={Doacao} options={{title: 'Doação'}} />
            <BottomTabs.Screen name="Bazar" component={Bazar} options={{title: 'Bazar'}}/>
            <BottomTabs.Screen name="Chat" component={Chat} options={{headerShown: true}} />
        </BottomTabs.Navigator>
      
    );


}

const styles = StyleSheet.create ({
  icon: {
    color: 'deeppink'
  }
}) 

export default TabsBaixo;

