import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export default function Formcan() {

    const [nom, setNomcan] = useState('');
    const [autor, setArtcan] = useState('');
    const [gen, setGen] = useState('');
    const [enlace, setEnla] = useState('');
    const [comentario, setComen] = useState('');
    const [usercanr, setUser] = useState(localStorage.nickname);
    const [mod, setMod] = useState(false);
    const cambio = () => setMod(!mod);


    const Enviarcancion = async (e) => {
        setUser(localStorage.nickname);
        const newcan = { nom, autor, gen, enlace, comentario, usercanr }
        console.log(newcan)
        e.preventDefault();
        await fetch("https://rockolamin.herokuapp.com/gcan", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify(newcan)
        }).then(function(response){
            if(response.status===200){
                alert("Se agregó tu cancion")
                window.location.reload(false);
            }else{alert("La cancion no fue agregada")}

        });

    }

    return (
        <>

            <div>

                <Button color="success" onClick={cambio}>Añadir canción</Button>
            </div>
            <Modal isOpen={mod}>
                <ModalHeader>
                    Añadir canción

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={cambio} className="cerrarbtn">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>

                </ModalHeader>
                <ModalBody>
                    <AvForm onValidSubmit={Enviarcancion}>
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
                            <option>Reggae</option>
                            <option>Rock</option>
                            <option>Balada</option>
                            <option>Bachata</option>
                            <option>Salsa</option>
                            <option>Reggaeton</option>
                            <option>House</option>
                            <option>Metal</option>
                            <option>Merengue</option>
                            <option>Ranchera</option>
                            <option>Vallenato</option>
                            <option>R&B</option>
                            <option>POP</option>
                            <option>Carranga</option>
                            <option>Electronica</option>
                            <option>Rock en español</option>
                            <option>Rap</option>
                            <option>Jazz</option>
                        </AvField>
                        <AvField name="enlace" label="Enlace YT" placeholder="Ingresa el enlace de la cancion" value={enlace} onChange={(e) => setEnla(e.target.value)} type="text" validate={{
                            required: { value: true, errorMessage: 'Ingresa el enlace' },
                            pattern: { value: '(https?://)?(www\\.)?(yotu\\.be/|youtube\\.com/)?((.+/)?(watch(\\?v=|.+&v=))?(v=)?)([\\w_-]{11})(&.+)?', errorMessage: 'Ingresa un enlace de youtube' }
                        }} />
                        <AvField name="comment" label="Comentario" placeholder="Puedes escribir algun comentario" value={comentario} onChange={(e) => setComen(e.target.value)} type="text" />

                        <Button color="primary">Submit</Button>
                    </AvForm>

                </ModalBody>
            </Modal>


        </>

    );


}
