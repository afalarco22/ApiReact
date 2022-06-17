import React, {useState, useEffect} from 'react'
import {getInvetarios} from '../../services/inventarioService'
import {InventarioCard} from './InventarioCard'
import {InventarioNew} from './InventarioNew'






export const InventarioView = () => {
 
  const [Inventarios, setInventarios] = useState([]);
 


  const listarInventario = async ()=>{
    try {

      const {data} = await getInvetarios();
      console.log(data);
      setInventarios(data);
      
    } catch (error) {
      console.log(error);
      
    }

  }

  useEffect(()=>{
    listarInventario();
  }, [])

  return (
    <div className="container">
      <InventarioNew></InventarioNew>
      
     
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
          {
            Inventarios.map((inventario)=>{
              return(<InventarioCard key={inventario._id } inventario ={ inventario }  />
              )
            })
          }

          

        
        </div>
        
   
       
    </div>
  )
}

