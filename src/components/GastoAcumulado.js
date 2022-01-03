import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { globalStyles } from '../styles';
import { formatearCantidad, formatearFecha } from '../helpers';


const diccionarioIconos ={
    ahorro: require('../img/icono_ahorro.png'),
    comida: require('../img/icono_comida.png'),
    casa: require('../img/icono_casa.png'),
    gastos: require('../img/icono_gastos.png'),
    ocio: require('../img/icono_ocio.png'),
    salud: require('../img/icono_salud.png'),
    suscripciones: require('../img/icono_suscripciones.png'),
    ropa: require('../img/icono_ocio.png')

}

export const GastoAcumulado = ({gasto, setModal, setGastoSelect}) => {

    const {nombre,cantidad,categoria,fecha} = gasto;

    const handleAccion = ()=>{
        setModal(true);
        setGastoSelect(gasto);
    }

    return (
        <Pressable
            onLongPress={handleAccion}
        >
            <View style={styles.contenedor}>
                <View style={styles.contenido}>
                    <View style={styles.contenedorImagen}>
                        <Image 
                        style={styles.imagen}
                        source={ diccionarioIconos[categoria]}
                        />
                    </View>
                    
                    <View style={styles.contenedorTexto}>
                        <Text style={styles.categoria}>{categoria}</Text>
                        <Text style={styles.nombreGasto}>{nombre}</Text>
                        <Text style={styles.fechaGasto}>{formatearFecha(fecha)}</Text>
                    </View>
                    <Text style={styles.label}>{formatearCantidad(cantidad)}</Text>
                </View>
                
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    contenedor:{
        ...globalStyles.contenedor,
        marginTop: 8
    },
    contenido:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contenedorImagen:{
        flexDirection: 'row',
        alignItems: 'center',
      
    },
    imagen:{
        width: 80,
        height: 80,
        marginRight: 20
    },
    contenedorTexto:{
        flex: 1
    },
    categoria:{
        color: '#94A3B8',
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom:5,
    },
    nombreGasto:{
        color: '#0F0F0E',
        fontSize: 22,
        marginBottom: 5
    },
    label:{
        color: '#0F0F0E',
        fontSize: 20,
        fontWeight: '600'
    },
    fechaGasto:{
        color: '#94A3B8',
        fontSize: 14,
        fontWeight: '500'
    }

})