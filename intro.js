let frutas = [
  { id: 1, nome: "maçã", cor: "vermelha" },
  { id: 2, nome: "banana", cor: "amarela" },
  { id: 3, nome: "laranja", cor: "laranja" }
];

const cor_da_banana = `A cor da ${frutas[0].nome} é ${frutas[2].cor}`;

let soma = 2 + 4 / 10;

const nomeCompleto = prompt("Digite seu nome completo:");
const [nome, sobrenome] = nomeCompleto.split(" ");

alert(nomeCompleto);

function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)
    
    let res = document.querySelector('section#result')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() { 
    let res = document.querySelector('section#result')
    res.innerHTML = null 
}