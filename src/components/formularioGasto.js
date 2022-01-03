import React,{useState, useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet,View, TextInput, Pressable } from 'react-native';
import { Picker as ComboBox } from '@react-native-picker/picker';

import { globalStyles } from '../styles';


export const FormularioGasto = ({setModal, handleGasto, gastoSelect, setGastoSelect, eliminarGasto }) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [id, setId]=useState('')// lo definimos por si estamos editando o registro nuevo
    const [fecha, setFecha] =  useState('');
    //lo suamos para editar la informacion
    useEffect(() => {
        if( !gastoSelect?.nombre ){
            return
        }
        setNombre(gastoSelect.nombre);
        setCantidad(gastoSelect.cantidad);
        setCategoria(gastoSelect.categoria);
        setId(gastoSelect.id)
        setFecha(gastoSelect.fecha);
    }, [gastoSelect])


    const handleCancelar = ()=>{
        setModal(false);
        setGastoSelect({});
    }

    return (
        <SafeAreaView style={styles.contenedor}>
            <View style={styles.contenedorBotones}>
                <Pressable 
                    style={[styles.btn,styles.btnCancelar]}
                    onPress={handleCancelar}    
                >
                    <Text style={styles.btnTexto}>X Cancelar</Text>
                </Pressable>
                {!!id &&(//si id es verdadero muestralo !!convierte en boolean
                    <Pressable 
                    style={[styles.btn,styles.btnEliminar]}
                    onLongPress={
                        ()=>eliminarGasto(id)
                    }
                       
                    >
                        <Text style={styles.btnTexto}> Eliminar</Text>
                    </Pressable>
                )}
                
            </View>

            <View style={styles.formulario}>
                <Text style={styles.titulo}>{(gastoSelect.nombre)?'Editar ':'Nuevo '}Gasto</Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ej. Comida'
                        value={nombre}
                        onChangeText={setNombre}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Cantidad del Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ej. 300"
                        keyboardType='number-pad'
                        value={ cantidad }
                        onChangeText={ setCantidad }
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Categoría Gasto</Text>
                    <ComboBox
                        style={styles.input}
                        selectedValue={ categoria }
                        onValueChange={ (valor)=>{
                            setCategoria(valor)
                        } }
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

                <Pressable 
                    style={styles.btnSubmit}
                    onPress={()=>handleGasto({nombre, cantidad, categoria, id, fecha})}>
                    <Text style={ styles.btnsubmitText}>{(!gastoSelect.nombre)?'Agregar Gasto': 'Guardar Cambios'}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#00AEEB',
        flex: 1
    },
    contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn:{
        padding: 10,
        marginTop: 30,
        borderRadius: 15,
        marginHorizontal: 10,
        width:'40%',
        flex: 1
    },
    btnEliminar:{
        backgroundColor:'#FF3B40',
    },
    btnCancelar:{
        backgroundColor:'#DB4641',
        
        
    },
    btnTexto:{
        color: '#FFF',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    formulario:{
        ...globalStyles.contenedor
    },
    titulo:{
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#64748B'
    }, 
    campo:{
        marginVertical: 10
    },
    label:{
        color: '#000000',
        textTransform: 'uppercase',
        marginHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    input:{

        backgroundColor: '#F5F5F5',
        color:'#000000',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 10

    },
    btnSubmit:{
        backgroundColor:'#68D44A',
        padding: 12,
        marginTop: 20,
        borderRadius: 12,
        marginHorizontal: 20,
    },
    btnsubmitText:{
        textAlign: 'center',
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})
