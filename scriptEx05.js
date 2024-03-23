const botãoDeConversão = document.querySelector('.buttomConversor').addEventListener('click',celsiusInfahren);


function celsiusInfahren(){
const valueInput = document.querySelector('.valueInCelsius').value;
const calc = valueInput * 1.8 + 32;

alert(`O valor em FAHRENHEIT é |  ${calc}`);

}