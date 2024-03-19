const swapButtom = document.querySelector(".buttonTrocarValor");
swapButtom.addEventListener("click", changeVariables);

function changeVariables() {
    let valueA = document.getElementById("valueInput01").value;
    let valueB = document.getElementById("valueInput02").value;
    let valueC = valueB;
    valueB = valueA;
    valueA = valueC;
    alert(`o valor de A e : ${valueC} 
    o valor de B e  ${valueB}`);
}
