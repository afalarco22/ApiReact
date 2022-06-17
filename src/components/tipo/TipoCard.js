import React from 'react'
import { Link } from 'react-router-dom'

export const TipoCard = (props) => {
  const {tipo} = props
  return (
    <div className="col" >
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Características </h5>
                        <hr/>
                        <p className="card-text">{`Nombre: ${tipo.name}`}</p>
                        <p className="card-text">{`Estado: ${tipo.estado}`}</p>
                    
                        <p className="card-text">{`Fecha de creación: ${tipo.createdAt}`}</p>
                        <p className="card-text">{`Fecha de actualización: ${tipo.updatedAt}`}</p>
                        <Link to={`equipos/edit/${tipo._id}`}> Editar</Link>
                        <br></br>
                        <Link to={`equipos/delete/${tipo._id}`}> Borrar</Link>
                    </div>
                </div>
        </div>
  )
}
