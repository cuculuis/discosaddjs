// // const las_canciones = [];
// // const codigos_usados = [];
// // const discos = []
// // const disco = {}

// document.getElementById('btn_cargar_disco').addEventListener('click', function() {
//     document.getElementById('nuevo_disco').style.display = 'block';
// });

// // //mostrar y ocultar
// // document.getElementById('btn_mostrar').addEventListener('click', function() {
// //     MostrarDisco()
// //     document.getElementById('lista_discos_agregados').style.display = 'block';
// // });

// document.getElementById('btn_registro_canciones').addEventListener('click', function() {
//     document.getElementById('las_canciones').style.display = 'block';
// })

// document.getElementById('btn_agregar_cancion').addEventListener('click', ObtenerDatosPista())

// // document.getElementById('btn_ocultar').addEventListener('click', function() {
// //     document.getElementById('lista_discos_agregados').style.display = 'none';
// // });

// // //Canciones
// // document.getElementById('btn_agregar_cancion').addEventListener('click', function() {
// //     let cancion = document.getElementById('cancion').value;
// //     let duracion = document.getElementById('duracion').value;
    
// //     if (cancion !== "" && duracion !== "" && duracion > 1 && duracion < 7200) {
// //         // Crear objeto de pista y agregarlo al arreglo de pistas
// //         const pista = {
// //             nombre: cancion,
// //             duracion: duracion
// //         };
// //         // Agregar la pista al formulario
// //         agregarPistaHtml(pista);
// //          // Limpiar los campos de entrada de pista
// //         document.getElementById('cancion').value = '';
// //         document.getElementById('duracion').value = '';
// //     } else {
// //         alert('Faltan agregar los datos de la canción.');
// //     }
// // });

// // //Discos
// // document.getElementById('btn_guardar_disco').addEventListener('click', function() {
// //     let codigo_unico = document.getElementById('codigo_unico').value;
// //     let nombre_disco = document.getElementById('nombre_disco').value;
// //     let autor_banda = document.getElementById('autor_banda').value;
// //     document.getElementById('nuevo_disco').style.display = 'none';
// //     document.getElementById('las_canciones').style.display = 'none';
// //     if (codigos_usados.includes(codigo_unico)) {
// //         alert('El código numérico ' + codigo_unico + ' ya está en uso. Ingrese otro código.');
// //         return;
// //     }

// //     if (codigo_unico && nombre && autor && las_canciones.length > 0 && codigo_unico > 1 && codigo_unico < 999) {
// //         disco = {
// //             codigo: codigo_unico,
// //             nombre: nombre_disco,
// //             autor: autor_banda,
// //             pistas: las_canciones
// //         };
// //         discos.push(disco)
// //         MostrarDisco(disco);
// //         document.getElementById('codigo_unico').value = '';
// //         document.getElementById('nombre_disco').value = '';
// //         document.getElementById('autor_banda').value = '';
// //         las_canciones = [];
// //         codigos_usados.push(codigo_unico);
// //     } else {
// //         alert('Por favor, complete todos los campos y agregue al menos una pista.');
// //     }
// // });

// // function agregarPistaHtml(pista) {
// //     let pistasHtml = document.getElementById('canciones_agregadas');
// //     let pistaHtml = document.createElement('ul');
// //     pistaHtml.innerHTML = '<li><b>Nombre de la pista:</b> ' + pista.nombre + ' | <b>Duración:</b> ' + pista.duracion + ' seg</li>';
// //     pistasHtml.appendChild(pistaHtml);
// //     las_canciones.push(pista);
// // }

// // function MostrarDisco(discos) {
// //     let discosHtml = document.getElementById('lista_discos_agregados');
// //     let discoHtml = document.createElement('div');
// //     discoHtml.innerHTML =
// //                         '<b>Código:</b> ' + disco.codigo + '<br>' +
// //                         '<b>Nombre del disco:</b> ' + disco.nombre + '<br>' +
// //                         '<b>Autor:</b> ' + disco.autor + '<br>' +
// //                         '<b>Pistas:</b><br>';
// //     discos.pistas.forEach(function(pista) {
// //         discoHtml.innerHTML += '<li>Nombre de la pista:</li> ' + pista.nombre + ' | <b>Duración:</b> ' + pista.duracion + ' seg<br>';
// //     });
// //     discosHtml.appendChild(discoHtml);
// // }



// // Variables globales
// let discos = [];
// let codigos_usados = [];

// // Función para cargar un disco
// function Cargar() {
//     // Limpiar los campos de entrada
//     document.getElementById('nombre_disco').value = '';
//     document.getElementById('autor_banda').value = '';
//     document.getElementById('codigo_unico').value = '';
//     document.getElementById('canciones_agregadas').innerHTML = '';

//     // Obtener los datos del disco
//     let nombre_disco = document.getElementById('nombre_disco').value;
//     let autor_banda = document.getElementById('autor_banda').value;
//     let codigo_unico = document.getElementById('codigo_unico').value;

//     // Validar los datos
//     if (nombre_disco === '') {
//         alert('El nombre del disco no puede quedar vacío.');
//         return;
//     }

//     if (autor_banda === '') {
//         alert('El autor o banda del disco no puede quedar vacío.');
//         return;
//     }

//     if (codigo_unico < 1 || codigo_unico > 999) {
//         alert('El código del disco debe ser un número entre 1 y 999.');
//         return;
//     }

//     // Validar que el código no esté duplicado
//     if (codigos_usados.includes(codigo_unico)) {
//         alert('El código del disco ya está en uso.');
//         return;
//     }

//     // Crear el disco
//     let disco = {
//         codigo: codigo_unico,
//         nombre: nombre_disco,
//         autor: autor_banda,
//         pistas: []
//     };

//     // Iniciar el proceso de carga de pistas
//     MostrarMensaje('Cargando pistas...');
//     document.getElementById('btn_registro_canciones').disabled = true;
//     document.getElementById('btn_guardar_disco').disabled = true;

//     // Ciclo para agregar pistas
//     let pista = null;
//     while (true) {
//         // Obtener los datos de la pista
//         pista = ObtenerDatosPista();

//         // Validar los datos
//         if (pista === null) {
//             break;
//         }

//         // Agregar la pista al disco
//         disco.pistas.push(pista);

//         // Mostrar un mensaje de confirmación
//         MostrarMensaje('¿Desea agregar otra pista?');
//     }

//     // Terminar el proceso de carga de pistas
//     document.getElementById('btn_registro_canciones').disabled = false;
//     document.getElementById('btn_guardar_disco').disabled = false;

//     // Agregar el disco a la lista
//     discos.push(disco);
// }

// // Función para obtener los datos de una pista
// function ObtenerDatosPista() {
//     let nombre = document.getElementById('cancion').value;
//     let duracion = document.getElementById('duracion').value;

//     // Validar los datos
//     if (nombre === '') {
//         alert('El nombre de la pista no puede quedar vacío.');
//         return null;
//     }

//     if (duracion < 0 || duracion > 7200) {
//         alert('La duración de la pista debe ser un número entre 0 y 7200.');
//         return null;
//     }

//     // Crear la pista
//     let pista = {
//         nombre: nombre,
//         duracion: duracion
//     };

//     return pista;
// }

// // Función para mostrar un mensaje
// function MostrarMensaje(mensaje) {
//     document.getElementById('info').innerHTML = mensaje;
// }

// // Función para mostrar los discos
// function Mostrar() {
//     let discosHtml = document.getElementById('lista_discos_agregados');
//     discosHtml.innerHTML = '';

//     discos.forEach(function(disco) {
//         discosHtml.innerHTML +=
//             '<b>Código:</b> ' + disco.codigo + '<br>' +
//             '<b>Nombre del disco:</b> ' + disco.nombre + '<br>' +
//             '<b>Autor:</b> ' + disco.autor + '<br>' +
//             '<b>Pistas:</b><br>';

//         disco.pistas.forEach(function(pista) {
//             discosHtml.innerHTML += '<li>Nombre de la pista:</li> ' + pista.nombre + ' | <b>Duración:</b> ' + pista.duracion + ' seg<br>';

//             // Si la duración es mayor a 180 segundos, destacarla en rojo
//             if (pista.duracion > 180) {
//                 discosHtml.innerHTML += '<span style="color: red">(Duración mayor a 180 segundos)</span>';
//             }
//         });
//     });
// }

// // Agregar eventos a los botones
// document.getElementById('btn_guardar_disco').addEventListener('click', Cargar);
// document.getElementById('btn_mostrar_discos').addEventListener('click', Mostrar);


// Variable para almacenar los datos de los discos
const discos = [];

// Variable para almacenar las pistas temporales antes de guardar el disco
let pistasTemporales = [];

// Función para mostrar el formulario
function Cargar() {
    // Mostrar el formulario de datos básicos
    document.getElementById('nuevo_disco').style.display = 'block';
    // Ocultar el botón "Cargar nuevo disco"
    document.getElementById('btn_cargar_disco').style.display = 'none';
    //Ocultar el formulario de canciones
    document.getElementById('las_canciones').style.display = 'none';
}

// Función para mostrar el formulario de canciones
function MostrarFormularioCanciones() {
    // Mostrar el formulario de canciones
    document.getElementById('las_canciones').style.display = 'block';
}

// Función para guardar los datos del disco
function Guardar() {
    const nombre_disco = document.getElementById('nombre_disco').value;
    const autor_banda = document.getElementById('autor_banda').value;
    const codigo_unico = parseInt(document.getElementById('codigo_unico').value);

    // Validar código numérico único
    if (isNaN(codigo_unico) || codigo_unico < 1 || codigo_unico > 999) {
        alert("El código numérico debe estar entre 1 y 999.");
        return;
    } else if (discos.some(disco => disco.codigo === codigo_unico)) {
        alert("Este código ya ha sido utilizado. Ingrese otro.");
        return;
    }

    // Crear un objeto disco con los datos ingresados
    const disco = {
        nombre: nombre_disco,
        autor: autor_banda,
        codigo: codigo_unico,
        pistas: pistasTemporales // Usar las pistas temporales
    };

    // Agregar el disco al arreglo de discos
    discos.push(disco);

    alert("Disco cargado exitosamente.");

    // Limpiar los campos de entrada
    document.getElementById('nombre_disco').value = '';
    document.getElementById('autor_banda').value = '';
    document.getElementById('codigo_unico').value = '';

    // Limpiar las pistas temporales
    pistasTemporales = [];
    document.getElementById('canciones_agregadas').innerHTML = '';

    // Mostrar el botón "Cargar nuevo disco" nuevamente
    document.getElementById('btn_cargar_disco').style.display = 'block';

    // Ocultar el formulario de canciones y mostrar el botón "Registrar Canciones"
    document.getElementById('nuevo_disco').style.display = 'none';

}

// Función para mostrar los discos
function Mostrar() {
    const lista_discos = document.getElementById('lista_discos_agregados');
    lista_discos.style.display = "block"
    lista_discos.innerHTML = '<h2>Mis discos</h2>';

    discos.forEach(function(disco) {
        const div_disco = document.createElement('div');
        div_disco.innerHTML = `
            <div>
            <b>Nombre del disco:</b> ${disco.nombre}<br>
            <b>Autor/Banda:</b> ${disco.autor}<br>
            <b>Código único:</b> ${disco.codigo}<br>
            <b>Pistas:</b><br>
            </div>
        `;

        disco.pistas.forEach(function(pista) {
            if (pista.duracion > 180) {
                div_disco.innerHTML += `<span style="color: red;">Nombre de la pista: ${pista.nombre} | <b>Duración:</b> ${pista.duracion} seg</span><br>`;
            } else {
                div_disco.innerHTML += `<span>Nombre de la pista:</span> ${pista.nombre} | <b>Duración:</b> ${pista.duracion} seg<br>`;
            }
        });

        lista_discos.appendChild(div_disco);
    });
}

// Agregar eventos a los botones
document.getElementById('btn_cargar_disco').addEventListener('click', Cargar);
document.getElementById('btn_registro_canciones').addEventListener('click', MostrarFormularioCanciones);
document.getElementById('btn_guardar_disco').addEventListener('click', Guardar);
document.getElementById('btn_mostrar').addEventListener('click', Mostrar);

// Agregar evento para agregar pistas dinámicamente
document.getElementById('btn_agregar_cancion').addEventListener('click', function() {
    const nombre_pista = document.getElementById('cancion').value;
    const duracion_pista = parseInt(document.getElementById('duracion').value);

    // Validar duración de la pista
    if (!nombre_pista || duracion_pista < 0 || duracion_pista > 7200 || isNaN(duracion_pista)) {
        alert("Ingrese datos válidos para la pista.");
    } else {
        // Agregar la pista temporalmente
        pistasTemporales.push({ nombre: nombre_pista, duracion: duracion_pista });

        // Mostrar las pistas temporales
        MostrarPistasTemporales();

        // Limpiar los campos de entrada de pista
        document.getElementById('cancion').value = '';
        document.getElementById('duracion').value = '';
    }
});

// Función para mostrar las pistas temporales
function MostrarPistasTemporales() {
    const canciones_agregadas = document.getElementById('canciones_agregadas');
    canciones_agregadas.innerHTML = '<span>Canciones Agregadas:</span><br>';

    pistasTemporales.forEach(function(pista) {
        if (pista.duracion > 180) {
            canciones_agregadas.innerHTML += `<span style="color: red;">Nombre de la pista: ${pista.nombre} | <b>Duración:</b>${pista.duracion} seg</span><br>`;
        } else {
            canciones_agregadas.innerHTML += `<span>Nombre de la pista:</span> ${pista.nombre} | <b>Duración:</b> ${pista.duracion} seg<br>`;
        }
    });
}

// Función para ocultar el formulario de canciones y mostrar el botón "Registrar Canciones"
function OcultarDiscos() {
    document.getElementById('lista_discos_agregados').style.display = 'none';
}

// Agregar evento para ocultar el formulario de canciones
document.getElementById('btn_ocultar').addEventListener('click', OcultarDiscos);




