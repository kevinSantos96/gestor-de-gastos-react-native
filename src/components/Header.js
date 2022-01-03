import React from 'react'
import { Text, View, StyleSheet,SafeAreaView } from 'react-native'


export const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.texto}>
            Planificador de Gastos
            </Text>
        </SafeAreaView>
        
    )
}

const styles= StyleSheet.create({

    texto:{
        textAlign:'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: '600',
        paddingTop: 20,
    },
})
