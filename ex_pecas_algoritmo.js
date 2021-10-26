const listadepecas = ['peças de teste', 'AB', 'peca B'];
console.log("\nQuantidade de caracteres\n");
if (listadepecas.length <= 10){
    console.log("As peças podem ser cadastradas\n")
};
for(let val = 0; val < listadepecas.length; val++){
    pecaatual = listadepecas[val]
    if (pecaatual.length < 3){
        console.log("Peça: "+ pecaatual + '- a peca possui nome inferior a 3 caracteres e nao pode ser cadastrada.')
    }else{
        console.log(pecaatual + ": a peça poder ser cadastrada")
    }
console.log("\nPeso da peça\n")
let pesodapeca = 50;
    if (pesodapeca >= 100){
        console.log("\nPeso suficiente\n")
}else{
    console.log('\nValor insuficiente\n')
}

}