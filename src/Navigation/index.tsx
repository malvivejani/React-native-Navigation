import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigator';
import BottomTabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import WithoutDrawer from '../Screens/WithoutDrawer';

const RootStack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Drawer">
                <RootStack.Screen name="Drawer" component={DrawerNavigator} />
                <RootStack.Screen name="withoutdrawer" component={WithoutDrawer} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
