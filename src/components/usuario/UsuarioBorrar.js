import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { borrarUsuario, getUsuarioPorId} from '../../services/usuarioServices'
import Swal from 'sweetalert2';




export const UsuarioBorrar = () => {
    const [valoresForm, setValoresForm] = useState({});
    const {name ='', email='', estado  = true} = valoresForm;
    const [usuario, setTUsuario] = useState({});
    const {userId = ''} = useParams();
    console.log(userId);

    const getUsuario = async  () =>{
        try {
    
            const {data} = await getUsuarioPorId(userId);
            console.log(data);
            setTUsuario(data);     
        } catch (error) {   
            console.log(error)
        }
    
    }

    useEffect(() =>{
        getUsuario();
      
      },[]);

      useEffect(() =>{
        if(usuario){
            setValoresForm({
                name: usuario.name,
                email: usuario.email,
                estado: usuario.estado
            }, [usuario])
        }
      }, [usuario]);

      const handleOnChange = ({target}) => {
        const {name, value} = target;
        setValoresForm({...valoresForm, [name]: value})
      }

      const handleOnSubmit = async (e) =>{
        e.preventDefault();
        const usuario = {
            name, estado
        }
      
        console.log(usuario)
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: '....Cargando'
      
            })
            Swal.showLoading();
      
      
            const {data} = await borrarUsuario(userId, usuario);
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
            <h5>Borrar Usuario</h5>
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
                            <label  className="form-label">E-mail</label>
                            <input type="text" className="form-control" name='email' value={email}
                            onChange = {(e) =>handleOnChange(e)} required />
                        </div>

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
