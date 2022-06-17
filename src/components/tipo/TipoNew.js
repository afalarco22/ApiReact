import React, {useState } from 'react'
import {createTipo} from '../../services/tipoEquipoService'
import Swal from 'sweetalert2';

export const TipoNew = () => {
  const [valoresForm, setValoresForm] = useState({});
  const {name ='', estado  = true} = valoresForm;

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


        const {data} = await createTipo(tipo);
        console.log(data)
        Swal.close();

        
    } catch (error) {
        console.log(error)
        console.log('Asegurrese de ingresar un nombre')
        Swal.close();
        
    }

}
  
  return (
    <div >
      <p>         
        <button className="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Crear Tipo de Equipo
        </button>
      </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <h5>Crear Tipo de Equipo</h5>
                    <form onSubmit={(e) => handleOnSubmit(e)} id='formul'>
                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3 mt-1">
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
                                        name='estado'
                                                        >
                                        <option value={true}>Activo</option>
                                        <option value={false}>Inactivo</option>
                                    </select>
                                    
                                 
                                </div>

                            </div>

                        </div> 
                        <button type="submit" className="btn btn-primary" 
                        >Guardar</button>
                        
                    </form> 
                </div>
            </div>
    </div>
  )
}
