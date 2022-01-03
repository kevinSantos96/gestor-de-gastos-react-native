export const formatearCantidad = (cantidad)=>{

    
    return Number(cantidad).toLocaleString('en-US',{
        style: 'currency',
        currency: 'Lps'  
        })
}

export const GenerarId = ()=>{
    const ramdom = Math.random().toString(36).substring(2,11);//generar id de manera aleatoria
    const fecha = Date.now().toLocaleString(36);

    return ramdom + fecha;
}

export const formatearFecha =(fecha)=>{
    const fechaNueva= new Date(fecha);
    const opciones ={
        year: '2-digit',
        month:'short',
        day:'2-digit',
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
    }

    return fechaNueva.toLocaleTimeString('es-Es', opciones);
} 