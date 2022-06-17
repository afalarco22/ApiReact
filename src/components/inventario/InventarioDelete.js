import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {borrarInvetarios, getInvetariosPorId} from '../../services/inventarioService'

import Swal from 'sweetalert2';

export const InventarioDelete = () => {

    const [valoresForm, setValoresForm] = useState({});
    const {serial ='', modelo  ='', descripcion  ='', foto_equipo  ='', color  ='', fecha_compra  ='', 
    precio  ='', usuario  ='',estado_equipo  ='', tipo_equipo  ='', marca =''} = valoresForm;
    const [inventario, setInventario] = useState({});
    const {inventarioId = ''} = useParams();

    

    const handleOnChange = ({target}) => {
        const {name, value} = target;
        setValoresForm({...valoresForm, [name]: value})
    }

    const getInventario = async () =>{
        try {

            const {data} = await getInvetariosPorId(inventarioId);
            setInventario(data);     
        } catch (error) {
            
            console.log(error)
        }

    }

    useEffect(() =>{
        getInventario();
    },[]);


    useEffect(() =>{
        if(inventario){
            setValoresForm({
                serial: inventario.serial,
                modelo: inventario.modelo,
                descripcion: inventario.modelo,
                foto_equipo: inventario.foto_equipo,
                color: inventario.color,
                fecha_compra: inventario.fecha_compra,
                precio: inventario.precio,
                usuario: inventario.usuario,
                estado_equipo: inventario.estado_equipo,
                tipo_equipo: inventario.tipo_equipo,
                marca: inventario.marca


            }, [inventario])
        }

    }, [inventario]);
    

   

    const handleOnSubmit = async (e) =>{
        e.preventDefault();

        try {
            Swal.fire({
                allowOutsideClick: false,
                text: '....Cargando'

            })
            Swal.showLoading();
            const {} = await borrarInvetarios(inventarioId);
            console.log(inventarioId)
            Swal.close();

            
        } catch (error) {
            console.log(error)
            console.log('Asegurrese de ingresa un usuario, equipo, estado equipo o marca válida')
            Swal.close();
            
        }
        
  
    }

  return (
    <div className='container'>
               <div className="card card-body">
                   <h5>Borrar inventario</h5>
                   <form onSubmit={(e) => handleOnSubmit(e)} id='formul'>
                       <div className='row'>
                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Serial</label>
                                   <input type="text" className="form-control" name='serial' value={serial}
                                   onChange = {(e) =>handleOnChange(e)}  />
                               </div>

                           </div>

                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Modelo</label>
                                   <input type="text" className="form-control" name='modelo' value={modelo}
                                   onChange = {(e) =>handleOnChange(e)} />
                               </div>

                           </div>

                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Descripción</label>
                                   <input type="text" className="form-control" name='descripcion' value={descripcion}
                                   onChange = {(e) =>handleOnChange(e)} />
                               </div>

                           </div>

                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Foto</label>
                                   <input type="text" className="form-control" name='foto_equipo' value={foto_equipo}
                                   onChange = {(e) =>handleOnChange(e)}/>
                               </div>

                           </div>

                       </div>

                       <div className='row'>
                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Color</label>
                                   <input type="text" className="form-control" name='color' value={color}
                                   onChange = {(e) =>handleOnChange(e)} />
                               </div>

                           </div>

                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Fecha Compra</label>
                                   <input type="date" className="form-control" name='fecha_compra' value={fecha_compra}
                                   onChange = {(e) =>handleOnChange(e)} />
                               </div>

                           </div>

                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Precio</label>
                                   <input type="number" className="form-control" name='precio' value={precio}
                                   onChange = {(e) =>handleOnChange(e)} />
                               </div>

                           </div>

                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Usuario</label>
                                   <input type="text" className="form-control" name='usuario' value={usuario}
                                   onChange = {(e) =>handleOnChange(e)} />
                               </div>

                           </div>

                       </div>

                       <div className='row'>
                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Estado Equipo</label>
                                   <input type="text" className="form-control" name='estado_equipo' value={estado_equipo} 
                                   onChange = {(e) =>handleOnChange(e)}/>
                               </div>

                           </div>

                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Tipo Equipo</label>
                                   <input type="text" className="form-control" name='tipo_equipo' value={tipo_equipo}
                                   onChange = {(e) =>handleOnChange(e)}/>
                               </div>

                           </div>

                           <div className='col'>
                               <div className="mb-3">
                                   <label  className="form-label">Marca</label>
                                   <input type="text" className="form-control" name='marca' value={marca}
                                   onChange = {(e) =>handleOnChange(e)} />
                               </div>

                           </div>

                           <div className='col'>
                           

                           </div>

                       </div>

                       <button type="submit" className="btn btn-primary" 
                       >Borrar</button>
                       
                   </form>           
               </div>  
    </div>
  )
}
