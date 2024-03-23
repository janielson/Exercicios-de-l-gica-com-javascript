
const botao = document.querySelector('.buttomOperation').addEventListener('click', operations);

function operations() {
    const valueInput1 = parseFloat(document.getElementById('value1').value);
    const valueInput2 = parseFloat(document.getElementById('value2').value);
    let selectedRadio = document.querySelector('input[name = operation]:checked');
    let calculation = 0;
    if (selectedRadio) {
        let selectedValue = selectedRadio.value;
        if (selectedValue === 'ADIÇÃO') {
            calculation = valueInput1 + valueInput2;
        } else if (selectedValue === 'MULTIPLICAÇÃO') {
            calculation = valueInput1 * valueInput2;
        } else if (selectedValue === 'SUBTRAÇÃO') {
            calculation = valueInput1 - valueInput2;
            if (calculation < 0) {
                calculation = calculation * -1;
            }
        } else if (selectedValue === 'DIVISÃO') {
            calculation = valueInput1 / valueInput2;
        }
    } else {
        // Lidar com o caso em que nenhum botão de rádio está selecionado (opcional)
        console.log("Por favor, selecione uma operação.");
    }

    alert(`o valor calculado e: ${calculation.toFixed(2)}`);
}
