"use strict";

const opa = "teste";

//const undefinded = 10;

//2 - console.log

let a = 1
let b = 2

if (a == 1){
    a = b+2
}

console.log(a)


for (let i = 0; i<b; i++){
    a = a+2
    console.log(a)
}

if (a>5){
    a = 25;
}
console.log(a)

// 3 - debugger

let c = 1
let d = 2

if(c ==1){
    c = d + 2
}

//debugger

for(let i = 0; i < d; i++){
    c = c+2
}

console.log("EXECUTOU O LOOP")

//debugger

console.log("EXECUTOU O LOOP 2")
if (c > 5){
    c = 25
}

// 4 - tratamento de dados

function checkNumber(n){
    const result = Number(n)
    if(Number.isNaN(result)){
        console.log("Valor incorreto")
        return
    }
    console.log("Valor correto!")
    return result
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("dsadad")

// 5 - exceptions

let x = 10

if(x!=11){
  //  throw new Error("O valor de x não pode ser diferente de 11.")
}

// 6 - try catch

try{
    const soma = x + y
}catch(error){
    console.log(`Erro no programa ${error}`)
}
 
//7 - finally

try{
    const value = checkNumber("dsad")

    if(!value){
        throw new Error("Valores inválidos")
    }
}catch(error){
    console.log(`Opa! Aconteceu um erro: ${error}`)
}finally{
    console.log("Código executado.")
}

// 8 - Assertion

function checkArray(arr){
    if(arr.length === 0){
        throw new Error("O array precisa de elementos!")
    }else{
        console.log(`O array tem ${arr.length} elementos.`)
    }
}

checkArray([1,2,"dsad",3])