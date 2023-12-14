import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import CustomButton from '../components/CustomButton'

export default function GameStartScreen({onsendedNumber}) {
    const [enterednumber, setEnteredNumber] = useState('')

    const handleReset = () =>{
        setEnteredNumber('')
    }

    const handleConfirm = () =>{
        const number=parseInt(enterednumber)
        if(isNaN(number) || number <= 0 || number > 99){
            Alert.alert('Geçersiz Sayı', 'Sayı 0 ile 99 arasında olmalıdır',[{text:'Tamam',style:'destructive', onPress:handleReset},
        ])
        return
        }
        onsendedNumber(number)
    }

    function handleEntered (text){
        setEnteredNumber(text)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sayı Tahmin Uygulaması</Text>
            <View style={styles.card}>
                <TextInput value={enterednumber} onChangeText={handleEntered} style={styles.input} maxLength={2} keyboardType='number-pad' />
                <View style={styles.buttons_container}>
                    <View style={styles.button_container}>
                        <CustomButton onPress={handleReset}>Temizle</CustomButton>
                    </View>
                    <View style={styles.button_container}>
                        <CustomButton onPress={handleConfirm}>Onayla</CustomButton>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:20
    },
    title:{
        fontSize:27,
        fontWeight:'bold',
        color:'#fff'
    },
    card: {
        backgroundColor: 'orange',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        width:'100%'
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'yellow',
        width: '90%',
        padding: 10,
        margin: 10,
        fontSize:30,
        fontWeight:'bold'
    },
    buttons_container: {
        flexDirection: 'row',
        margin:10,
    },
    button_container:{
        flex:1
    }
})
