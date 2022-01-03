import React from 'react'
import{Text, View, StyleSheet } from 'react-native';
import { GastoAcumulado } from './GastoAcumulado';




export const ListadoGastos = ({gastos, setModal,setGastoSelect, filtro, gastosFiltrados }) => {

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Gastos</Text>

            {
                filtro? gastosFiltrados.map(g=>(
                    <GastoAcumulado
                        key={g.id}
                        gasto={g}
                        setModal={setModal}
                        setGastoSelect={ setGastoSelect }
                    />
                )):gastos.map((g)=>(
                    <GastoAcumulado
                        key={g.id}
                        gasto={g}
                        setModal={setModal}
                        setGastoSelect={ setGastoSelect }
                    />
                ))

            }



            {
                (gastos.length === 0 ||( gastosFiltrados===0 && !!filtro ))&&// bebe haber una categoria seleccionada filtro debe ser true
                <Text style={styles.noGastos}>No hay Gastos</Text> 
                
            }
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        marginTop: 70,
        marginBottom: 100, //para que se adapte mejor a la pantalla
    },
    titulo:{
        color: '#64748B',
        fontSize: 30,
        fontWeight: '600',
        textShadowRadius: 5,
        textShadowColor:'#4278DB',
        textAlign: 'center'
    },
    noGastos:{
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#0F0F0E'
    }
})