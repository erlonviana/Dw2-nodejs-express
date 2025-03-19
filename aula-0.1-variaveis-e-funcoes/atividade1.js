//Função simples
//1 – Crie uma função simples que exiba no console seu nome, sua idade e sua cidade. 
//(Não esqueça de invocar a função no final).
function saudacao() {
    console.log("Érlon Viana dos Santos, 35 anos, Registro/SP");
  }
  
  saudacao();

  //Função com parâmetros

//2 – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. 
//O resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”).
//A função deve ser chamada ao final passando dois números como argumento.
function divisao(n1, n2) {
    let resultado = n1 / n2;
    console.log(`A divisão dos dois números foi ${resultado}.`);
  }
  let n1 = 16;
  let n2 = 8;
  divisao(n1, n2);

//Função com retorno
//3 – Crie uma função que receba três números e retorne a multiplicação entre esses números. 
//O resultado deve ser exibido no console.

function multipl(n1, n2, n3) {
    return n1 * n2 * n3;
  }
  console.log(`A multiplicação dos três números foi ${multipl(2, 6, 9)}.`);

//Função com mais de um retorno
//4 – Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, 
//a função deve retornar o valor “Maior de idade”, se não deve retornar “Menor de idade”.
//O resultado deve ser exibido no console.

function maiorIdade(n) {
    if (n >= 18) {
      return "Maior de idade";
    } else {
      return "Menor de idade";
    }
  }
  let num = 17; 
  console.log(maiorIdade(num));
  console.log(`${num} anos é ${maiorIdade(num)}!`);

//Função anônima

//5 – Crie uma função anônima que receba duas notas como parâmetro.
//Se a média dessas notas for <=5, a função deve retornar o valor “Reprovado”,
//se não deve retornar o valor “Aprovado”.  O resultado deve ser exibido no console.
//Considere média = (nota1 + nota2) / 2.

let media = function (nota1, nota2) {
  if ((nota1 + nota2) / 2 > 5) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
};

console.log(media(5.1, 5.6));  
console.log(`O resultado para sua média é ${media(5.1, 5.6)}!`); 

//Arrow function com parâmetro único
//6 – Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número.
//O resultado deve ser exibido no console concatenado com uma string. (Ex: “O triplo do número é...”)

const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`)
console.log(`O triplo de 7 é ${Calc(7, '*', 3)}.`)

//Arrow function com mais de um parâmetro
//7 – Crie uma arrow function que receba quatro números como parâmetro e retorne a
//soma entre esses números. O resultado deve ser impresso no console.

const calc = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
console.log(`A soma dos itens é ${calc(7, 4, 3, 5)}.`);

//IIFE
//8 – Crie uma função imediata que receba o nome de uma pessoa como parâmetro e
//exiba no console uma saudação a essa pessoa.

const start = (function(app){
  console.log(`Olá, boa noite ${app}`)
})("Érlon!")