import { axiosInstance } from '../helpers/axios-config'

const getTipo = () => {
    return axiosInstance.get('equipos',{
        headers:{
        'Content-type': 'application/json'}
    
    });
}

const createTipo = (data) => {
    return axiosInstance.post('equipos', data,{
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const editarTipo = (tipoId, data) => {
    return axiosInstance.put(`equipos/${tipoId}`, data, {
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const getTipoPorId = (tipoId) => {
    return axiosInstance.get(`equipos/${tipoId}`,{
        headers:{
        'Content-type': 'application/json'}
    
    });
}



const borrarTipo = (tipoId) => {
    return axiosInstance.delete(`equipos/${tipoId}`, {
        headers:{
        'Content-type': 'application/json'}
    
    });
   

    
}

export { getTipo, createTipo, editarTipo, getTipoPorId, borrarTipo }