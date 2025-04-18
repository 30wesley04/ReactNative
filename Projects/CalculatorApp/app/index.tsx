import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatoApp = () => {
    const { formula, prevNumber, buildNumber, clean, toggleSign, deleteLast, divideOperation, multiplyOperation, substractOperation, addOperation, calculateSubResult, calculateResult } = useCalculator();
    return (
        <View style={globalStyles.calculatorContainer}>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>{formula}</ThemeText>
                {
                    formula === prevNumber ? (<ThemeText variant='h1'> </ThemeText>) :
                        (<ThemeText variant='h2'>{prevNumber}</ThemeText>)
                }
                {/* <ThemeText variant='h2'>250</ThemeText> */}
            </View>

            {/* Filas de Botones */}
            <View style={globalStyles.row}>
                <CalculatorButton label='C' blackText color={Colors.lightGray} onPress={clean}
                />
                <CalculatorButton label='+/-' blackText color={Colors.lightGray} onPress={toggleSign}
                />
                <CalculatorButton label='DEL' blackText color={Colors.lightGray} onPress={deleteLast}
                />
                <CalculatorButton label='÷' color={Colors.orange} onPress={divideOperation}
                />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='7' color={Colors.darkGray} onPress={() => buildNumber('7')}
                />
                <CalculatorButton label='8' color={Colors.darkGray} onPress={() => buildNumber('8')}
                />
                <CalculatorButton label='9' color={Colors.darkGray} onPress={() => buildNumber('9')}
                />
                <CalculatorButton label='x' color={Colors.orange} onPress={multiplyOperation}
                />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='4' color={Colors.darkGray} onPress={() => buildNumber('4')}
                />
                <CalculatorButton label='5' color={Colors.darkGray} onPress={() => buildNumber('5')}
                />
                <CalculatorButton label='6' color={Colors.darkGray} onPress={() => buildNumber('6')}
                />
                <CalculatorButton label='-' color={Colors.orange} onPress={substractOperation}
                />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='1' color={Colors.darkGray} onPress={() => buildNumber('1')}
                />
                <CalculatorButton label='2' color={Colors.darkGray} onPress={() => buildNumber('2')}
                />
                <CalculatorButton label='3' color={Colors.darkGray} onPress={() => buildNumber('3')}
                />
                <CalculatorButton label='+' color={Colors.orange} onPress={addOperation}
                />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton label='0' doubleSize color={Colors.darkGray} onPress={() => buildNumber('0')}
                />
                <CalculatorButton label='.' color={Colors.darkGray} onPress={() => buildNumber('.')}
                />
                <CalculatorButton label='=' color={Colors.orange} onPress={calculateResult}
                />
            </View>


        </View >
    )
}

export default CalculatoApp