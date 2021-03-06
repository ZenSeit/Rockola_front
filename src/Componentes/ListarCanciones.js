import React from 'react';
import { useState, useEffect } from 'react';
import Editcan from './EditCancion';
import Formcan from './formcancion';
import Delcan from './Delcancion';
import Cerrarsesion from './AddCancion';
import bannerrockola from './Imagenes/bannerrockola.png';

export default function ListarCanciones() {

    const [cancion, setCancion] = useState([]);
    const [generocan, setgencan] = useState('');
    const [generosel, setgensel] = useState([]);

    function generateRandom(max) {
        return Math.floor(Math.random() * (max))
    }
    var set1 = new Set();

    const cargargen = () => {
        fetch("https://rockolamin.herokuapp.com/lgen", {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            }
        }).then(res => res.json())
            .then((result
            ) => {
                setgensel(result);
            })
    };

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
                
                var listale = [];
                var i = 0;
                do {
                    set1.add(generateRandom(result.length));
                    i++;
                }
                while (i < 5);
                for (var i = 0; i < set1.size; i++) {
                    listale.push(result[Array.from(set1)[i]]);
                }
                setCancion(listale);
            })
    };

    const cargarporgenero = () => {
        if (!generocan == '') {
            fetch("https://rockolamin.herokuapp.com/lgcan/" + generocan, {
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
                    if (result.length == 0) {
                        alert("No contamos con canciones de este genero aun.")
                        window.location.reload(false);
                    }
                })
        }
    };


    useEffect(cargarCanciones, []);
    useEffect(cargargen, []);

    return (


        <div>

            <div><img src={bannerrockola} className="img-fluid" alt="Responsive image" /></div>

            <div>
                <div className="row">
                    <div className="col-10">

                        <h2 className="mb-3" id="nuestras"> Nuestras canciones disponibles </h2>

                        <div>
                            <select type="select" name="genero" label="Genero de la cancion" value={generocan} onChange={(e) => setgencan(e.target.value)}>
                                <option value="" selected disabled hidden>Selecciona un genero</option>
                                {
                                    generosel.map(gene =>
                                        <option>{gene.genmu}</option>
                                    )
                                }
                            </select>
                            <button className="btn btn-secondary" onClick={cargarporgenero}>Filtrar</button>
                        </div>


                        <Formcan />

                        <div className="tabladiv">
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
                                                    <td><a href={can.enlace} target="_blank">Escuchar {can.nom}</a></td>
                                                    <td>{can.comentario}</td>

                                                    <td>{can.usercanr}</td>
                                                    <td><Editcan cant={can} /><Delcan cant={can} /> </td>

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
            <div className="cerrar"><Cerrarsesion /></div>
        </div>

    );
}