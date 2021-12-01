import React from 'react';
import { useState, useEffect } from 'react';
import Editcan from './EditCancion';
import Formcan from './formcancion';
import Delcan from './Delcancion';
import Cerrarsesion from './AddCancion';


export default function ListarCanciones() {

    const [cancion, setCancion] = useState([])

    const cargarCanciones = () => {
        fetch("https://rockolamin.herokuapp.com/lcan", {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            }
        }).then(res => res.json())
            .then((result
            ) => {
                setCancion(result);
            })
    };

    useEffect(cargarCanciones, []);

    return (
        
        
        
<div>
    <div><Cerrarsesion/></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        
                        <h2 className="mb-3" id="nuestras"> Nuestras canciones disponibles </h2>
                        
                        <Formcan/>
                        
                        <div className="mb-3 border rounded p-3">
                            <div className="tcancion">
                                <table className="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Artista</th>
                                            <th scope="col">Genero</th>
                                            <th scope="col">Enlace</th>
                                            <th scope="col">Comentario</th>
                                            <th scope="col">Modificado por</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cancion.map(can =>
                                                
                                                <tr>
                                                    <td key={can.id}>{can.nom}</td>
                                                    <td>{can.autor}</td>
                                                    <td>{can.gen}</td>
                                                    <td><a href={can.enlace}>Escuchar {can.nom}</a></td>
                                                    <td>{can.comentario}</td>

                                                    <td>{can.usercanr}</td>
                                                    <td><Editcan cant={can}/><Delcan cant={can}/> </td>

                                                </tr>
                                            )
                                            
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            </div>
    );


}
