import React, {useState, useEffect} from 'react'
import {getMarca} from '../../services/marcaService'
import {MarcaNew} from './MarcaNew'
import {MarcaCard} from './MarcaCard'

export const MarcaView = () => {

  const [Marca, setMarca] = useState([]);

  const listarMarcas = async ()=>{
    try {

      const {data} = await getMarca();
      console.log(data);
      setMarca(data);
      
    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(()=>{
    listarMarcas();
  }, [])




  return (
    <div className="container">
      <MarcaNew></MarcaNew>
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
          {
            Marca.map((marca)=>{
              return(<MarcaCard key={marca._id} marca ={ marca }/>
              )
            })


          }
        </div>   
    </div>
  )
}
