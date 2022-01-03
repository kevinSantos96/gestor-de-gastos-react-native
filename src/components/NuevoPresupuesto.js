import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

import { globalStyles } from '../styles';


export const NuevoPresupuesto = ({
    handleNuevoPresupuesto,
    presupuesto, 
    setPresupuesto 
}) => {


    const handleSubmit = ()=>{
        handleNuevoPresupuesto(presupuesto)  
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}> Definir presupuesto </Text>

            <TextInput
                keyboardType='number-pad'
                placeholder='Agrega tu presupuesto: Ej. 300'
                style={styles.input}
                value={presupuesto.toString()} //se convierte a presupuesto ya que solo acepta string
                onChangeText={ setPresupuesto }
            />

            <Pressable 
                style={styles.boton}
                onPress={handleSubmit}    
            >
                <Text style={styles.textoBoton} > Agregar Presupuesto</Text>
            </Pressable>
        </View>
    )
}

const styles= StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    label:{
        textAlign: 'center',
        fontSize: 24,
        color: '#008EF0',
        
    },
    input:{ 
        color:'#252B36',
        fontSize: 18,
        backgroundColor: '#BDE1F0',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 20,
        
    },
    boton:{
        marginTop: 30,
        backgroundColor: '#3B90E6',
        padding: 10,
        borderRadius: 10
    },
    textoBoton:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})