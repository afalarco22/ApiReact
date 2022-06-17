import { axiosInstance } from '../helpers/axios-config'

const getMarca = () => {
    return axiosInstance.get('marcas',{
        headers:{
        'Content-type': 'application/json'}
    
    });
}

const createMarca = (data) => {
    return axiosInstance.post('marcas', data,{
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const editarMarca = (marcaId, data) => {
    return axiosInstance.put(`marcas/${marcaId}`, data, {
        headers:{
        'Content-type': 'application/json'}
    
    });

    
}

const getMarcaPorId = (marcaId) => {
    return axiosInstance.get(`marcas/${marcaId}`,{
        headers:{
        'Content-type': 'application/json'}
    
    });
}



const borrarMarca = (marcaId) => {
    return axiosInstance.delete(`marcas/${marcaId}`, {
        headers:{
        'Content-type': 'application/json'}
    
    });
   

    
}

export { getMarca, createMarca, editarMarca, getMarcaPorId, borrarMarca}