import React,{ useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Modal
} from 'react-native';

import { ControlPresupuesto } from './src/components/ControlPresupuesto';
import { Header } from './src/components/Header';
import { NuevoPresupuesto } from './src/components/NuevoPresupuesto';
import { FormularioGasto } from './src/components/formularioGasto';
import { GenerarId } from './src/helpers';
import { ListadoGastos } from './src/components/ListadoGastos';
import { Filtro } from './src/components/Filtro';

const App=()=> {
  
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);//cambiar su valor cuando el presupuesto sea valido
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([ ]);
  const [modal, setModal] = useState(false);//activar el modal con el boton   
  const [gastoSelect, setGastoSelect] = useState({});
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])
  

  const handleNuevoPresupuesto =(presupuesto)=>{
    if(Number(presupuesto)>0){
      setIsValidPresupuesto(true);

    }else{
      Alert.alert(
        'Error',
        'El presupuesto no puede ser menor a L. 0',
        [{text:'Aceptar'}]
      )
    }
  }

   //Añadir gasto 
  const handleGasto=(gasto)=>{
    if([gasto.nombre, gasto.cantidad, gasto.categoria].includes('')){//evaluamos que no vengan campos vacios
      Alert.alert('Error','todos los campos son obligatorios',[{text:'Aceptar' }])
      return
    }
    
    if(gasto.id){
     const gastosActualizados = gastos.map( gastoState=> gastoState.id === gasto.id? gasto : gastoState);
     setGastos(gastosActualizados)
    }else{
      gasto.id = GenerarId();
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto]);//pasamos una copia de ;os gastos
    }

    //añadir un nuevo gasto al state
    

    setGastoSelect({});
    setModal(false);
  };

  //ELIMINAR GASTO  

  const eliminarGasto = (id)=>{
    Alert.alert('¿Deseas Eliminar este gasto?','',
    [{text:'No', style:'cancel'},
    {text:'Si, Eliminar',onPress:()=>{
      const gastosActualizados = gastos.filter(gastoState=> gastoState.id !==id);

      setGastos(gastosActualizados);
      setModal(false);// cerramos el modal
      setGastoSelect({});// borramos el gastoo seleccionaod
    }}
    ]);


  }

  return (
    <View style={styles.contenedor}>
      <ScrollView>
          <View style={styles.header}>
            <Header/>

            {
              (isValidPresupuesto)? 
              (
                <ControlPresupuesto 
                  presupuesto={ presupuesto }
                  gastos={ gastos } />

              ): 
              (<NuevoPresupuesto
                  presupuesto={ presupuesto }
                  setPresupuesto = { setPresupuesto } 
                  handleNuevoPresupuesto ={ handleNuevoPresupuesto }
              />)
            }
            
          </View>
        {
          (isValidPresupuesto)&&(
            <>
            <Filtro
              filtro={ filtro }
              setFiltro={ setFiltro }
              gastos={ gastos }
              setGastosFiltrados={ setGastosFiltrados }

            />

            <ListadoGastos 
              gastos={ gastos }
              setModal = { setModal }
              setGastoSelect={ setGastoSelect }
              filtro={ filtro }
              gastosFiltrados={ gastosFiltrados }
            />
          </>)
        }
      </ScrollView>
        
          {
            (modal) && (
              <Modal 
                animationType='slide'
                visible={modal}
                onRequestClose={()=>{
                  setModal(!modal)
                }}
              >
                <FormularioGasto 
                  setModal={ setModal }
                  handleGasto={ handleGasto }
                  gastoSelect={gastoSelect}//madamos esta variable con los datos de un gasto a editar
                  setGastoSelect={ setGastoSelect }
                  eliminarGasto={ eliminarGasto }
                />
             </Modal>  
            )
          }


        {
          isValidPresupuesto && (
            <Pressable
              style={styles.btnAdd}
              onPress={()=>setModal(true)}
            >
              <Text style={styles.btnTexto}>+</Text>
            </Pressable>
          )
        }
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#F5F5F5',
    flex: 1
  },
  header:{
    backgroundColor: '#008EF0',
    minHeight:400
  },
  image:{
    height: 70,
    width: 70,
    position: 'absolute',
    top: 150,
    right:20
  },
  btnAdd:{
    backgroundColor:'#1996E3',
    borderRadius: 50,
    bottom:10,
    width:50,
    height: 50,
    padding:40,
    right: 15,
    position: 'absolute'
  },
  btnTexto:{
    color: '#FFF',
    fontWeight: '700',
    fontSize:50,
    textTransform: 'uppercase'
    
  }

});

export default App;
