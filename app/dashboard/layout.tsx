import React from 'react';
import { Image, StyleSheet, Platform, TextInput, Button, Alert, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';

export default function DashboardLayout() {
    const colorScheme = useColorScheme();
    return (
        <>
            <ThemedView style={styles.titleContainer}>
                <Button title="home"></Button>
                <Button title="photo"></Button>
                <Button title="Profile"></Button>
            </ThemedView>
            {/* <Tabs screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}>
                <Button title="as" />
                <Tabs.Screen
                    name="dashboard/home"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                        ),
                    }}
                />
            </Tabs> */}
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