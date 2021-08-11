import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native'

function Contact() {
    const navigation: any = useNavigation();
    return (
        <View>
            <Text>This is contact screen</Text>
            <Button title="Go to without drawer screen" onPress={() => navigation.navigate('withoutdrawer')} />
        </View>
    )
}

export default Contact;
