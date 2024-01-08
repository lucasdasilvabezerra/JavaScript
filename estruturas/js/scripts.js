// 1 Variaveis

// let nome = "Matheus";
// console.log(nome);

// nome = "Lucas da Silva"

// console.log(nome);

// const idade = 22;
// console.log(idade);

//2 Constante com const n podem ser mudadas

//3 funções do js
// alert("Ao clicar em Ok vc aceita a política de privacidade de")

// const x = prompt("Informe sua idade:")
// console.log("Você tem",x,"anos.");

// console.log(Math.max(5,6,7,8));
// console.log(Math.floor(5.33))
// console.log(Math.ceil(5.33))

// // 6 Console

// console.log("console.log");
// console.error("Erro");
// console.warn("Warn, alerta aviso.");


// 7 IF
// let acesso = false;

// while (acesso === false){
//     const idade = prompt("Informe sua idade:");
//     if (idade >= 18){
//         alert("Acesso concedido.")
//         acesso = true
//     }else{
//         alert("Acesso NEGADO!")
//         acesso = false;
//     }
// }

// let p = 0;
// while(p<5){
//     console.log(`O valor de p é ${p}`);
//     p++;
// }

//do while
// let o = 0;
// do{
//     console.log(`Valode de o: ${o}`);
//     o++;
// }while(o<10);


//    FOR

// for(let t = 0; t <= 10; t++){
//     console.log(t);
// }

//14 break

for(let g = 20; g>10; g--){
    if (g==12){
        console.log(`O valor de g é ${g}`);
        break;
    }
    console.log(`O valor de g é ${g}`);
    
}

//15 continue

for(let s =1; s<10; s++){
    if(s%2===0){
        console.log("Número par!");
        continue;
    }
    console.log(s);
}

//16 Switch

const job = "Adv";

switch(job){
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Adv":
         console.log("Você é um advogado!");
         break; 
    default:
        console.log("Profissão não definida.");

}