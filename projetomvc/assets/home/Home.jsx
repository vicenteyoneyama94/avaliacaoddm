import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaForm() {
    return (
        <View style={styles.container}>
            <Text>Formulário</Text>
            <StatusBar style="light" />
        </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ' #ccf5ff',
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 