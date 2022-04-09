//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarCoches(); //Mostrar los coches
    llenarSelect(); //Llenar  los años

});

//Funciones

function mostrarCoches() {
    coches.forEach( coche => {

        const {marca, modelo, year, puertas, transmision, precio, color} = coche;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - ${precio}€ - Color: ${color}`;

        //Insertar en el HTML
        resultado.appendChild(autoHTML)
    })

}

//Llenar el select

function llenarSelect() {

    for (let i = max; i > min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }

}