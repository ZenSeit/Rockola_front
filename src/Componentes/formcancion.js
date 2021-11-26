import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

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
        await fetch("https://rockolamin.herokuapp.com/acan", {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newcan)
        }).then(async (rest) => {
            const resp = await rest.text()
            if (resp !== "mal") {
                alert("salio bien y se loguea");
                window.location.reload(false);
            } else {
                alert("Las credenciales son incorrectas. Por favor intente nuevamente.");
            }
        }
        );

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

                    <div className="input-group mb-3">
                        <Input type="text" className="form-control" placeholder="Nombre cancion" aria-label="Username" aria-describedby="basic-addon1" value={nom} onChange={(e) => setNomcan(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Ingresa nombre del artista" aria-label="Recipient's username" aria-describedby="basic-addon2" value={autor} onChange={(e) => setArtcan(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">Artista</span>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Ingresa el genero de la cancion" aria-label="Recipient's username" aria-describedby="basic-addon2" value={gen} onChange={(e) => setGen(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">Genero</span>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Ingresa el enlace de Youtube" aria-label="Recipient's username" aria-describedby="basic-addon2" value={enlace} onChange={(e) => setEnla(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">Enlace</span>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Si tienes algun comentario lo puedes escribir" aria-label="Recipient's username" aria-describedby="basic-addon2" value={comentario} onChange={(e) => setComen(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">Comentario</span>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={Enviarcancion}>Añadir</button>
                </ModalBody>
            </Modal>


        </>

    );


}
