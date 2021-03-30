const moment = require("moment");
const fs = require('fs');
const nomePetshop = "PETSHOP AVANADE";
let banco_dados = fs.readFileSync('./banco_dados.json', 'utf-8');
banco_dados = JSON.parse(banco_dados);

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(banco_dados, null, 2);
    fs.writeFileSync('banco_dados.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {
    for(let pet of banco_dados.pets){
        pet.vacinado == true ? console.log('vacinado') : console.log('Não vacinado');
        console.log(`As informações de cadastro do pet: ${pet.nome}, ${pet.tipo},  ${pet.idade}, ${pet.raca}, ${pet.peso}, ${pet.tutor}, ${pet.contato},  ${pet.vacinado}`);
    }
}

listarPets();


const vacinarPet = (pet) => {
    for(let pet of banco_dados.pets){
        if(pet.vacinado == false && pet.nome == pet.nome){
            pet.vacinado = true;
            console.log(`O pet está vacinado ${pet.nome}`);
        }else{
            console.log("já está vacinado");
        }
    }
}

vacinarPet();

const campanhaVacina = () => {
    let contando = 0;
    for(let pet of banco_dados.pets){
        
        if(pet.vacinado == false){
            pet.vacinado = true;
           contando++;  

        }

    }
    atualizarBanco();
    console.log(`Os pets ${contando}`)
}

campanhaVacina();

const adicionarPet = (novoPet) => {
    banco_dados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);

}

adicionarPet(

    {"nome":"Saure",
    "tipo":"cachorro",
    "idade":10,
    "raca":"Vira-lata",
    "peso":17,
    "tutor":"Janaina",
    "contato":"(11) 99799-3278",
    "vacinado":true,
    "servicos":"['banho', 'tosa', 'consulta', 'castração', 'exame de sangue', 'vicina']"}
    );

const darBanhoPet = pet => {
        pet.servicos.push({
            'nome':'banho',
            'data': moment().format('DD-MM-YYYY')
        });
        atualizarBanco();
        console.log(`${pet.nome} está de banho tomado!`);
    };
darBanhoPet(banco_dados.pets[0]);

const tosarPet = (pet) => {
    
        pet.servicos.push({
            'nome': 'tosa'
        });
        atualizarBanco();
        console.log(`${pet.nome} está com cabelinho na régua!  ` +  'Data/horario do serviço:' + moment().format());
  
}

tosarPet(banco_dados.pets[0]);

const apararUnhasPet = (pet) => {
    
    pet.servicos.push({
        'nome': 'corte de unhas'
    });
    atualizarBanco();
    console.log(`${pet.nome} está de unhas aparadas!  ` + 'Data/horario do serviço:' +  moment().format());
    
}

apararUnhasPet(banco_dados.pets[0]);



