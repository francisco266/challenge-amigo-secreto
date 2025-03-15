// // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

let amigo;
let nombreIngresado;



function agregarAmigo() {

    nombreIngresado = document.getElementById("amigo").value;

    if (nombreIngresado !== " ") {
        amigos.push(nombreIngresado);
        console.log(amigos);

        actualizaLista()

    } else if (nombreIngresado == " ") {
        alert("por favor, inserte un nombre");
    }

    document.getElementById("amigo").value = " ";


    return;
}
function actualizaLista() {

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML += `<li>${nombreIngresado} </li >`;

    return;
}

function sortearAmigo() {
    let largoLista = amigos.length;

    if (largoLista != 0) {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        console.log(indiceSorteado);
        let muestraResultado = document.getElementById("resultado");
        muestraResultado.innerHTML = (`el amigo secreto sorteado es: ${amigos[indiceSorteado]}`);
        document.getElementById("amigo").value = " ";

    } else if (largoLista == 0) {
        alert("por favor, inserte un nombre");
    }

    return;
}












