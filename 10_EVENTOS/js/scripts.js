// 1 - adicionando eventos

const btn = document.querySelector("#my-button")
let contadorDeClicks = 0
btn.addEventListener("click", function(){
    contadorDeClicks = contadorDeClicks +1
    console.log(`Clicou aqui ${contadorDeClicks} vezes`)
    
})

// 2 - Removendo eventos

const secondBtn = document.querySelector("#btn")

function imprimitMensagem(){
    console.log("Teste função imprimirMensagem")
}

secondBtn.addEventListener("click", imprimitMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", ()=>{
    console.log("Evento removido")
    secondBtn.removeEventListener("click",imprimitMensagem)
})

const addEventOnSecondBtn = function(){
    secondBtn.addEventListener("click",imprimitMensagem)
    console.log("Evento adicionado")
}

const fourthBtn = document.querySelector("#addEvent-btn")
fourthBtn.addEventListener("click",addEventOnSecondBtn)

// 3 - Argumento do evento (e - event)

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click",(event)=>{
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// 4 - Propagação

const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click",()=>{
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Evento 2")
})