import React, {useState, useEffect} from 'react'
import {getTipo} from '../../services/tipoEquipoService'
import {TipoNew} from './TipoNew'
import {TipoCard} from './TipoCard'

export const TipoView = () => {

  const [Tipo, setTipo] = useState([]);

  const listarTipos = async ()=>{
    try {

      const {data} = await getTipo();
      console.log(data);
      setTipo(data);
      
    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(()=>{
    listarTipos();
  }, [])

  return (
    <div className="container">
      <TipoNew></TipoNew>
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
          {
            Tipo.map((tipo)=>{
              return(<TipoCard key={tipo._id} tipo ={ tipo }/>
              )
            })


          }
        </div>   
    </div>
  )
}
