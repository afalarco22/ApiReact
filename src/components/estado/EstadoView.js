import React, {useState, useEffect} from 'react'
import {getEstado} from '../../services/estadoEquipoService'
import {EstadoCard} from './EstadoCard'
import {EstadoNew} from './EstadoNew'


export const EstadoView = () => {

    const [Estados, setEstados] = useState([]);

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
      }, [])
    
  return (
    <div className="container">
      <EstadoNew></EstadoNew>
      
     
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
          {
            Estados.map((estado)=>{
              return(<EstadoCard key={estado._id} estado ={ estado }/>
              )
            })


          }
        </div>
        
   
       
    </div>
    
    
  )// final return
}// final EstadoView
