const listadepecas = ['Amortecedor', 'Filtro de óleo', 'Pastilha de freio', 'Radiador'];

console.log("\nQuantidade de caracteres\n");
if (listadepecas.length <= 10){
    console.log("As peças podem ser cadastradas:\n")
    console.log(listadepecas,"\n");
};
for(let val = 0; val < listadepecas.length; val++){
    pecaatual = listadepecas[val]
    if (pecaatual.length < 3){
        console.log("Peça: "+ pecaatual + ' possui nome inferior a 3 caracteres e nao pode ser cadastrada.')
    }else{
        console.log(pecaatual + " pode ser cadastrado")
    }
    const pesodapeca = [50,75,105,225];
    console.log("\nPeso da peça: ")

    if (pesodapeca[val] >= 100){
        console.log(pesodapeca[val]+"g - Peso suficiente\n")
    }else{
    console.log(pesodapeca[val]+"g - Valor insuficiente\n")
}
}
console.log()
