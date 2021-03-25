const moment = require("moment");

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
    vacinado: false,
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

/*const listarPets = () => {
    /*for(let i = 0; i<pets.length; i++ ){
      // console.log(pets[i].nome);
       //console.log(pets[i].nome + " " +pets[i].raca);
       console.log(`O nome do pet é ${pets[i].nome}`);
    }

    for(let pet of pets){
        console.log(`O nome do pet é ${pet.nome}, ${pet.tipo}, ${pet.idade}, ${pet.raca}, ${pet.peso}, ${pet.tutor}, ${pet.contato}, ${pet.vacinado}, ${pet.servicos}`);
    }
}*/

const vacinarPet = () => {
    for(let pet of pets){
        if(pet.vacinado == false && pet.nome == 'Saure'){
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
    for(let pet of pets){
        
        if(pet.vacinado == false){
            pet.vacinado = true;
           contando++;  

        }

    }
    console.log(`Os pets ${contando}`)
}

campanhaVacina();

const adicionarPet = () => {
    pets.push({
        nome: 'Curioso',
        tipo: 'gato',
        idade: 1,
        raca: 'sianes',
        peso: 5,
        tutor: 'Janaina',
        contato: '(11) 99799-3278',
        vacinado: false,
        servicos: []
    })

console.log(pets);

}
adicionarPet();



darBanhoPet = () => {
    
    for(pet of pets){
        if(pet.servicos == null || pet.servicos != null){
            pet.servicos.push({servicos: 'banho'})
            console.log(`${pet.nome} está de banho tomado!  ` + 'Data/horario do serviço:' +  moment().format() );
        }   
    }
}

darBanhoPet();

tosarPet = () => {
    for(pet of pets){
        if(pet.servicos == null || pet.servicos != null){
            pet.servicos.push({servicos: 'tosa'})
            console.log(`${pet.nome} está com cabelinho na régua!  ` +  'Data/horario do serviço:' + moment().format());
        }  
    }
}

tosarPet();

apararUnhasPet = () => {
    for(pet of pets){
        if(pet.servicos == null || pet.servicos != null){
            pet.servicos.push({servicos: 'corte de unhas'})
            console.log(`${pet.nome} está de unhas aparadas!  ` + 'Data/horario do serviço:' +  moment().format());
        }   
    }
}

apararUnhasPet();