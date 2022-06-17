import React, {useState, useEffect } from 'react'
import {createInvetarios} from '../../services/inventarioService'
import {getUsuario} from '../../services/usuarioServices'
import {getMarca} from '../../services/marcaService'
import {getEstado} from '../../services/estadoEquipoService'
import {getTipo} from '../../services/tipoEquipoService'
import Swal from 'sweetalert2';

export const InventarioNew = () => {
    const [valoresForm, setValoresForm] = useState({});
    const {serial ='', modelo  ='', descripcion  ='', foto_equipo  ='', color  ='', fecha_compra  ='', 
    precio  ='', usuario  ='',estado_equipo  ='', tipo_equipo  ='', marca =''} = valoresForm;

    const [user, setUser] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [estados, setEstados] = useState([]);
    const [tipos, setTipos] = useState([]);


    const handleOnChange = ({target}) => {
        const {name, value} = target;
        setValoresForm({...valoresForm, [name]: value})
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        const inventario = {
            serial, modelo, descripcion, foto_equipo, color, fecha_compra, 
            precio,
            usuario:{_id: usuario},
            estado_equipo:{_id: estado_equipo}, 
            tipo_equipo:{_id: tipo_equipo}, 
            marca:{_id: marca}
        }
        console.log(inventario);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: '....Cargando'

            })
            Swal.showLoading();


            const {data} = await createInvetarios(inventario);
            console.log(data);
            Swal.close();

            
        } catch (error) {
            console.log(error)
            console.log('Asegurrese de ingresa un usuario, equipo, estado equipo o marca válida')
            Swal.close();
            
        }

        
    }
//-------------------------------------------------------------------------------------------------
    const listarUsuarios = async ()=>{
        try {
         
          const {data} = await getUsuario();
          console.log(data);
          setUser(data);
          
        } catch (error) {
          console.log(error);
          
        }
    
      }

      useEffect(()=>{
        listarUsuarios();
      },[]);
//--------------------------------------------------------------------------------------
      const listarMarcas = async ()=>{
        try {
         
          const {data} = await getMarca();
          console.log(data);
          setMarcas(data);
          
        } catch (error) {
          console.log(error);
          
        }
    
      }

      useEffect(()=>{
        listarMarcas();
      },[])
//---------------------------------------------------------------------------------
    const listarEstados = async ()=>{
        try {
        
        const {data} = await getEstado();
        console.log(data);
        setEstados(data);
        
        } catch (error) {
        console.log(error);
        
        }

    }

    useEffect(()=>{
        listarEstados();
    },[])
//---------------------------------------------------------------------------------------------------
const listarTipos = async ()=>{
    try {
    
    const {data} = await getTipo();
    console.log(data);
    setTipos(data);
    
    } catch (error) {
    console.log(error);
    
    }

}

useEffect(()=>{
    listarTipos();
},[])


  return (
    <div >

            <p>
               
                <button className="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Crear inventario
                </button>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <h5>Crear inventario</h5>
                    <form onSubmit={(e) => handleOnSubmit(e)} id='formul'>
                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Serial</label>
                                    <input type="text" className="form-control" name='serial' value={serial}
                                    onChange = {(e) =>handleOnChange(e)} required />
                                </div>

                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Modelo</label>
                                    <input type="text" className="form-control" name='modelo' value={modelo}
                                    onChange = {(e) =>handleOnChange(e)}  required/>
                                </div>

                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Descripción</label>
                                    <input type="text" className="form-control" name='descripcion' value={descripcion}
                                    onChange = {(e) =>handleOnChange(e)}  required/>
                                </div>

                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Foto</label>
                                    <input type="text" className="form-control" name='foto_equipo' value={foto_equipo}
                                    onChange = {(e) =>handleOnChange(e)} required/>
                                </div>

                            </div>

                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Color</label>
                                    <input type="text" className="form-control" name='color' value={color}
                                    onChange = {(e) =>handleOnChange(e)}  required />
                                </div>

                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Fecha Compra</label>
                                    <input type="date" className="form-control" name='fecha_compra' value={fecha_compra}
                                    onChange = {(e) =>handleOnChange(e)}  />
                                </div>

                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Precio</label>
                                    <input type="number" className="form-control" name='precio' value={precio}
                                    onChange = {(e) =>handleOnChange(e)}  required/>
                                </div>

                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Usuario</label>
                                    <select className="form-select" aria-label="Default select example"
                                    onChange = {(e) =>handleOnChange(e)} name='usuario' value={usuario}
                                    required>
                                        <option value=''>--Seleccione--</option>
                                        {
                                            user.map(usuario =>{
                                                return(<option key={usuario._id} value={usuario._id}>
                                                    {usuario.name}
                                                    </option>)
                                            })
                                        }  
                                    </select>  
                                </div>

                            </div>

                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Estado Equipo</label>
                                    <select className="form-select" aria-label="Default select example"
                                    onChange = {(e) =>handleOnChange(e)} name='estado_equipo' value={estado_equipo}
                                    required>
                                        <option value=''>--Seleccione--</option>
                                        {
                                            estados.map(estado =>{
                                                return(<option key={estado._id} value={estado._id}>
                                                    {estado.name}
                                                    </option>)
                                            })
                                        }  
                                    </select>
                                </div>

                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Tipo Equipo</label>
                                    <select className="form-select" aria-label="Default select example"
                                    onChange = {(e) =>handleOnChange(e)} name='tipo_equipo' value={tipo_equipo}
                                    required>
                                        <option value=''>--Seleccione--</option>
                                        {
                                            tipos.map(tipo =>{
                                                return(<option key={tipo._id} value={tipo._id}>
                                                    {tipo.name}
                                                    </option>)
                                            })
                                        }  
                                    </select>
                                </div>

                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Marca</label>
                                    <select className="form-select" aria-label="Default select example"
                                    onChange = {(e) =>handleOnChange(e)} name='marca' value={marca}
                                    required>
                                        <option value=''>--Seleccione--</option>
                                        {
                                            marcas.map(marca =>{
                                                return(<option key={marca._id} value={marca._id}>
                                                    {marca.name}
                                                    </option>)
                                            })
                                        }  
                                    </select>
                                </div>

                            </div>

                            <div className='col'>
                            

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
