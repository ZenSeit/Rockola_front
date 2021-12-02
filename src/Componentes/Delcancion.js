import React from 'react';

export default function Delcan(can) {


    const string =Object.values(can);
    const stringcan=Object.values(string[0])



    const EliminarCan =()=> {
        const id=stringcan[0];
        fetch("http://192.168.1.5:8080/dcan/"+id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            }
        }).then(function(response){
            if(response.status===200){
                alert("Cancion eliminada con exito")
                window.location.reload(false);
            }else{alert("No se pudo eliminar la cancion")}
            
        });

    };


    return (

        <div>
            <button type="button" className="btn btn-danger"  onClick={EliminarCan}>Eliminar</button>
        </div>

    );


}