import React, { useState } from 'react';
import FormUser from './RegisterUser';

export default function Login() {


    const [nickname, setNick] = useState('')
    const [password, setPass] = useState('')

    const EnviarDatos = async (e) => {
        const Usuario = { nickname, password }
        console.log(Usuario)
        e.preventDefault();
        await fetch("https://rockolamin.herokuapp.com/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Usuario)
        }).then(async (rest) => {
        const resp=await rest.text()
        if (resp !== "mal") {
            localStorage.token = resp;
            localStorage.nickname = Usuario.nickname;
            alert("salio bien y se loguea");
            window.location.reload(false);
          } else {
            alert("Las credenciales son incorrectas. Por favor intente nuevamente.");
          }
        }
        );

    }
    return (
<div className="col-4">
        <div className="registro">
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Nickname" aria-label="Username" aria-describedby="basic-addon1" value={nickname} onChange={(e) => setNick(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Ingresa tu clave" aria-label="Recipient's username" aria-describedby="basic-addon2" value={password} onChange={(e) => setPass(e.target.value)} />
                    <span className="input-group-text" id="basic-addon2">Password</span>
                </div>
                <button type="button" className="btn btn-primary" onClick={EnviarDatos}>Ingresar</button>  
            </form>
            <div><FormUser/></div>   
            </div>
            </div>
    );
}