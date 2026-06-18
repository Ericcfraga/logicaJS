  function nomeDaFuncao () {

  }
function getNumber(msg) {
    while (true) {
        const input = prompt(msg);
        if (input === null) {
            alert('Operação cancelada.');
            return NaN;
        }
        const n = Number(input);
        if (!isNaN(n)) return n;
        alert('Digite apenas números');
    }
}

const num1 = getNumber("Digite um número:");
const num2 = getNumber("Digite outro número:");
const num3 = getNumber("Digite outro número:");
const num4 = getNumber("Digite mais um número:");

function soma () {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        return;
    }
    alert("A soma é: " + (num1 + num2 + num3 + num4));
}

soma();

function subtracao () {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        return;
    }
    alert("A subtração é: " + (num1 - num2 - num3 - num4));
}

subtracao ()

function multiplicacao (numero1, numero2, numero3, numero4) {
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
        return;
    }
    alert("A multiplicação é: " + (numero1 * numero2 * numero3 * numero4));
}

multiplicacao (num1, num2, num3, num4)

  const divisao = (banana, cachorro, gato, passarinho) => {
   const operacao = (banana / cachorro / gato / passarinho);
   if (isNaN(operacao)) {
       return;
   }
   alert("A divisão é: " + operacao);
  }

  divisao(num1, num2, num3, num4)
