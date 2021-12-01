import React from 'react';
import { Button } from 'reactstrap';


export default function Cerrarsesion() {

    
    
    
    const Cerrar = (e) => {
        localStorage.clear();
        window.location.reload(false);
    }

    return(
        <>
        <Button color="dark" onClick={Cerrar}>Cerrar Sesion</Button>
        </>

    );
}

