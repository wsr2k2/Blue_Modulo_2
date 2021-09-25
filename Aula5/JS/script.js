function teste() {
    alert("teste");
}

function nome() {
    const nome = document.getElementById("inputnome").value;
    document.getElementById("inputnome").value = "";

    if(nome == ""){
        alert("preencha primeiro o campo nome");
    } else{
        document.getElementById("spanresultado").textContent = nome;
        document.getElementById("spanresultado").style.color = "red";

    }
    
}
function idade() {
    const idade = document.getElementById("inputidade").value;
    document.getElementById("inputidade").value = "";

    if(idade == ""){
        alert("preencha primeiro o campo idade");
    } else{
        document.getElementById("spanresultidade").textContent = idade;
        document.getElementById("spanresultidade").style.color = "blue";

    }
}

function sec1() {
    var sec = document.getElementById("primeiro");

    if(sec.style.display === "none"){
        sec.style.display = "flex";        
    } else{
        sec.style.display = "none"
    }
}
function sec2() {
    var sec = document.getElementById("segundo");

    if(sec.style.display === "none"){
        sec.style.display = "flex";        
    } else{
        sec.style.display = "none"
    }
}
function calcularIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var resultado = peso / (altura * altura);
 
    document.getElementById("spanIMC").textContent = resultado.toFixed(2);
    // alert("seu resultado é " + (resultado.toFixed(2)));
}

function addTarefa(){
    const li = document.createElement("li");
    const tarefa = document.getElementById("inputtarefa").value;
    document.getElementById("inputtarefa").value = "";

    if(tarefa == ""){
        alert("Preencha o campo de tarefas antes de adicionar!");
    }else{
        const textotarefa = document.createTextNode(tarefa);
        li.appendChild(textotarefa);

        document.getElementById("MinhaLista").appendChild(li);
    }
}