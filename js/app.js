//Variables
const resultado = document.querySelector('#resultado');


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarCoches();
});

//Funciones

function mostrarCoches() {
    coches.forEach( coche => {

        const {marca, modelo, year, puertas, transmision, precio, color} = coche;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${marca} - ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}`;

        //Insertar en el HTML
        resultado.appendChild(autoHTML)
    })

}