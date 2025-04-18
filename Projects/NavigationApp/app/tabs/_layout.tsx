import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'red',
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'black'
            }
            // tabBarShowLabel: false
        }}>

            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Stack',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="heartbeat" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout