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

function checarNumero() {}

// --------------------Desafio 1--------------------

// let h1 = document.querySelector("h1");
// h1.innerHTML = "Hora do desafio.";

// function dsf() {
//   console.log("O botão foi clicado");
// }

// function alerta() {
//   alert("Eu amo JS!");
// }

// function exibirPrompt() {
//   let cidade = prompt("Insira o nome de uma cidade qualquer do Brasil:");
//   alert("Estive em " + cidade + " e lembrei de você.");
// }

// function soma() {
//   let num1 = prompt("Insira um número inteiro: ");
//   let num2 = prompt("Insira outro número inteiro: ");

//   alert("A soma dos número inseridos é: " + (num1 + num2));
// }

// ------------------Desafio 2------------------

// function olaMundo() {
//   console.log("Olá, mundo!");
// }

// function nome(nome) {
//   console.log("Olá, " + nome + "!");
// }

// function dobro(num) {
//   return num * 2;
// }

// // console.log(dobro(10));

// function media(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3;
// }

// function maior(num1, num2) {
//   return a > b ? a : b;
// }

// function quadrado(num) {
//   return num * num;
// }

// ------------------Desafio 3------------------

// function imc(altura, peso) {
//   return peso / Math.pow(altura, 2);
// }

// function fatorial(num) {
//   if (numero === 0 || numero === 1) {
//     return 1;
//   }

//   let i = num - 1;
//   for (i; i > 0; i--) {
//     num *= i;
//   }

//   return num;
// }

// function conversao(valor) {
//   return valor * 5.8;
// }

// function areaPerimetroRet(base, altura) {
//   let perimetro = base + altura;
//   let area = base * altura;
//   return "Perímetro: " + perimetro + "\nÁrea: " + area;
// }

// function areaPerimetroCirc(raio) {
//   let pi = 3.14;
//   return pi * Math.pow(raio, 2);
// }

// function tabuada(num) {
//   for (let i = 0; i <= 10; i++) {
//     console.log(num * i);
//   }
// }

// --------------------Desafio 1--------------------

// let listaGengerica = [];

// let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];
// linguagensDeProgramacao.push("Java", "Ruby", "GoLang");

// let nomes = ["Daniel", "Marina", "Gabriel"];
// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);
