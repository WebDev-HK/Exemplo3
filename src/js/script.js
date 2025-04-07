// DECLARACAO DE VARIAVEL

var nome = "fiap"
console.log(nome)

let idadex = 19
console.log(idadex)

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
console.log(parseFloat(numString));

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
const num4 = 30;

console.log(num3 < num4);  //verdadeiro ou falso
console.log(num3 > num4 && num4 < num3) //verdadeiro ou falso vale p 2 "e"
console.log(num3 > num4 || num3 < num4) //"ou"

// OPERADORES DE COMPARACAO

console.log(num3 == num4);
console.log(num3 === num4);

// == -> compara a variavel   === -> compara e ve o tipo da variavel

// ESTRUTURA CONDICIONAL
// if

let num=12
if(num==10){
    console.log("e verdadeiro")
}

// if - else
let usuario="teste"
if(usuario=="teste"){
    console.log("usuario correto")
}else{
    console.log("Usuario incorreto")
}
// if encadeado / alinhado

let idades =15

if(idades<15){
    console.log("Menor de idade")
}else if(idades>15 && idades<18){
    console.log("nao eh maior mas pde entrar")
}else{
    console.log("pode entrar e maior")
}

// SWITCH

let time="Corinthians"
switch(time){
    case "Corinthians":
        console.log("melhor time")
        break;
    case "Sao Paulo":
        console.log("nao e o melhor time")
        break;
    case "Palmeiras":
        console.log("nao tem mundial")
        break
    default:
        console.log("nenhuma as opcoes")
}

 // TERNARIO
 