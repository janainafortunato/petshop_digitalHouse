let fs = require('fs');

//pega conteudo do arquivo e converte pra utf-8
let banco_dados = fs.readFileSync('banco_dados.json', 'utf-8');

//converte o conteudo
banco_dados = JSON.parse(banco_dados);

banco_dados.pets.push({
    "nome": "Pata Branca",
    "tipo": "gato",
    "idade": 1,
    "raca": "Vira-lata",
    "peso": 2,
    "tutor": "Jnaina",
    "contato": "(81) 99799-3278",
    "vacinado": true,
    "servicos": []
});

let petsAtualizado = JSON.stringify(banco_dados);

fs.writeFileSync('banco_dados.json', petsAtualizado, 'utf-8');

