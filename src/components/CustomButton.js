import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function CustomButton({ children, onPress }) {
    return (
        <View>
            <Pressable onPress={onPress} style={({pressed}) =>
            pressed ?
            [styles.body,styles.pressed]
            :styles.body}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:17,
        fontWeight:'500',
        color:'#fff'
    },
    pressed:{
        opacity:0.5
    }

})
