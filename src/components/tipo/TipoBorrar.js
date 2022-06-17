import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { borrarTipo, getTipoPorId} from '../../services/tipoEquipoService'
import Swal from 'sweetalert2';

export const TipoBorrar = () => {
  const [valoresForm, setValoresForm] = useState({});
  const {name ='', estado  = true} = valoresForm;
  const [tipo, setTipo] = useState({});
  const {tipoId = ''} = useParams();
  console.log(tipoId);

  const getTipo = async  () =>{
    try {

        const {data} = await getTipoPorId(tipoId);
        console.log(data);
        setTipo(data);     
    } catch (error) {   
        console.log(error)
    }

}

useEffect(() =>{
  getTipo();

},[]);


useEffect(() =>{
  if(tipo){
      setValoresForm({
          name: tipo.name,
          estado: tipo.estado
      }, [tipo])
  }

}, [tipo]);

const handleOnChange = ({target}) => {
  const {name, value} = target;
  setValoresForm({...valoresForm, [name]: value})
}

const handleOnSubmit = async (e) =>{
  e.preventDefault();
  const tipo = {
      name, estado
  }

  console.log(tipo)
  try {
      Swal.fire({
          allowOutsideClick: false,
          text: '....Cargando'

      })
      Swal.showLoading();


      const {data} = await  borrarTipo(tipoId);
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
            <h5>Borrar Tipo de Equipo</h5>
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
