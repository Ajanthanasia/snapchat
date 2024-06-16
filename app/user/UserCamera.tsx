import React from "react";
import { Image, StyleSheet, Platform, TextInput, Button, Alert, Linking, View, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function UserCamera() {
    return (
        <ScrollView style={styles.container}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Camera</ThemedText>
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A1CEDC', // Add your desired background color,
        paddingTop: 50,
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 20,
        backgroundColor: '#008000',
        borderRadius: 20,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },

    formContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 10,
        color: 'white',
    },
    label: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
});
