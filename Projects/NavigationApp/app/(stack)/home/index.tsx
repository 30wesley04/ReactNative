import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>

                <CustomButton onPress={() => router.push('/products')}
                    color='primary' className='mb-2'>Productos</CustomButton>

                <CustomButton className='mb-2' color='secondary' onPress={() => router.push('/profile')}>Perfil</CustomButton>

                <CustomButton className='mb-2' color='tertiary' onPress={() => router.push('/settings')}>Ajuestes</CustomButton>

                <Link href='/products' asChild>
                    <CustomButton className='mb-2' variant='text-only' color='primary'>Productos</CustomButton>
                </Link>
                {/* <Text>HomeScreen</Text> */}
                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Configuracion</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen