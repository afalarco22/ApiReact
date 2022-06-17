import React from 'react'
import { Link } from 'react-router-dom'

export const UsuarioCard = (props) => {
    const {usuario} = props
    
  return (
    <div className="col" >
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Características </h5>
                        <hr/>
                        <p className="card-text">{`Nombre: ${usuario.name}`}</p>
                        <p className="card-text">{`E-mail: ${usuario.email}`}</p>
                        <p className="card-text">{`Estado: ${usuario.estado}`}</p>
                    
                        <p className="card-text">{`Fecha de creación: ${usuario.createdAt}`}</p>
                        <p className="card-text">{`Fecha de actualización: ${usuario.updatedAt}`}</p>
                        <Link to={`usuarios/edit/${usuario._id}`}> Editar</Link>
                        <br></br>
                        <Link to={`usuarios/delete/${usuario._id}`}> Borrar</Link>
                    </div>
                </div>
        </div>
  )
}
