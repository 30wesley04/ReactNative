import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from '@/store/products.store';


const ProductScreen = () => {
    const { id } = useLocalSearchParams();
    console.log(id);

    const product = products.find(p => p.id == id);
    if (!product) {
        return <Redirect href='/' />
    }
    return (
        <View className='px-5 mt-10'>
            <Text className='font-special-gothic text-2xl'>{product.title}</Text>
            <Text className=''>{product.description}</Text>
            <Text className='font-special-gothic'>{product.price}</Text>
        </View>
    )
}

export default ProductScreen