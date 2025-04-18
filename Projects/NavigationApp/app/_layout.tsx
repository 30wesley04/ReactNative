import { View, Text } from 'react-native'
import { useFonts } from 'expo-font'
import './global.css'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        'SpecialGothicCondensedOne-Regular': require('../assets/fonts/SpecialGothicCondensedOne-Regular.ttf')
    })

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;

    return (
        <Slot />
        // <Stack />
    )
}

export default RootLayout