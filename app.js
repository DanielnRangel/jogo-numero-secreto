let listaNumerosSorteados = [];
let limite = 3;
let numeroAleatorio = gerarNumeroAleatorio();
let chute = null;
let i = 0;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  if ("speechSynthesis" in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Web Speech API não suportada neste navegador.");
  }
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  console.log(numeroAleatorio);
  console.log(chute == numeroAleatorio);
  i++;

  if (chute > numeroAleatorio) {
    exibirTextoNaTela("p", "Tente um número menor!");
    limparCampo();
  } else if (chute < numeroAleatorio) {
    exibirTextoNaTela("p", "Tente um número maior!");
    limparCampo();
  } else {
    let palavraTentativas = i > 1 ? " tentativas!!" : " tentativa!!";
    exibirTextoNaTela("p", "Você acertou em " + i + palavraTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
    return true;
  }
  return false;
}

function novoJogo() {
  numeroAleatorio = gerarNumeroAleatorio();
  limparCampo();
  console.log(numeroAleatorio);
  i = 0;
  exibirTextoNaTela("p", "Um novo número entre 1 e 10 foi sorteado!");
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

exibirTextoNaTela("h1", "Jogo do número secreto.");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10: ");

function gerarNumeroAleatorio() {
  let numAle = parseInt(Math.random() * limite + 1);
  let quantidadeDeNumAle = numAle.length;

  if (quantidadeDeNumAle >= limite) {
    listaNumerosSorteados = [];
  }
  if (listaNumerosSorteados.includes(numAle)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numAle);
    return numAle;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
