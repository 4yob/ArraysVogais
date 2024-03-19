//Desafio vogais:
//Utilizar um método de array que conte a quantidade de vogais em uma string fornecida
//Utilizar um método de array que mostre essas vogais

let frase = 'Eu sou legal';
let minuscula = frase.toLowerCase();
let separacao = minuscula.split("");
let vogais = ['a', 'e', 'i', 'o', 'u'];

let vogaisEncontradas =  separacao.filter(letra => vogais.includes(letra))
let numero = vogaisEncontradas.length

console.log("A frase é: "+ frase);
console.log("As vogais encontradas são: " + vogaisEncontradas);
console.log("O número total de vogais é: " +  numero);