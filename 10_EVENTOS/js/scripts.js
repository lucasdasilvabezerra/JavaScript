// 1 - adicionando eventos

const btn = document.querySelector("#my-button")
let contadorDeClicks = 0
btn.addEventListener("click", function () {
    contadorDeClicks = contadorDeClicks + 1
    console.log(`Clicou aqui ${contadorDeClicks} vezes`)

})

// 2 - Removendo eventos

const secondBtn = document.querySelector("#btn")

function imprimitMensagem() {
    console.log("Teste função imprimirMensagem")
}

secondBtn.addEventListener("click", imprimitMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimitMensagem)
})

const addEventOnSecondBtn = function () {
    secondBtn.addEventListener("click", imprimitMensagem)
    console.log("Evento adicionado")
}

const fourthBtn = document.querySelector("#addEvent-btn")
fourthBtn.addEventListener("click", addEventOnSecondBtn)

// 3 - Argumento do evento (e - event)

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// 4 - Propagação

const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})

// 5 - Removendo evento padrão

const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("N me redirecionou")
})

// 6 - Eventos de tecla

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

// 7 - Evento de mouse

const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou click")
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou click")
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Duplo click")
})

// 8 - Movimento de mouse

document.addEventListener("mousemove", (e) => {
  //   console.log(`X:${e.x} Y:${e.y}`)

})

// 9 - Evento de Scroll

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200) {
       // console.log("Passamos de 200px")
    }
})

// 10 - Evento de focus/blur

const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
})

// 11 - Evento de carregamento de página

window.addEventListener("load", () => {
    console.log("A pagina carregou!")
})

window.addEventListener("beforeunload", (e) => {
    //e.preventDefault();
    e.returnValue = "Teste";
})
// 12 - Debounce

const debounce = (f, delay) => {
    let timeout

    return (...arguments) =>{
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms")
}, 400)
);