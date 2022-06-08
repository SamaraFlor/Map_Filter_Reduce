const lista = [
        {
            preco: 2,
            nome: 'maçã',
        },
        {
            preco: 30,
            nome: 'roupa',
        },
        {
            preco: 25,
            nome: 'carne',
        },
    ];

    const saldoDisponivel = 100;

    function calcular(saldoDisponivel,lista, index){
        return lista.reduce(function(atual,anterior){
            console.log('rodada', index +1);
            console.log({atual});
            console.log({anterior});
            return atual - anterior.preco;
        },saldoDisponivel)
    }

    console.log(calcular(saldoDisponivel,lista));






    ///////////////////////////////////
    function calculaSaldo(saldo, itens) {
        if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';
    
        const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);
    
        return `O saldo final será de ${saldoFinal} reais`;
    }
    
    minhaLista = [
        {
            preco: 2,
            nome: 'maçã',
        },
        {
            preco: 30,
            nome: 'roupa',
        },
        {
            preco: 25,
            nome: 'carne',
        },
    ];
    
    saldo = 100;
    
    console.log(calculaSaldo(saldo, minhaLista));