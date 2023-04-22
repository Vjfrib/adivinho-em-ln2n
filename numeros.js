

let LE = 1;
let LD = 100;
let meio = parseInt((LE + LD)/2) //converte valor

console.log(meio)

while (true)
{
    
    let resposta = prompt("o numero que voce pensou eh < = ou >"+meio);
    meio = parseInt((LE + LD)/2)
    if (resposta === "="){
        alert("acertei!")
        break;
    }
    if ( resposta === "<") {
        LD = (meio-1)
    } else {
        LE = (LD+1)
    }
}