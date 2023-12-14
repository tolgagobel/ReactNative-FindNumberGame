import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
let minNumber = 1
let maxNumber = 100
export default function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess == userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])


    function generateNumber(min, max, exclude) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if (randomNumber === exclude) {
            return randomNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    }


    function nextGuesshandler(direction) {

        if (direction == 'lower' && currentGuess < userNumber || direction == 'greater' && currentGuess > userNumber) {
            Alert.alert("Beni yanlış yönlendiremezsin", [{ title: 'Tamam', style: 'cancel' }])
            return
        }




        if (direction == 'lower') {
            maxNumber = currentGuess
        } else {
            minNumber = currentGuess + 1
        }

        const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess)
        setCurrentGuess(newRandomNumber)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bilgisayar Tahmini</Text>
            <Text style={styles.title}>{currentGuess}</Text>
            <View>
                <Text>Altında mı Üstünde mi?</Text>
            </View>
            <View>
                <CustomButton onPress={nextGuesshandler.bind(this, 'lower')} style={styles.title}>-</CustomButton>
                <CustomButton onPress={nextGuesshandler.bind(this, 'greater')} style={styles.title}>+</CustomButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 120,
        alignItems: 'center'
    },
    title: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        borderColor: '#fff'
    }
})
