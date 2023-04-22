
// recursivo
let LE = 1;
let LD = 100;
let meio; //converte valor
let cont = 0;

while (true)
{
      meio = parseInt((LE + LD)/2); 
      cont++
    let resposta = prompt("o numero que voce pensou eh < = ou >"+meio);
  
    if (resposta === "="){
        alert("acertei, depois de "+cont)
        break;
    }
    if ( resposta === ">") {
        LE = (meio+1)
    } else {
        LD = (meio-1)
    }
}