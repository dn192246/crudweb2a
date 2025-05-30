//EndPoint de Integrantes - API
const API_URL ="https://retoolapi.dev/WReqjM/Integrantes";

//Funcion que manda a traer el JSON con GET
async function ObtenerIntegrantes(){

    //Respuesta del servidor
    const respuesta = await fetch(API_URL);

    //Pasamos a JSON la respuesta del servidor
    const data = await respuesta.json(); //Esto es un JSON

    //Enviamos el JSON a la funcion que genera las filas en la tabla
    MostrarDatos(data);
}

//Funcion para crear las filas de la tabla en base a un JSON
//"Datos" representara el JSON donde viene la informacion
function MostrarDatos(data){
    //Se llama a la tabla con elemento "id" y luego al tbody
    const tabla = document.querySelector("#tabla tbody");

    //Para inyectar codigo HTML usamos "innerHTML"
    tabla.innerHTML = ""; //Vaciamos el contenido de la tabla

    data.forEach(integrante => {
        tabla.innerHTML += `
            <tr>
                <td>${integrante.id}</td>
                <td>${integrante.Nombre}</td>
                <td>${integrante.Apellido}</td>
                <td>${integrante.Correo}</td>
                <td>
                    <button>Editar</buton>
                    <button>Eliminar</button>
                </td>
            </tr>
        `;
    });
}

ObtenerIntegrantes();