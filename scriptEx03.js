const buttomCalculaSomaMedia = document.querySelector(".calculation");
buttomCalculaSomaMedia.addEventListener("click",somaMedia);

function somaMedia(){
    const valueInputC1 = parseInt( document.getElementById('valueC1').value);
    const valueInputC2 = parseInt( document.getElementById('valueC2').value);

    let somaC1C2 = valueInputC1 + valueInputC2;
    let mediaC1C2 = somaC1C2 / 2;

    alert(`A soma da criança 1 mais a criança 2 e : ${somaC1C2} e a média da criança 1 mais a criança 2 e: ${mediaC1C2} `);

}