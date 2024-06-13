import React from 'react';
import { Image, StyleSheet, Platform, TextInput, Button, Alert, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardHome from './dashboard/home';

export default function Route() {
    const Stack = createStackNavigator();
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="dashboard/home" component={DashboardHome} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
});