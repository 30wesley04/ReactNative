import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'

const index = () => {

    return <Redirect href='/(stack)/home' />
    // return (
    //     <SafeAreaView>
    //         <View className='mt-5 mx-2.5'>
    //             <Text className='text-3xl font-bold text-primary' style={{ fontFamily: 'SpecialGothicCondensedOne-Regular' }}>Hola mundoo !!</Text>
    //             <Text className='text-2xl text-secondary font-special-gothic'>Hola mundoo !!</Text>
    //             <Text className='text-xl text-tertiary font-medium'>Hola mundoo !!</Text>
    //             <Link href='/products'>Productos</Link>
    //         </View>
    //     </SafeAreaView>
    // )
}

export default index