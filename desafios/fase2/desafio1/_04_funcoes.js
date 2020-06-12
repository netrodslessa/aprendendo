// Desafios para fortalecer os conhecimentos obtidos até aqui.
// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário t
// em um nome e suas tecnologias (novo array), por exemplo:
// const usuarios = [
//   { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
//   { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
//   { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
// ]

const usuarios = [{
        nome: 'Carlos',
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias: ['JavaScript', 'CSS']
    },
    {
        nome: 'Tuane',
        tecnologias: ['HTML', 'Node.js']
    }
]

// Percorra a lista de usuários com uma estrutura de repetição imprimindo em 
// tela as informações dos usuários:
// ```
// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js
// ```
for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o 
// usuário trabalha com CSS ou não. Essa função deve retornar um boolean 
// true/false.
// Por exemplo:

