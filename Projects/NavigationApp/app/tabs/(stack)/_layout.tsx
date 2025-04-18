import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                // headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}>
            <Stack.Screen name='home/index'
                options={{
                    title: 'Inicio',
                }} />

            <Stack.Screen name='products/index'
                options={{
                    title: 'Products Screen',
                    // animation: 'fade_from_bottom'
                }} />

            <Stack.Screen name='profile/index'
                options={{ title: 'Profile Screen' }} />

            <Stack.Screen name='settings/index'
                options={{ title: 'Settings Screen' }} />

            <Stack.Screen name='products/[id]'
                options={{ title: 'Producto' }} />
        </Stack>
    )
}

export default StackLayout