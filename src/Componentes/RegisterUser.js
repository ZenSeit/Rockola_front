import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export default function FormUser() {

    const [nickname, setNick] = useState('');
    const [nombre, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [genero, setGen] = useState('');
    const [password, setPass] = useState('');
    const [mod, setMod] = useState(false);
    const cambio = () => setMod(!mod);


    const EnviarUsuario = async (e) => {
        const newuser = { nickname, nombre, email, genero, password }
        e.preventDefault();
        await fetch("https://rockolamin.herokuapp.com/registro", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newuser)
        }).then(async (rest) => {
            const resp = await rest.text();
            if (resp !== "rep") {
                alert("Te has registrado correctamente");
                setMod(false);
            } else {
                alert("Elige un nickname diferente");
            }
        }
        );

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
                    <div>
                        <AvForm onValidSubmit={EnviarUsuario}>
                            <AvField name="nickname" label="Nickname" placeholder="Escribe tu Nickname" value={nickname} onChange={(e) => setNick(e.target.value)} type="text" required validate={{
                                required: { value: true, errorMessage: 'Ingresa tu Nickname' },
                                pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Tu nickname solo puede contener letras y numeros' },
                                minLength: { value: 2, errorMessage: 'Tu nickname debe contener entre 2 y 15 caracteres' },
                                maxLength: { value: 15, errorMessage: 'Tu nickname debe contener entre 2 y 15 caracteres' }
                            }} />
                            <AvField name="nombre" label="Nombre" placeholder="Escribe tu nombre" value={nombre} onChange={(e) => setNom(e.target.value)} type="text" validate={{
                                required: { value: true, errorMessage: 'Ingresa tu nombre' },
                                pattern: { value: '^[a-zA-Z0-9_ ]*$', errorMessage: 'Tu nombre solo puede contener letras' },
                                minLength: { value: 2, errorMessage: 'Tu nombre debe contener al menos 2 caracteres' },
                                maxLength: { value: 40, errorMessage: 'Nombre demasiado largo' }
                            }} />
                            <AvField name="email" label="@email" placeholder="Escribe tu email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" validate={{
                                required: { value: true, errorMessage: 'Ingresa tu email' }
                            }} />
                            <AvField type="select" name="genero" label="Genero" value={genero} onChange={(e) => setGen(e.target.value)} required>
                                <option>Masculino</option>
                                <option>Femenino</option>
                                <option>No Binario</option>
                            </AvField>
                            <AvField name="password" label="Contraseña" placeholder="Escribe una contraseña" value={password} onChange={(e) => setPass(e.target.value)} type="text" validate={{
                                required: { value: true, errorMessage: 'Ingresa una contraseña' },
                                pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Tu contraseña solo puede contener letras y numeros' },
                                minLength: { value: 4, errorMessage: 'Tu contraseña debe contener entre 4 y 15 caracteres' },
                                maxLength: { value: 15, errorMessage: 'Contraseña demasiada larga' }}}/>

                            <Button color="primary">Submit</Button>
                        </AvForm>
                    </div>

                </ModalBody>
            </Modal>


        </>

    );


}