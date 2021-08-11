import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native'

function Tab3Screen() {
    const navigation: any = useNavigation();
    return (
        <View>
            <Text>Tab3 screen</Text>
            <Button title="Go to Home screen" onPress={() => navigation.navigate('home-tab', { screen: 'home' })} />
        </View>
    )
}

export default Tab3Screen;
