import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactStackNavigator, StackNavigator, Tab3StackNavigator } from './StackNavigator';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }: any) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home-tab" component={StackNavigator} options={({ route }) => {
                let tabbarVisible;
                const routeName = getFocusedRouteNameFromRoute(route);
                if (routeName === "about") {
                    tabbarVisible = false
                }
                return {
                    tabBarVisible: tabbarVisible
                }
            }} />
            <Tab.Screen name="contact-tab" component={ContactStackNavigator} />
            <Tab.Screen name="Tab-3" component={Tab3StackNavigator} />
        </Tab.Navigator>
    )
};

export default BottomTabNavigator;