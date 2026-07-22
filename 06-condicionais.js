//condição - é uma exigencia, um requisito. Algo que precisa existir pra que algo aconteça ou seja considerado como verdadeiro

// as estruturas condicionais permitem que o programa tome decisoes 

// 1 - if/se simples
//* if(condição)
// codigo

if(false)
console.log("seja bem vindo")

console.log("depois do if")

// 2 - if...elese

let idade = 16

if (idade >=18)
    console.log("voce é maior de idade")
else
    console.log("voce não é maior de idade")

let user = false
if (user== true)
    console.log("seja bem vinda Cristine")
else
    console.log("usuario não conectado")

// 3 - If...else - se/senão
// serve para testar várias condiçoes 

let nota = 7.4
if (nota > 8)
    console.log("excelente")
else if (nota > 7)
    console.log("aprovado, meu bem")
else if (nota > 4)
    console.log("recuperação, meu bem")
else
    console.log("reprovado")

