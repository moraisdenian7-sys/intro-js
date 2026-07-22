// Um array nada mais é do que uma estrutura de dados usada para armazenar vários valores em uma única variavel

// cada item, é organizado dentro da lista com uma posição especifica que chamamos de indice

const fruta1 = "Maçã"
const fruta2 = "Banana"
const fruta3 = "Uva"

// Ao invés de criar uma variavel para cada item, utilizamos um array, representado por []

const frutas = ["Maçã", "Banana", "Uva", "Maracujá", "Pêra"]

// mostrando a lista completa
console.log(frutas)

// pegando um item especifico da lista
console.log(frutas[2])

// ao tentar acessar um elemento que não existe na lista, ela nos retorna undefined
console.log(frutas[4])

// descobrindo o tamanho do array
console.log(frutas.length)

// iterando sobre um array
// conhecendo o for...of
for (const fruta of frutas) {
  console.log(fruta)
}

// trabalhando com o for tradicional
// for (let index = 0; index < frutas.length; index++) {
//   const element = frutas[index];
//   console.log(element)
// }


// exemplo de dados aceitos por um array
const dados = [
  10,
  "texto qualquer",
  true,
  { nome: "Vinicius" },
  [1, 2, 3],
  undefined,
  null
]

console.log(dados)
console.log(dados[0]) // 10
console.log(dados[1]) // texto qualquer
console.log(dados[2]) // true
console.log(dados[3]) // { nome: "Vinicius" }
console.log(dados[4]) // [1,2,3]
console.log(dados[5]) // undefined
console.log(dados[6]) // null


// manipulando valores de um array
const pessoas = []

// mostrando o array vazio
console.log(pessoas)

// 1 - inserindo itens no array
// pessoas[2] = "Alyne"

// push - Adiciona novos elementos ao final de um array e retorna o novo comprimento do array.
pessoas.push("Alyne")
pessoas.push("Magenta")
console.log(pessoas)

// 2 - removendo itens de um array
// pop - remove o último item da array
pessoas.pop()
console.log(pessoas)