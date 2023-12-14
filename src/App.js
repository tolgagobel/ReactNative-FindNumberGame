import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import GameStartScreen from '../src/screens/GameStartScreen'
import LinearGradient from 'react-native-linear-gradient'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
    const [userNumber, setUserNumber] = useState(null)
    const [gameisOver, setGameisOver] = useState(true)

    function sendednumberHandler(sendedNumber) {
        setUserNumber(sendedNumber)
        setGameisOver(false)
    }
    let screen = <GameStartScreen onsendedNumber={sendednumberHandler} />


    if (userNumber) {
        screen= <GameScreen userNumber={userNumber} />
    }

    if (gameisOver && userNumber) {
        screen = <GameOverScreen />
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
