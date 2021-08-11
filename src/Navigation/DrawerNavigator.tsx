import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from './TabNavigator';
import { ContactStackNavigator } from './StackNavigator';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import Dashboard from '../Screens/Dashboard';


const drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <drawer.Navigator>
            <drawer.Screen name="Main" component={BottomTabNavigator} />
            <drawer.Screen name="dashboard" component={Dashboard} />
        </drawer.Navigator>
    )
}

export default DrawerNavigator;

