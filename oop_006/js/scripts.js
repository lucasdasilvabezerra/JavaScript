/* //1 Métodos

const animal = {
    nome: "Bilu",
    latir: function(){
        console.log("au au")
    }
};



console.log(animal.nome);
animal.latir()

// 2 aprofundando

const pessoa = {
    nome: "Lucas",

    getNome: function (){
        return this.nome;

    },

    setNome: function(novoNome){
        this.nome = novoNome;
    },
};

console.log(pessoa.getNome())
pessoa.setNome("Rovaldo")
console.log(pessoa.getNome())

// 3 prototype

const text = "oppps"
console.log(Object.getPrototypeOf(text))

const booleano = true
console.log(Object.getPrototypeOf(booleano))


// 5 classes basicas


const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao.raca)
console.log(cachorro.raca)

const bulldog = Object.create(cachorro)
bulldog.raca = "Bulldog"

console.log(bulldog.raca)

// 6 - função como classe


function criarCachorro(nome,raca){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}


const bob = criarCachorro("Bob","Vira lata")
console.log(bob)

const bilu = criarCachorro("Bilu","York Shire")
console.log(bilu)


console.log(Object.getPrototypeOf(bilu))

// 7 funções como classe 

function Cachorro(nome,raca){
    this.nome = nome
    this.raca = raca
}

const polaca = new Cachorro("Polaca","Vira Lata")
console.log(polaca)

// 8 metodos função  construtora

Cachorro.prototype.uivar = function (){
    console.log("Aaaaaauuuuu! Bc we r animals")
}

polaca.uivar()

//9 Classes ES6

class CachorroClasse{
    constructor(nome,raca){
        this.nome = nome
        this.raca = raca
    }
}

const gigante = new CachorroClasse("Gigante","Pinscher")

console.log(gigante)

// 10 Mais sobre classes

class Caminhao {
    constructor(eixos,cor){
        this.eixos = eixos
        this.cor = cor
    }
    descreverCaminhao(){
        console.log(`Esse caminhão tem ${this.eixos} eixos e é ${this.cor}.`)
    }
}


const caminhaoDoTio = new Caminhao(16,"vermelho")
caminhaoDoTio.descreverCaminhao()

Caminhao.prototype.motor = 4.0

//11 Overrride
class Humano{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}

const lucas = new Humano("Lucas",22)
console.log(lucas)
Humano.prototype.idade="Não definida"
console.log(Humano.prototype.idade)
 */

//12 Symbol

class Aviao{
    constructor(marca,turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()

Aviao.prototype[asas] = 2

const boeing747 = new Aviao("Boeing",4)
console.log(boeing747)

console.log(boeing747[asas])

//13 Getter e Setters

class Post {
    constructor(titulo,descricao,tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`
    }
    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Covid em 2024","Uma nova onda de Covid em 2024")

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "Covid, Saúde, Saúde Pública"
console.log(myPost)

//14 Herança

class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas,nome){
        super(patas,patas)
        this.nome=nome
    }
}

const cinzento = new Lobo(4,"Cinzento")
console.log(cinzento)
console.log(cinzento.patas)

//15 instanceof

console.log(cinzento instanceof Lobo)