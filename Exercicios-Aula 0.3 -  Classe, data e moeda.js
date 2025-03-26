//Classes e objetos
//1 – Crie uma classe em JavaScript chamada Heroi, que
//represente um herói genérico. Essa classe deve conter os seguintes atributos:
//- nome
//- vida
//- velocidade
//- forca

//Além disso, implemente os seguintes métodos na classe Heroi:
//- correr(): Exibe uma mensagem informando que oherói está correndo.
//- andar(): Exibe uma mensagem informando que o herói está andando.
//- atacar(): Exibe uma mensagem informando que o herói está atacando.
//- defender(): Exibe uma mensagem informando que o herói está se defendendo.
//Use o “return” para retornar as mensages.

//Após criar a classe Heroi, instancie três objetos baseados nela, representando os heróis.
// Atribua valores para os atributos que foram definidos na classe para cada herói, inserindo também os atributos e métodos adicionais, conforme abaixo:
// Homem-Aranha
//Atributo adicional: 
//- teia (0 ou 1, indicando se ele pode ou não soltar teia)
//Método adicional:
//- sentidoAranha(): Exibe uma mensagem informando que ele detectou perigo.
 
//Superman
//Atributo adicional: 
//- podeVoar (0 ou 1, indicando se ele pode ou não voar)
//Método adicional:
//- visaoCalor(): Exibe uma mensagem informando que ele está usando sua visão de calor.

//Batman
//Atributo adicional: 
//- esconder (0 ou 1, indicando se ele está se escondendo ou não)
//Método adicional:
//- investigar(): Exibe uma mensagem informando que ele está investigando um crime.

//*Resposta
class Heroi {
    constructor(nome, vida, velocidade, forca) {
      this.nome = nome;
      this.vida = vida;
      this.velocidade = velocidade;
      this.forca = forca;
    }
    //Métodos
    correr() {
      return "O heroi está correndo!";
    }
    andar() {
        return "O heroi está andando.";
      }
    atacar() {
        return "O heroi está atacando.";
      }
    defender() {
        return "O heroi está se defendendo!";
      }
  }

const homemAranha = new Heroi("Homem-aranha", "Fotógrafo", "lento", "muito forte")
homemAranha.teia0 = "Não pode soltar teia";
homemAranha.teia1 = "Pode soltar teia";
homemAranha.sentidoAranha = function(){
    return "O sentido de aranha detectou perigo!"
}
console.log(`O heroi ${homemAranha.nome}, profissão ${homemAranha.vida}, é ${homemAranha.velocidade}, ${homemAranha.forca} e ${homemAranha.teia1}`)  
console.log(`${homemAranha.sentidoAranha()}`)

const superHomem = new Heroi("Super-homem", "jornalista", "rápido", "extremamente forte")
superHomem.podeVoar0 = "Não pode voar";
superHomem.podeVoar1 = "Não pode voar";
superHomem.visaoCalor = function(){
    return "O Super-homem está usando a visão de calor!"
}
console.log(`O heroi ${superHomem.nome}, profissão ${superHomem.vida} é ${superHomem.velocidade}, ${superHomem.forca} e ${superHomem.podeVoar0}`)  
console.log(`${superHomem.visaoCalor()}`)

const batman = new Heroi("Batman", "bilionário", "lento", "forte")
batman.esconder0 = "Não está escondido";
batman.esconder1 = "Está escondido";
batman.investigar = function(){
    return "Batman está investigando um crime!"
}
console.log(`O heroi ${batman.nome}, profissão ${batman.vida} é ${batman.velocidade}, ${batman.forca} e ${batman.esconder1}`)  
console.log(`${batman.investigar()}`)

//Manipulação de datas
//2 – Crie uma arrow function que exiba uma data no console da seguinte forma:

//- Três dias a mais que o dia atual;
//- Dois meses a mais que o mês atual;
//- Um ano a mais que o ano atual;
//O formato da data deve ser exibida no padrão dia/mês/ano.

const DataAtual = (getDate(); getMonth(); getYear()) => (`Daqui 3 dias será{getDate()+3}`; `daqui 2 meses será ${getMOnth()+3}`; `daqui um ano será ${getYear()+1}`)
console.log(DataAtual)

//Formatação de moedas
//3 – Crie uma função que receba um determinado salário em real como parâmetro e converta esse salário para as moedas Dólar e Euro. Deverá ser feito a conversão de valores e formatação da moeda. 
//Considere:
//1 real = 0.176 dólar
//1 real = 0.16 euro

//Formatação de strings

//4 – Crie uma função que receba um nome como parâmetro e exiba no console este nome formatado somente com letras maiúsculas, somente com letras minúsculas,
// e em seguida exiba o número de letras que esse nome possui.

