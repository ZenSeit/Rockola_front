import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';


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



    const EditarCancion = async (e) => {
        setId(stringcan[0]);
        setUser(localStorage.nickname);
        const editcan = { id, nom, autor, gen, enlace, comentario, usercanr }
        console.log(editcan)
        e.preventDefault();
        await fetch("http://localhost:8080/acan", {
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

    return (

        <div>
            <div>

                <Button color="warning" onClick={cambio}>Editar cancion</Button>
            </div>
            <Modal isOpen={mod}>
                <ModalHeader>
                    Editar canción

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={cambio} className="cerrarbtn">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>

                </ModalHeader>
                <ModalBody>
                    {/* {
                        canci.map(can => */}
                            <div>
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
                            </div>
                        {/* )} */}

                    <button type="button" className="btn btn-primary" onClick={EditarCancion}>Añadir</button>
                </ModalBody>
            </Modal>


        </div>

    );


}