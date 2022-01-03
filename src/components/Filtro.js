import React, { useEffect } from 'react'
import { Text, View, StyleSheet, ViewBase } from 'react-native';
import { Picker as ComboBox } from '@react-native-picker/picker';
import { globalStyles } from '../styles';

export const Filtro = ({setFiltro, filtro, gastos, setGastosFiltrados}) => {

    useEffect(() => {
        //filtramos todo el arreglo de gastos
        if(filtro ===''){
            setGastosFiltrados([])
        }else{
            const gastosFiltrados = gastos.filter(g=> g.categoria=== filtro)
            setGastosFiltrados(gastosFiltrados);
        }


    }, [filtro])

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Filtrar Gastos</Text>
            
            <ComboBox
                style={styles.input}
                selectedValue={ filtro }
                onValueChange={(valor)=>{
                    setFiltro(valor)
                }}

            >
                <ComboBox.Item  label="--Seleccione--" value=""/>
                <ComboBox.Item  label="Ahorro" value="ahorro"/>
                <ComboBox.Item  label="Comida" value="comida"/>
                <ComboBox.Item  label="Casa" value="casa"/>
                <ComboBox.Item  label="Gatso Varios" value="gastos"/>
                <ComboBox.Item  label="Ocio" value="ocio"/>
                <ComboBox.Item  label="Salud" value="salud"/>
                <ComboBox.Item  label="Suscriciones" value="suscripciones"/>
                <ComboBox.Item  label="Ropa" value="ropa"/>
            </ComboBox>

        </View>
    )
}
const styles= StyleSheet.create({
    contenedor:{
        ...globalStyles.contenedor,
        marginTop: 30
    },
    label:{
        fontSize: 22,
        fontWeight: '700',
        color: '#64748B'
    },
    input:{

        backgroundColor: '#F5F5F5',
        color:'#000000',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 10

    },
})