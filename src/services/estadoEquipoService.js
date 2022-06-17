import { axiosInstance } from '../helpers/axios-config'


const getEstado = () => {
    return axiosInstance.get('estadoequipos',{
        headers:{
        'Content-type': 'application/json'}
    
    });
}

const createEstado = (data) => {
    return axiosInstance.post('estadoequipos', data,{
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const editarEstado = (estadoId, data) => {
    return axiosInstance.put(`estadoequipos/${estadoId}`, data, {
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const getEstadoPorId = (estadoId) => {
    return axiosInstance.get(`estadoequipos/${estadoId}`,{
        headers:{
        'Content-type': 'application/json'}
    
    });
}



const borrarEstado = (estadoId) => {
    return axiosInstance.delete(`estadoequipos/${estadoId}`, {
        headers:{
        'Content-type': 'application/json'}
    
    });
   

    
}

export {createEstado, getEstado, editarEstado, borrarEstado, getEstadoPorId}