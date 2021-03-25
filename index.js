const nomePetshop = "PETSHOP AVANADE";

let pets = [{
    nome: 'Saure',
    tipo: 'cachorro',
    idade: 10,
    raca: 'Vira-lata',
    peso: 15,
    tutor: 'Janaina',
    contato: '(11) 99799-3278',
    vacinado: true,
    servicos: ['banho', 'tosa', 'consulta', 'castração', 'exame de sangue', 'vicina']
    },
    {
    nome: 'Elves',
    tipo: 'cachorro',
    idade: 8,
    raca: 'Vira-lata',
    peso: 20,
    tutor: 'Janaina',
    contato: '(11) 99799-3278',
    vacinado: true,
    servicos: ['banho', 'tosa', 'consulta', 'castração', 'exame de sangue', 'vicina']
    },
    {
    nome: 'Doida',
    tipo: 'gato',
    idade: 17,
    raca: 'Vira-lata',
    peso: 5,
    tutor: 'Janaina',
    contato: '(11) 99799-3278',
    vacinado: true,
    servicos: ['banho', 'tosa', 'consulta', 'castração', 'exame de sangue', 'vicina']
    },


];

const listarPets = () => {
    for(let i = 0; i<pets.length; i++ ){
       console.log(pets[i].nome);
    }
}

listarPets();

//console.log(pets);