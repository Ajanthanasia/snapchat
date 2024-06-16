// import React from 'react';
import * as React from 'react';
import { Image, StyleSheet, Platform, TextInput, Button, Alert, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DashboardHome from './home';
import { Tabs } from 'expo-router';


export default function DashboardLayout() {
    // const Tab = createBottomTabNavigator();
    const colorScheme = useColorScheme();
    return (
        <>
            {/* <ThemedView style={styles.titleContainer}>
                <Button title="home"></Button>
                <Button title="photo"></Button>
                <Button title="Profile"></Button>
            </ThemedView> */}
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                    headerShown: false,
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="signup"
                    options={{
                        title: 'Signup',
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                        ),
                    }}
                />
            </Tabs >
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