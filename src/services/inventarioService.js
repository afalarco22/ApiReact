// Declarar 4 métodos, get, push, put, delete
import { axiosInstance } from '../helpers/axios-config'



const getInvetarios = () => {
    return axiosInstance.get('inventarios',{
        headers:{
        'Content-type': 'application/json'}
    
    });
}

const getInvetariosPorId = (inventarioId) => {
    return axiosInstance.get(`inventarios/${inventarioId}`,{
        headers:{
        'Content-type': 'application/json'}
    
    });
}

const createInvetarios = (data) => {
    return axiosInstance.post('inventarios',data,{
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const editarInvetarios = (inventarioId, data) => {
    return axiosInstance.put(`inventarios/${inventarioId}`, data, {
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const borrarInvetarios = (inventarioId) => {
    return axiosInstance.delete(`inventarios/${inventarioId}`, {
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

export {getInvetarios, createInvetarios,editarInvetarios,borrarInvetarios, getInvetariosPorId}