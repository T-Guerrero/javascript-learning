//Classes
class Usuario {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    isAdmin(){
        if (this.admin)
            return this.admin;
        return false;
    }
}

class Admin extends Usuario{
    constructor(email, password){
        super(email, password);
        this.admin = true;
    }
}

const user = new Usuario('sfjks', 'sdsd');
const admin = new Admin('sfjks', 'sdsd');

console.log(user.isAdmin())
console.log(admin.isAdmin())

//##############################################################
//Array methods
const usuarios = [
    { nome: 'Guerrero', idade:19, empresa:'CodeLab' },
    { nome: 'Erick', idade:23, empresa:'CodeLab' },
    { nome: 'Lucas', idade:30, empresa:'Rocketseat' }
]

const idades = usuarios.map((el) => el.idade);
const filter = usuarios.filter((el) => el.empresa === 'CodeLab' && el.idade >= 20);
const find = usuarios.find((el) => el.empresa === 'Google')
const maxAge = usuarios.map((el) => ({...el, idade: el.idade*2}))
.filter((el) => el.idade <= 50);

// console.log(idades);
// console.log(filter);
// console.log(find);
// console.log(maxAge);

//##############################################################
//Desestruturação
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const {nome, endereco: {cidade, estado}} = empresa;

// console.log(nome);
// console.log(cidade);
// console.log(estado);

function mostraInfo({nome, idade}){
    return `${nome} tem ${idade} anos.`;
}

// console.log(mostraInfo({nome: 'Diego', idade: 23}));

//##############################################################
//Rest and Spread
const arr = [1, 2, 3, 4, 5, 6]
let [x, ...y] = arr;

// console.log(x);
// console.log(y);

function soma(...params){
    return params.reduce((total, param) => total + param);
}

// console.log(soma(1, 2, 3, 4, 5, 6));
// console.log(soma(1, 2));

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {
    ...usuario,
    nome: 'Gabriel'
}

const usuario3 = {
    ...usuario,
    endereco: {
        ...usuario.endereco,
        cidade: 'Lontras'
    }
}

// console.log(usuario2);
// console.log(usuario3);

//##############################################################