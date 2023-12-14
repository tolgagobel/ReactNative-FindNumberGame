import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function GameScreen({ userNumber }) {
    const initialGuess = generateNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    function generateNumber(min, max, exclude) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if (randomNumber === exclude) {
            return randomNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bilgisayar Tahmini</Text>
            <Text style={styles.title}>{currentGuess}</Text>
            <View>
                <Text>Altında mı Üstünde mi?</Text>
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
