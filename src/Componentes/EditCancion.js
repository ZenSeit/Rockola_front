import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';


export default function Editcan(cant) {


    const string =Object.values(cant);
    const stringcan=Object.values(string[0])



    const [id, setId]=useState(stringcan[0]);
    const [nom, setNomcan] = useState(stringcan[1]);
    const [autor, setArtcan] = useState(stringcan[2]);
    const [gen, setGen] = useState(stringcan[3]);
    const [enlace, setEnla] = useState(stringcan[4]);
    const [comentario, setComen] = useState(stringcan[5]);
    const [usercanr, setUser] = useState(localStorage.nickname);
    const [mod, setMod] = useState(false);
    const cambio = () => setMod(!mod);
    const [generosel, setgensel] = useState([]);

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



    const EditarCancion = async (e) => {
        setId(stringcan[0]);
        setUser(localStorage.nickname);
        const editcan = { id, nom, autor, gen, enlace, comentario, usercanr }
        console.log(editcan)
        e.preventDefault();
        await fetch("https://rockolamin.herokuapp.com/acan", {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify(editcan)
        }).then(function(response){
            if(response.status===200){
                alert("Cancion editada con exito")
                window.location.reload(false);
            }else{alert("No se pudo editar la cancion")}
            
        });

    }

    useEffect(cargargen, []);

    return (

        <div>
            <div>

                <Button color="warning" onClick={cambio}>Editar cancion</Button>
            </div>
            <Modal isOpen={mod}>
                <ModalHeader>
                    Editar canci??n

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={cambio} className="cerrarbtn">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>

                </ModalHeader>
                <ModalBody>
                <AvForm onValidSubmit={EditarCancion}>
                        <AvField name="cancion" label="Nombre cancion" placeholder="Escribe el nombre de la cancion" value={nom} onChange={(e) => setNomcan(e.target.value)} type="text" required validate={{
                            required: { value: true, errorMessage: 'Ingresa el nombre de la cancion' },
                            minLength: { value: 1, errorMessage: 'El nombre de la cancion debe contener entre 1 y 30 caracteres' },
                            maxLength: { value: 30, errorMessage: 'El nombre de la cancion debe contener entre 1 y 30 caracteres' }
                        }} />
                        <AvField name="autor" label="Artista" placeholder="Ingresa el artista" value={autor} onChange={(e) => setArtcan(e.target.value)} type="text" validate={{
                            required: { value: true, errorMessage: 'Artista' },
                            pattern: { value: '^[a-zA-Z0-9_ ]*$', errorMessage: 'El artista solo puede contener letras y numeros' },
                            minLength: { value: 2, errorMessage: 'Tu nombre debe contener al menos 2 caracteres' },
                            maxLength: { value: 40, errorMessage: 'Nombre demasiado largo' }
                        }} />
                        <AvField type="select" name="genero" label="Genero de la cancion" value={gen} onChange={(e) => setGen(e.target.value)} required>
                            <option value="" selected disabled hidden>Selecciona un genero</option>
                            {
                                generosel.map(gene=>
                                    <option>{gene.genmu}</option>
                                    )
                            }
                        </AvField>
                        <AvField name="enlace" label="Enlace YT" placeholder="Ingresa el enlace de la cancion" value={enlace} onChange={(e) => setEnla(e.target.value)} type="text" validate={{
                            required: { value: true, errorMessage: 'Ingresa el enlace' },
                            pattern: { value: '(https?://)?(www\\.)?(yotu\\.be/|youtube\\.com/)?((.+/)?(watch(\\?v=|.+&v=))?(v=)?)([\\w_-]{11})(&.+)?', errorMessage: 'Ingresa un enlace de youtube' }
                        }} />
                        <AvField name="comment" label="Comentario" placeholder="Puedes escribir algun comentario" value={comentario} onChange={(e) => setComen(e.target.value)} type="text" />

                        <Button color="primary">Editar</Button>
                    </AvForm>
                </ModalBody>
            </Modal>


        </div>

    );


}