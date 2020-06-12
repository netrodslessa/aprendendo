const usuarios = [{
        nome: 'Salvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function calculaSaldo(receitas, despesas) {
    for(let i = 0; i < usuarios.length; i++){
    function calculaDespesas() {
        let despesasTotal = 0
        for (let i = 0; i < usuarios.length; i++) {
            for (let c = 0; c < usuarios[i].despesas.length; c++) {
                despesasTotal = despesasTotal + usuarios[i].despesas[c];
            }
            return despesasTotal
        }

    }

    function calculaReceitas() {
        let receitaTotal = 0
        for (let i = 0; i < usuarios.length; i++) {
            for (let b = 0; b < usuarios[i].receitas.length; b++) {
                receitaTotal = receitaTotal + usuarios[i].receitas[b];
            }
            return receitaTotal[receitaTotal]
        }

    }

    console.log(receitas - despesas)
    console.log(calculaSaldo(calculaReceitas(), calculaDespesas()))
}
}



