
const buttomEx01 = document.querySelector(".mybuttomEx1");
buttomEx01.addEventListener("click",saldacao);

function saldacao(){
    const inputEx01 = document.querySelector(".exercicio").value;
    alert(`seja bem vindo ${inputEx01}`);
}