import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import { Link } from 'expo-router'

const ProductsScreen = () => {
    return (
        <View className='flex flex1 px-4'>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className='mt-10'>
                        <Text className='text-2xl font-special-gothic'>{item.title}</Text>
                        <Text className=''>{item.description}</Text>
                        <View className='flex flex-row justify-between'>
                            <Text className='font-special-gothic'>{item.price}</Text>
                            <Link href={`/tabs/products/${item.id}`}
                                className='text-primary'>
                                Ver detalles
                            </Link>
                        </View>
                    </View>
                )}
            // renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    )
}

export default ProductsScreen