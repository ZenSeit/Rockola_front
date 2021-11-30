import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

export default function FormUser() {

    const [nickname, setNick] = useState('');
    const [nombre, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [genero, setGen] = useState('');
    const [password, setPass] = useState('');
    const [mod, setMod] = useState(false);
    const cambio = () => setMod(!mod);


    const EnviarUsuario = async (e) => {
        const newuser = { nickname, nombre, email, genero, password}
        e.preventDefault();
        await fetch("https://rockolamin.herokuapp.com/registro", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newuser)
        }).then(function(response){
            if(response.status===200){
                alert("Te has registrado con exito!")
                window.location.reload(false);
            }else{alert("Tu registro ha fallado")}
            
        });

    }

    return (
        <>

            <div>

                <Button color="success" onClick={cambio}>Registrarse</Button>
            </div>
            <Modal isOpen={mod}>
                <ModalHeader>
                    Formulario de Registro La Rockola.com

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={cambio} className="cerrarbtn">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>

                </ModalHeader>
                <ModalBody>

                    <div className="input-group mb-3">
                        <Input type="text" className="form-control" placeholder="Escribe tu Nickname" aria-label="Nickname" aria-describedby="basic-addon1" value={nickname} onChange={(e) => setNick(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Ingresa tu nombre" aria-label="Recipient's username" aria-describedby="basic-addon2" value={nombre} onChange={(e) => setNom(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">Nombre</span>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Ingresa tu email" aria-label="Recipient's username" aria-describedby="basic-addon2" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">Email</span>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Cual es tu genero?" aria-label="Recipient's username" aria-describedby="basic-addon2" value={genero} onChange={(e) => setGen(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">Genero</span>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Escribe una contraseña" aria-label="Recipient's username" aria-describedby="basic-addon2" value={password} onChange={(e) => setPass(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">Contraseña</span>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={EnviarUsuario}>Registrarse!</button>
                </ModalBody>
            </Modal>


        </>

    );


}