import React, { useState } from 'react';
import { Image, StyleSheet, Platform, TextInput, Button, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

function NextPage() {
    const navigation = useNavigation();
    navigation.navigate('/');
}

export default function SignUpScreen() {

    const [click, setClick] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [url, setUrl] = useState("#");

    const handleSubmit = () => {
        const data = {
            email: email,
            username: username,
            profilePicture: null,
            password: password,
        };
        if (username == null || username == "") {
            Alert.alert('Error', 'Username is required');
        } else if (email == null || email == "") {
            Alert.alert('Error', 'Email is required');
        } else if (password == null || password == "") {
            Alert.alert('Error', 'Password is required');
        } else {
            console.log('hi');
            // navigation.navidate('(tabs)/index', {});
            // const loginIntoSystem = async (data) => {
            //     try {
            //         const response = await fetch(url, {
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //             },
            //             body: JSON.stringify(data),
            //         }).then(response => response.json()).then(responseData => {
            //             console.log(repsonseData);
            //             Alert.alert('Login successful', responseData);
            //         }).catch(error => {
            //             Alert.alert('Login error', error);
            //         });
            //     } catch (error) {
            //         console.log(error);
            //     }
            // }
        }
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Register your Account </ThemedText>
            </ThemedView>
            <ThemedView style={styles.formContainer}>
                <ThemedText type="title">Username : </ThemedText>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    style={styles.input}
                />
                <ThemedText type="title">Email : </ThemedText>
                <TextInput
                    placeholder="Username"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
                <ThemedText type="title">Password : </ThemedText>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                />
                <Button title="Sign In" onPress={handleSubmit} />
            </ThemedView>
        </ParallaxScrollView>
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
