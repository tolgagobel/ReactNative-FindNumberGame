import { StyleSheet } from 'react-native'
import React from 'react'
import GameStartScreen from '../src/screens/GameStartScreen'
import LinearGradient from 'react-native-linear-gradient'

export default function App() {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a','transparent']} style={styles.linearGradient}>
            <GameStartScreen />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient:{
        flex:1,

    }
})
