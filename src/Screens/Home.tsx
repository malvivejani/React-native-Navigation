import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native'

function Home() {
    const navigation: any = useNavigation();
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 20 }}>This is home screen</Text>
            <Button title="Go to about screen" onPress={() => navigation.navigate('about')} />
        </View>
    )
}

export default Home;
