import React from "react";
import { Image, StyleSheet, Platform, TextInput, Button, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DashboardLayout from "./layout";

export default function DashboardHome() {
    return (
        <>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome to SnapChat </ThemedText>
            </ThemedView>
            <DashboardLayout />
        </>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
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