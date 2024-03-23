const buttomSeletorOperation = document.querySelector('.buttomOperation');
buttomSeletorOperation.addEventListener('click',operations);


function operations() {
    const valueInput1 = parseFloat(document.getElementById('value1').value);
    const valueInput2 = parseFloat(document.getElementById('value2').value);

    const inputSeletores = document.querySelectorAll(".selectsRadio");

    let calculation = 0

    for (let i = 0; i < inputSeletores.length; i++) {
        if (inputSeletores[i].value.checked === 'ADIÇÃO') {
            calculation = valueInput1 + valueInput2;
        } else if (inputSeletores[i].checked === 'MULTIPLICAÇÃO') {
            calculation = valueInput1 * valueInput2;
        } else if (inputSeletores[i].checked === 'SUBTRAÇÃO') {
            calculation = valueInput1 - valueInput2;
        } else if (inputSeletores[i].checked === 'DIVISÃO') {
            calculation = valueInput1 / valueInput2;
        }
    }
    console.log(calculation);
}

