const botao = document.querySelector("#btn-texto");
const titulo = document.querySelector("#humor");
const imagem = document.querySelector("#imagem1");

botao.addEventListener("click", function () {

    if (titulo.innerHTML == "ALEGRIA"){
       imagem.src="tristeza.jpg";
       titulo.innerHTML="TRISTEZA"   

    } else if(titulo.innerHTML == "TRISTEZA"){
        imagem.src="medo.jpg";
        titulo.innerHTML="MEDO"

    }   else if(titulo.innerHTML == "MEDO"){
    imagem.src="nojo.jpg";
    titulo.innerHTML="NOJO"

    }     else if(titulo.innerHTML == "NOJO"){
    imagem.src="tenor.gif";
    titulo.innerHTML="RAIVA"

    }    
    else if(titulo.innerHTML == "RAIVA"){
        imagem.src="alegria.jpg";
        titulo.innerHTML="ALEGRIA"
        }     
    
});