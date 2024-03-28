function insert(numero){
    let valorNumerico = document.querySelector(".result").innerHTML;
    document.querySelector(".result").innerHTML = valorNumerico + numero;
}


function clean(){
    document.querySelector(".result").innerHTML = "";
}

function backDelete(){
    let caracter = document.querySelector(".result").innerHTML;
    document.querySelector(".result").innerHTML = caracter.substring(0, caracter.length -1);
}


function calcular(){
    let resultados = document.querySelector(".result").innerHTML;
    if(resultados){
        document.querySelector(".result").innerHTML = eval(resultados);
    }
}