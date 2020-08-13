function printEndereco(address){
    //Jeito 1
    console.log('O usuário mora em ' + address.cidade + ' / ' + address.uf + ', no bairro ' + address.bairro + ', na rua "' + address.rua + '" com nº ' + address.numero + '.');
    //Jeito 2
    console.log(`O usuário mora em ${address.cidade} / ${address.uf}, no bairro ${address.bairro}, na rua "${address.rua}" com nº ${address.numero}.`)
}

function pares(x, y){
    for (let i=x; i <= y; i++){
        if (i%2 === 0)
        console.log(i);
    }
}

function temHabilidade(skills){
    if (skills.indexOf("javascript") === -1)
        return false;
    return true;
}

function experiencia(anos) {
    if (anos >= 0 && anos < 1)
        return 'Iniciante';
    else if (anos >= 1 && anos < 3)
        return 'Intermediário';
    else if (anos >=  3 && anos < 6)
        return 'Avançado';
    else
        return 'Jedi Master';
}

function printInfo(usuarios){
    for (user of usuarios){
        console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}`);
    }
}

let endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

let skills = ["Javascript", "ReactJS", "React Native"];

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

printEndereco(endereco);
pares(1,10);
console.log(temHabilidade(skills));
console.log(experiencia(7));
printInfo(usuarios);
