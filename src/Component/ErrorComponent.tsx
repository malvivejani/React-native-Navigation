import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, DevSettings } from 'react-native';

export const ErrorComponent = () => {
    return (
        <View style={styles.wrapper}>
            {/* <Image
                style={styles.errorImage}
                source={require('../../assets/Test3.gif')}
            /> */}
            <Text style={styles.errorTextMessage}>
                Ahhh!!! Something went worng
            </Text>
            <Text style={styles.errorText}>
                Try again later
            </Text>
            <Text style={{ fontSize: 15, color: '#fff', paddingVertical: 5 }}>Or</Text>
            <TouchableOpacity onPress={() => { DevSettings.reload() }}>
                <Text style={styles.reloadText}>Reload</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#258d78'
    },
    errorImage: {
        width: 300,
        height: 300
    },
    errorTextMessage: {
        color: '#fff',
        paddingTop: 50,
        fontSize: 20,
        fontWeight: 'bold'
    },
    errorText: {
        color: '#fff',
        paddingTop: 10,
        fontSize: 15,
    },
    reloadText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
})
