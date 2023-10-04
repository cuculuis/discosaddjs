
//forms de Disco y form de canciones
let cargar_disco = document.getElementById('cargar_disco');

//Inputs de Disco
let nombre_disco = document.getElementById('nombre_disco').value;
let autor_banda = document.getElementById('autor_banda').value;
let codigo_unico = document.getElementById('codigo_unico').value;


//Inputs de Canciones
let cancion = document.getElementById('cancion').value;
let duracion = document.getElementById('duracion').value;
let agregaCancion = document.getElementsByClassName('agragaCancion')

//Botones
let boton_cargar_disco = document.getElementById('boton_cargar_disco');
let boton_agregar_cancion = document.getElementById('boton_agregar_cancion');
let boton_guardar_disco = document.getElementById('boton_guardar_disco')
let boton_mostrar = document.getElementById('boton_mostrar');

//Base de datos
const discos = []


//Eventos para mostrar los forms
boton_cargar_disco.addEventListener('click', function() {cargarDisco(boton_cargar_disco)});
boton_agregar_cancion.addEventListener('click', function() {cargarCancion(boton_agregar_cancion)});

//Funcion para mostrar el form para cargar los discos y las canciones
function cargarDisco(tipo) {
    if (tipo === boton_cargar_disco) {
        cargar_disco.style.display = "block";
    }
}

function cargarCancion(tipo) { 
    if (tipo === boton_agregar_cancion) {
        cancion.style.display = "block";
        duracion.style.display = "block";
        agregaCancion.style.display = "block";
    }
}

function guardarDisco(discos){
    //Evitar el error de la página.
    event.preventDefault();

    //Hacer que no queden espacios en blanco.
    if (!nombre_disco || !autor_banda || !cancion){
        alert('Ingrese todos los campos requeridos');
    //Corta el código para que no se envíe.
        return;
    }
    
    if (codigo_unico<1 || codigo_unico>999){
        alert('Ingrese un código válido entre los valores 1 y 999');
        return;    
    }
}

boton_guardar_disco.addEventListener('click', guardar);


