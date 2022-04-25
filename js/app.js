//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor de resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda= {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',

}



//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarCoches(coches); //Mostrar los coches
    llenarSelect(); //Llenar  los años

});

//Event listener para los select de busqueda

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();

});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();

});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();

});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});



//Funciones

function mostrarCoches(coches) {

    limpiarHTML();//Eliminar el html previousl
    coches.forEach( coche => {

        const {marca, modelo, year, puertas, transmision, precio, color} = coche;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - ${precio}€ - Color: ${color}`;

        //Insertar en el HTML
        resultado.appendChild(autoHTML)
    })

}

//Limpiar html

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


//Llenar el select

function llenarSelect() {

    for (let i = max; i > min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//Agrega las opciones de año
    }

}


//Funcion que filtra en base a la busqueda

function filtrarAuto() {
    const resultado = coches.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    console.log(resultado);

   
    if(resultado.length){
        mostrarCoches(resultado)
    }else{
        noresultado();
    }
}

function noresultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}


function filtrarMarca(coches) {
    const {marca} = datosBusqueda;
    if(marca){
        return coches.marca === marca;
    }
    return coches;



}

function filtrarYear(coches) {
    const {year} = datosBusqueda;
    if(year){
        return coches.year === year;
    }
    return coches;

}

function filtrarMinimo(coches) {
    const {minimo} = datosBusqueda;
    if(minimo){
        return coches.precio >= minimo;
    }
    return coches;

}

function filtrarMaximo(coches) {
    const {maximo} = datosBusqueda;
    if(maximo){
        return coches.precio <= maximo;
    }
    return coches;

}

function filtrarPuertas(coches) {
    const {puertas} = datosBusqueda;
    if(puertas){
        return coches.puertas === puertas;
    }
    return coches;
   
}

function filtrarTransmision(coches) {
    const {transmision} = datosBusqueda;
    if(transmision){
        return coches.transmision === transmision;
    }
    return coches;
}

function filtrarColor(coches) {
    const {color} = datosBusqueda;
    if(color){
        return coches.color === color;
    }
    return coches;
    
}