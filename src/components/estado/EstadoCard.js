import React from 'react'
import { Link } from 'react-router-dom'


export const EstadoCard = (props) => {
    const {estado} = props
  return (
    <div className="col" >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Características </h5>
                    <hr/>
                    <p className="card-text">{`Nombre: ${estado.name}`}</p>
                    <p className="card-text">{`Estado: ${estado.estado}`}</p>
                   
                    <p className="card-text">{`Fecha de creación: ${estado.createdAt}`}</p>
                    <p className="card-text">{`Fecha de actualización: ${estado.updatedAt}`}</p>
                     <Link to={`estados/edit/${estado._id}`}> Editar</Link>
                     <br></br>
                     <Link to={`estados/delete/${estado._id}`}> Borrar</Link>
                  </div>
                </div>
    </div>
  )
}
