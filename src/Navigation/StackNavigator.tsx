import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import Tab3Screen from '../Screens/Tab3Screen';
import Tab3Screen2 from '../Screens/Tab3Screen2';


const Stack = createStackNavigator();
const ContactStack = createStackNavigator();
const Tab3Stack = createStackNavigator();
// const navigation = useNavigation();

function StackNavigator({ navigation, route }: any) {

    console.log("navigation", navigation)

    return (
        <Stack.Navigator initialRouteName="home" screenOptions={
            {
                headerShown: false
            }
        }>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="about" component={About} />
        </Stack.Navigator>
    )
};

const ContactStackNavigator = () => {
    return (
        <ContactStack.Navigator initialRouteName="contact" screenOptions={
            {
                headerShown: false
            }
        }>
            <ContactStack.Screen name="contact" component={Contact} />
        </ContactStack.Navigator>
    )
};


const Tab3StackNavigator = () => {
    return (
        <Tab3Stack.Navigator initialRouteName="screen1" screenOptions={
            {
                headerShown: false
            }
        }>
            <Tab3Stack.Screen name="screen1" component={Tab3Screen} />
            <Tab3Stack.Screen name="screen2" component={Tab3Screen2} />
        </Tab3Stack.Navigator>
    )
};

export { StackNavigator, ContactStackNavigator, Tab3StackNavigator };


