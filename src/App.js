import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import GameStartScreen from '../src/screens/GameStartScreen'
import LinearGradient from 'react-native-linear-gradient'
import GameScreen from './screens/GameScreen'

export default function App() {
    const [userNumber, setUserNumber] = useState(null)

    function sendednumberHandler(sendedNumber) {
        setUserNumber(sendedNumber)
    }
    let screen = <GameStartScreen onsendedNumber={sendednumberHandler} />


    if (userNumber) {
        screen= <GameScreen userNumber={userNumber} />
    }
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a', 'transparent']} style={styles.linearGradient}>
            {screen}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,

    }
})
