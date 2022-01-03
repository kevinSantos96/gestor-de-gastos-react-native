import React, {useState, useEffect} from 'react';
import { Text, View,Pressable, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator'

import { globalStyles } from '../styles';
import { formatearCantidad } from '../helpers';


export const ControlPresupuesto = ({ presupuesto, gastos, resetearApp }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [ porcentaje, setPorcentaje]= useState(0)

    //cuando del presupuesto gastado y disponible
    useEffect(() => {
        const totalGastado = gastos.reduce((total,gasto)=>Number(gasto.cantidad)+ total, 0)//total es el acumulador
        const totalDisponible = presupuesto-totalGastado;

        const nuevoPorcentaje =(
            ((presupuesto-totalDisponible)/presupuesto)*100
        )

        setPorcentaje(nuevoPorcentaje);
        setGastado(totalGastado);
        setDisponible(totalDisponible);

    }, [gastos])// le pasamos la dependencia para que se vaya restando del saldo disponible


    return (
        <View style={styles.contenedor}>
            <View style={styles.centrarGrap}>
                <CircularProgress
                    value={porcentaje}
                    duration={1500}
                    radius={150}
                    valueSuffix='%'
                    title='Gastado'
                    activeStrokeColor={'#41AFD1'}
                    activeStrokeSecondaryColor={'#C25AFF'}
                    activeStrokeWidth={20}
                    inActiveStrokeWidth={20}
                    titleStyle={{fontWeight:"bold", fontSize: 30}}
                />
            </View>
            <View style={styles.contenedorTexto}>
                <Pressable
                    style={styles.boton}
                    onLongPress={resetearApp}
                >
                    <Text 
                        style={styles.textoBoton}
                    >Reiniciar App</Text>
                </Pressable>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Presupuesto:{' '}</Text>
                    {formatearCantidad(presupuesto)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Disponible:{' '}</Text>
                    {formatearCantidad(disponible)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Gastado:{' '}</Text>
                    {formatearCantidad(gastado)}
                </Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({

    contenedor: {
        ...globalStyles.contenedor
    },
    centrarGrap:{
        alignItems: 'center',
    },
    boton:{
        backgroundColor:'#DB2777',
        padding: 10,
        marginBottom:40,
        borderRadius: 10
    },
    textoBoton:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    contenedorTexto:{
        marginTop: 35
    },
    valor:{
        color: '#193D8F',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 8
    },
    label:{
        color: '#215FED',
        fontWeight: '700' 
    },
    
})