import React, {useState, useEffect} from 'react'
import {getUsuario} from '../../services/usuarioServices'
import {UsuarioNew} from './UsuarioNew'
import {UsuarioCard} from './UsuarioCard'

export const UsuarioView = () => {

  const [Usuario, setUsuario] = useState([]);

  const listarUsuarios = async ()=>{
    try {
      

      const {data} = await getUsuario();
      console.log(data);
      setUsuario(data);
      
    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(()=>{
    listarUsuarios();
  }, [])

  return (
    <div className="container">
      <UsuarioNew></UsuarioNew>
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
          {
            Usuario.map((usuario)=>{
              return(<UsuarioCard key={usuario._id} usuario ={ usuario }/>
              )
            })
          }
        </div>   
    </div>
  )
}
