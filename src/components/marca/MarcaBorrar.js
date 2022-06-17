import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {borrarMarca, getMarcaPorId} from '../../services/marcaService'
import Swal from 'sweetalert2';

export const MarcaBorrar = () => {

    const [valoresForm, setValoresForm] = useState({});
    const {name ='', estado  = true} = valoresForm;
    const [marca, setMarca] = useState({});
    const {marcaId = ''} = useParams();
    console.log(marcaId);

    const getMarca = async () =>{
        try {

            const {data} = await getMarcaPorId(marcaId);
            console.log(data);
            setMarca(data);     
        } catch (error) {   
            console.log(error)
        }

    }

    useEffect(() =>{
        getMarca();

    },[]);


    useEffect(() =>{
        if(marca){
            setValoresForm({
                name: marca.name,
                estado: marca.estado,
            }, [marca])
        }

    }, [marca]);

    const handleOnChange = ({target}) => {
        const {name, value} = target;
        setValoresForm({...valoresForm, [name]: value})
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        const marca = {
            name, estado
        }

        console.log(marca)
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: '....Cargando'

            })
            Swal.showLoading();


            const {data} = await borrarMarca(marcaId, marca);
            console.log(data)
            Swal.close();

            
        } catch (error) {
            console.log(error)
            console.log('Asegurrese de ingresar un nombre')
            Swal.close();
            
        }

    }
    
  return (
    <div className='container'>
        <div className="card card-body">
            <h5>Borrar Marca</h5>
            <form onSubmit={(e) => handleOnSubmit(e)} id='formul'>
                <div className='row'>
                    <div className='col'>
                        <div className="mb-3">
                            <label  className="form-label">Nombre</label>
                            <input type="text" className="form-control" name='name' value={name}
                            onChange = {(e) =>handleOnChange(e)} required />
                        </div>

                    </div>

                    <div className='col'>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Estado:</label>
                            <select 
                                required
                                className="form-select" 
                                aria-label="Default select example"
                                value={estado}
                                onChange={(e) =>handleOnChange(e)}
                                name='estado'                         >
                                <option value={true}>Activo</option>
                                <option value={false}>Inactivo</option>
                                </select>
                                        
                                    
                        </div>

                    </div>

                </div>

                <button type="submit" className="btn btn-primary" 
                >Borrar</button>
                
            </form>           
        </div>  
</div>  
  )
}
