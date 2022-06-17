import { axiosInstance } from '../helpers/axios-config'

const getUsuario = () => {
    return axiosInstance.get('users',{
        headers:{
        'Content-type': 'application/json'}
    
    });
}

const createUsuario = (data) => {
    return axiosInstance.post('users', data,{
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const editarUsuario = (userId, data) => {
    return axiosInstance.put(`users/${userId}`, data, {
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const getUsuarioPorId = (userId) => {
    return axiosInstance.get(`users/${userId}`,{
        headers:{
        'Content-type': 'application/json'}
    
    });
}



const borrarUsuario = (userId) => {
    return axiosInstance.delete(`users/${userId}`, {
        headers:{
        'Content-type': 'application/json'}
    
    });
   

    
}

export {getUsuario,createUsuario,editarUsuario, getUsuarioPorId, borrarUsuario }