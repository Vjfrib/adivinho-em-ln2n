let LE = 1;
let LD = 100;
let meio;
let cont = 0;

window.onload = function() {
  let mensagem = "Pense em um número entre 1 e 100. É menor que 50?";
  document.getElementById("mensagem").innerHTML = mensagem;
  jogar();
};

function jogar() {
  meio = parseInt((LE + LD) / 2);
  cont++;
  let resposta = prompt("O número que você pensou é <, = ou > " + meio + "?");
  
  if (resposta === '=') {
    let mensagem = "Acertei! O número era " + meio + ". Foram necessárias " + cont + " tentativas.";
    document.getElementById("mensagem").innerHTML = mensagem;
  } else if (resposta === '>') {
    LE = meio + 1;
    jogar();
  } else if (resposta === '<') {
    LD = meio - 1;
    jogar();
  } else {
    alert("Resposta inválida! Tente novamente.");
    jogar();
  }
}
