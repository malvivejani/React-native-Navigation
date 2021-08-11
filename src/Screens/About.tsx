import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'

function About() {

    const navigation: any = useNavigation();
    return (
        <View>
            <Text>This is about screen</Text>

            <Button title="Go to without drawer screen" onPress={() => navigation.navigate('withoutdrawer')} />
            <Button title="Go to Tab3 screen2 screen" onPress={() => navigation.navigate('Tab-3', { screen: 'screen2' })} />
        </View>
    )
}

export default About
