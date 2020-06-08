import React from 'react';

import Feed from './feed';
import Actividades from './actividades';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

TabsCima = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Feed" component={Feed} />
            <TopTab.Screen name="Actividades" component={Actividades} />
        </TopTab.Navigator>
    );
}
    
export default TabsCima;

