//CLasse, data e moeda
//Classes no Javascript

class Carro {
  //nome de classes devem iniciar com a primeira letra maiúscula
  //Atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //Métodos
  buzinar() {
    return "Beep! Beep!";
  }
}


//Criando uma instância (objeto) da classe carro
const carroPopular = new Carro("Fiat", "Uno", "2012")
//Console log para exibir
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e faz ${carroPopular.buzinar()}` )

//Instância carroEsportivo (sem nenhuma característica)
const carroEsportivo = new Carro()
//Atribuindo o valor depois
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = "2024"

//Console log para exibir
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}` )

//É possível que a instância criada tenha mais atributos/métodos do que a classe que ele está vinculado
//Adicionando um novo atributo
carroEsportivo.corNeon = "Azul"

//Adicionando um novo método
carroEsportivo.turbo = function(){
    return "Vrummm! O carro está acelerando!"
}
//Exibindo
console.log(`O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon da cor ${carroEsportivo.corNeon}. ${carroEsportivo.turbo()}`)

//// Manipulando datas no Javascript

//Existe uma classe nativa no Javascript para criação da classe Date() para o dia atual, mês e ano. Basta criar uma variável e chamá-la como instância da classe Date

const dataAtual = new Date()
console.log(typeof(dataAtual))

//Pegando o dia atual
const dia = dataAtual.getDate()
console.log(`Hoje é dia ${dia}.`)

//Pegando o mês atual
const mes = dataAtual.getMonth()+1 //Javascript começa a contagem pelo mês 0 zero
console.log(`O mês atual é ${mes}`)

//Pegando o ano atual
const ano = dataAtual.getFullYear()
console.log(`Ano atual : ${ano}`)

//Adicionando dias, meses a nos à data atual
//Adicionar 10 dias à data atual

dataAtual.setDate(dataAtual.getDate()+10);

//Exibe a nova data:
console.log(`Daqui a 10 dias será ${dataAtual.getDate()}.`)

//Adicionar 3 meses à data atual
dataAtual.setMonth(dataAtual.getMonth() + 3);

//Exibe a nova data:
console.log(`Daqui a 3 meses será mês ${dataAtual.getMonth()+1.}`) //adicionar mais um mês devido o erro de contagem de meses no Javascript

//Adicionar 2 anos à data atual
dataAtual.setFullYear(dataAtual.getFullYear()+2);

//Exibe o novo ano
console.log(`Daqui 2 anos será ${dataAtual.getFullYear()}.`)

////////////////////////////////////
//Trabalhando com moedas no Javascript
//Casa decimal é utilizado o "." . Ex: salário 2500.00

let salario = 2500.30
console.log(salario)
//forçar a exibir as casas decimais
console.log(salario.toFixed(2))

//Ocultando as casas decimais
console.log(salario.toFixed(0))

//Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace('.',','))

//Formatação de moeda (não precisa utilizar o replace)
//Mostrando o salario em real (R$)
console.log(salario.toLocaleString("pt-br",{style: 'currency', currency: "BRL"}))

//Mostrando o salario em Dolar (USD)
console.log(salario.toLocaleString("en",{style: 'currency', currency: "USD"}))

//Convertendo de real para dólar
const salarioDolar = salario * 0.176
console.log(salarioDolar.toLocaleString("en",{style: 'currency', currency: "USD"}))

//Mostrando o salario em EURO (EUR)
console.log(salario.toLocaleString("en",{style: 'currency', currency: "EUR"}))

////////
//Formatação de String
const nome = "Érlon Viana"

//Alterando para Letras Maiúsculas
console.log(nome.toUpperCase())

//Alterando para Letras Minúsculas
console.log(nome.toLowerCase())

//Contando caracteres de uma String (inlcuindo os espaços)
console.log(nome.length)

//Removendo espaços
const novoNome = nome.replace(/\s/g,"") //Expressão regtx, substituiu o espaço por uma "ausência" de caracter
console.log(novoNome)
console.log(novoNome.length)

