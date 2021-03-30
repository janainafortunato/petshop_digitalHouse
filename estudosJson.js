/*let petObj = {
    nome: 'Doug',
    idade: 4,
    tipi: 'cachorro'
};*/

let pets = require('./banco_dados.json');

//console.log(JSON.stringify(teste));

console.log(pets);

const atenderCliente = (pet, servico) => {
    console.log(`Ola, ${pet.nome}`);
    servico();
    console.log('Tchau, até mais!');
}

const darBanho = () => {
    console.log('danado banho no pet...');
}

const apararUnhas = () => {
    console.log('Apara unhas.....');
}

atenderCliente(pets[0], darBanho, apararUnhas);
console.log("----------------------------------");
atenderCliente(pets[2], apararUnhas);

