import React from 'react'
import { Link } from 'react-router-dom'


export const MarcaCard = (props) => {
    const {marca} = props
  return (
            <div className="col" >
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Características </h5>
                        <hr/>
                        <p className="card-text">{`Nombre: ${marca.name}`}</p>
                        <p className="card-text">{`Estado: ${marca.estado}`}</p>
                    
                        <p className="card-text">{`Fecha de creación: ${marca.createdAt}`}</p>
                        <p className="card-text">{`Fecha de actualización: ${marca.updatedAt}`}</p>
                        <Link to={`marcas/edit/${marca._id}`}> Editar</Link>
                        <br></br>
                        <Link to={`marcas/delete/${marca._id}`}> Borrar</Link>
                    </div>
                </div>
        </div>
  )
}
