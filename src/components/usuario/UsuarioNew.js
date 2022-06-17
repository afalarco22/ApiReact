import React, {useState } from 'react'
import {createUsuario} from '../../services/usuarioServices'
import Swal from 'sweetalert2';

export const UsuarioNew = () => {
    const [valoresForm, setValoresForm] = useState({});
    const {name ='', email='', estado  = true} = valoresForm;

    const handleOnChange = ({target}) => {
        const {name, value} = target;
        setValoresForm({...valoresForm, [name]: value})
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        const usuario = {
            name, email, estado
        }
    
        console.log(usuario)
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: '....Cargando'
    
            })
            Swal.showLoading();
    
    
            const {data} = await createUsuario(usuario);
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
          Crear Usuario
        </button>
      </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <h5>Crear Usuario</h5>
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
                                <div className="mb-3 mt-1">
                                    <label  className="form-label">e-mail</label>
                                    <input type="text" className="form-control" name='email' value={email}
                                    onChange = {(e) =>handleOnChange(e)} required />
                                </div>

                            </div>


                            <div className='row'>
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

                        </div> 
                        <button type="submit" className="btn btn-primary" 
                        >Guardar</button>
                        
                    </form> 
                </div>
            </div>
    </div>
  )
}
