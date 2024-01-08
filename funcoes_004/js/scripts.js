//1 Criando funções

function minhaFuncao(){
    console.log("Minha função");
}

minhaFuncao();



const minhaFuncaoEmVariavel = function (){
    console.log("Função em variavel");
}
minhaFuncaoEmVariavel();

function funcaoParametro(txt){
    console.log(`Imprimindo: ${txt}`);

}

funcaoParametro("Função com parametro sendo informado diretamente no código");



// 2 return

function parOuImpar(num){
    let resto = num%2

    if (resto === 0){
        return "par.";
    }else{
        return "impar.";
    }
}

console.log(`O numero 63 é`,parOuImpar(63))

// 3 Escopo de funções são diferentes do escopo da mais, uma n interage com a outra.
// 4 escopo aninhado
// 5 arrow function

const testArrow = () =>{
    console.log("Teste arrow func")
}

testArrow();

const raizQuadrada = (x) => x*x;

console.log(raizQuadrada(10));

// 7 Parametro opcional

const multiplicacao = function (m,n){
    if (n === undefined){
        return m*2;
    }else{
        return m*n;
    }
};

console.log(multiplicacao(100,3));
console.log(multiplicacao(9));


// Closure