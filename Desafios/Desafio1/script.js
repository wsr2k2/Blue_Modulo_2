var Contador=0;
var Imagens = [
    'tristeza.jpg',
    'tenor.gif',
    'alegria.jpg'
];
var humor = [
    'TRISTEZA',
    'RAIVA',
    'ALEGRIA'
];

var alterador = [
    "foto tristeza",
    "foto raiva",
    "foto alegria"
];

function mudar(){
    if(Contador == Imagens.length){
        Contador=0;
    }
    document.getElementById("imagem1").src=Imagens[Contador];
    document.getElementById("humores").innerHTML = humor[Contador];
    document.getElementById("imagem1").alt=alterador[Contador];
        Contador++;
}