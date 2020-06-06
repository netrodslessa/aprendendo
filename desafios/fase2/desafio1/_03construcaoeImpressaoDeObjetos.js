// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um 

// const empresa = {
//     nome: 'Timetec',
//     atuacao: 'Controle de ponto e acesso',
//     endereco: 'R. Pedro Bonifácio Sabel, 610',
//     telefone: '4733971555'
// }

// console.log(`A empresa ${empresa.nome}, está localizada na 
// ${empresa.endereco}, com telefone ${empresa.telefone}, atuando na área de 
// ${empresa.atuacao}`)
//----------------------------------------------------------------------------------------------------
// Vetores e objetos
// Crie um programa com um objeto para armazenar dados de um programador como 
// nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas 
// tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade, use as 
// tecnologias abaixo:

const programador = {
    nome: 'Rodrigo',
    idade: 31,
    especialidades: [{
            nome: 'C++',
            especialidade: 'Descktop'
        }, {
            nome: 'Python',
            especialidade: 'Data Science'
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa 
a tecnologia ${programador.especialidades[0].nome} com especialidade em 
${programador.especialidades[0].especialidade}`)