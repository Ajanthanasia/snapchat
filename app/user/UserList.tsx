import React, { useState } from "react";
import { Image, StyleSheet, Platform, TextInput, Button, Alert, Linking, View, ScrollView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function UserList() {
    const users = ['Mai', 'Mayu'];
    const [url, setUrl] = useState('#');
    const getData = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heW9vcmkubG9nYW5hdGhhbkBlcGl0ZWNoLmV1IiwiaWF0IjoxNzE4MDkxOTc2fQ.-X8Bdzx0cZWGFI7KziFm9nAmppIE36vOgtfe6IUxf6U'
                },
                body: JSON.stringify(''),
            });
            const responseData = await response.json();
            console.log(response);
            console.log(responseData);
            if (response.ok) {
                Alert.alert('Registration successful');
            } else {
                Alert.alert('Registration error', responseData.message || 'Unknown error occurred');
            }
        } catch (error) {
            Alert.alert('Registration error');
        }
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">List of Users</ThemedText>
                </ThemedView>
                {users.map((user) => (
                    <ThemedView style={styles.userContainer}>
                        <ThemedText type="title" style={styles.userField}>{user}</ThemedText>
                    </ThemedView>
                ))}
            </ScrollView>
        </>
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
        marginBottom: 10,
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
    },
    userContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 5,
    },
    userField: {
        color: '#000000',
    }
});
