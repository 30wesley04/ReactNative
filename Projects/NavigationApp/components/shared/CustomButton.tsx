import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    children: string,
    color?: 'primary' | 'secondary' | 'tertiary',
    variant?: 'contained' | 'text-only',
    className?: string

}

const CustomButton = React.forwardRef(
    ({ children,
        color = 'primary',
        onPress,
        className,
        variant = 'contained',
        onLongPress }: Props, ref: React.Ref<View>) => {

        const btnColor = {
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            tertiary: 'bg-tertiary',
        }[color]

        const textColor = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary',
        }[color]

        if (variant == 'text-only') {
            return (
                <Pressable
                    onPress={onPress}
                    onLongPress={onLongPress}
                    ref={ref}
                    className={`p-3 ${className}`}>
                    <Text className={`text-center ${textColor} font-special-gothic`}>{children}</Text>
                </Pressable>
            )
        }

        return (
            <Pressable
                onPress={onPress}
                onLongPress={onLongPress}
                ref={ref}
                className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}>
                <Text className='text-white text-center font-special-gothic'>{children}</Text>
            </Pressable>
        )
    })

export default CustomButton