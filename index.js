const moment = require("moment");
const fs = require('fs');
const { Console } = require("console");
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

//listarPets();


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

//vacinarPet();

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

//campanhaVacina();

const adicionarPet = (novoPet) => {
    banco_dados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);

}

/*adicionarPet(

    {"nome":"Saure",
    "tipo":"cachorro",
    "idade":10,
    "raca":"Vira-lata",
    "peso":17,
    "tutor":"Janaina",
    "contato":"(11) 99799-3278",
    "vacinado":true,
    "servicos":"['banho', 'tosa', 'consulta', 'castração', 'exame de sangue', 'vicina']"}
    );*/

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

const atenderCliente = (pet, servicos) => {
    console.log(`Novo atendimento para o pet do tutor ${pet.tutor} com o nome ${pet.nome}`);
    servicos(pet)
    console.log('Volte sempre !!');
}

//chamada da função nas ultima linha
atenderCliente( banco_dados.pets[0], darBanhoPet );

const buscarPets = banco_dados.pets.map(
    (pet) => {return pet.nome})

   // console.log('Nome dos pets cadastros no sistema ' + buscarPets);

const PesquisarPets = banco_dados.pets.filter(
    (pet) => {return pet.peso <= 10 });

   // console.log(PesquisarPets);

const TotalPets = banco_dados.pets.reduce(
    (total, pet) => {return total + pet.idade;}, 0)

    //console.log(`A idade somanada de todos os pets ${TotalPets}`);

banco_dados.pets.forEach(function(pet){
    //   console.log(pet.raca);
    });


 