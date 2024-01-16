/* // 1 - setTimeout

console.log("Ainda n executou ")

//setTimeout(function(){

   // console.log("Requisição assíncrona")


//},2000)


console.log("Ainda n executou 2") 

// 2 - setInterval

console.log("Ainda n executou ")

/* setInterval(function(){

    console.log("Requisição assíncrona com Interval")


},3000)
 */

console.log("Ainda n executou 2") 

//3 - Promise

/* const promessa = Promise.resolve(5+5)

console.log("Algum código")


promessa
    .then(value =>{
        console.log(`A soma é ${value}`)
        return value;
    })
    .then((value) => value -1)
    .then((value) => console.log(`Agora é ${value}`))
console.log("Algum código 2")


//4 - falha na promisse

Promise.resolve(4*"asds")

.then((n)=>{
    if(Number.isNaN(n)){
        throw new Error("Valores inválidos.")
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`))  */

//5 - Rejeição

function checkNumber(n){
    return new Promise((resolve,reject) => {
        if (n > 10){
            resolve(`O número é maior que 10`)
        }else{
            reject(new Error("Número muito baixo"))
        }
    })
}

const y = checkNumber(20)

const u = checkNumber(10)

y.then((v) => console.log(`O resultado é ${v}`)).catch((err)=>
    console.log(`Um erro ocorreu: ${err}`)
)

u.then((v) => console.log(`O resultado é ${v}`)).catch((err)=>
    console.log(`Um erro ocorreu: ${err}`)
)

// 6 - async wait

function resolveComDelay(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Resolveu a promise")
        },2000)
    })
}

async function chamadaAsync(){
    console.log("Chamando a Promise, esperando resultado...")
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()