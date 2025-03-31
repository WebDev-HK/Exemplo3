// DECLARACAO DE VARIAVEL

var nome = "fiap"
console.log(nome)

let idade = 19
console.log(idade)

const sobrenome = "Fiapinho"
console.log(sobrenome)

//declarando um variavel indefinido
let nome1;
console.log(nome1)

//declarando uma variavel nula
let nome2 = null;
console.log(nome2)

//TIPOS DE VARIAVEIS

let exemplo1 = 10;
console.log(typeof exemplo1)

let exemplo2 = "Tecnologia"
console.log(typeof exemplo2)

let exemplo3 = true;
console.log(typeof exemplo3)

let exemplo4 = {};
console.log(typeof exemplo4)

let exemplo5 = [];
console.log(typeof exemplo5)

//CONVERSOES

let numFloat = 123.456;
console.log(parseInt(numFloat));

let numString = "123.456";
console.log(parseFloat(NumString));

//METODOS
//LENGTH = VERIFICA O TAMANHO DA STRING
let frase = "O mundo da tecnologia"
console.log(frase.length);

//IndexOf - retorna um trecho do texto

let texto = "a Programacao indomavel e sustentavel";
console.log(texto.indexOf(""))

//Slice - retorna um trecho do texto com inicio e fim
let info = "processamento de ponta";
console.log(info.slice(15, 19))

//OPERADORES ARITMETICOS

const num1 = 10
const num2 = 20

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// OPERADORES LOGICOS

const num3 = 20;
const num4 = "30";

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3)
console.log(num3 > num4 || num3 < num4)

// OPERADORES DE COMPARACAO

console.log(num3 == num4);
console.log(num3 === num4);

// == -> compara a variavel   === -> compara e ve o tipo da variavel
