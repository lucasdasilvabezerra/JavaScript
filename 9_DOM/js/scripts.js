// 1 - Movendo-se pelo DOM

// console.log(document.body.childNodes);

// console.log(document.body.childNodes[1]);

// console.log(document.body.childNodes[1].childNodes);

// console.log(document.body.childNodes[1].childNodes[1].textContent); 

// 2 - Selecionando por tag

// const listItens = document.getElementsByTagName("li");

// console.log(listItens);

// 3 - Selecionando elemento por ID
// const title = document.getElementById("title");
// console.log(title);

// 4 - Selecionando elementos por Classe
// const listProducts = document.getElementsByClassName("product");
// console.log(listProducts)

// 5 - Selecionando elementos por Seletor CSS

// const productsQuery = document.querySelectorAll(".product");
// console.log(productsQuery)

// const mainContainer = document.querySelector("#main-container");
// console.log(mainContainer)

// 6 inserBefore

// const p = document.createElement("p");

// const header = title.parentElement;

// title.parentElement.insertBefore(p, title);

// 7 - appendChild


// const navLinks = document.querySelector("nav ul");

// const li = document.createElement("li");

// navLinks.appendChild(li);

// 8 - replaceChild

// const h2 = document.createElement("h2")
// h2.textContent = "Meu novo título!"

// title.parentElement.replaceChild(h2, title);

// 9 - createTextNode

// const myText = document.createTextNode("Agora vamos colocar mais um título")

// const h3 = document.createElement("h3")

// h3.appendChild(myText)

// mainContainer.appendChild(h3)

// 10 - Ler a alterar atributos get/set

// const firstLink = navLinks.querySelector("a")
// console.log(firstLink)
// firstLink.setAttribute("href","https:google.com")
// firstLink.setAttribute("target","_blank")
// console.log(firstLink.getAttribute("href"))

// 11 - Altura e largura
// const footer = document.querySelector("footer")

// console.log(footer.offsetHeight)
// console.log(footer.offsetWidth)

// console.log(footer.clientHeight)
// console.log(footer.clientWidth)

// 12 - Posição do Elemento

// const product1 = listProducts[0]
// console.log(product1.getBoundingClientRect())

// 13 - CSS com JS

// mainContainer.style.color = "red";
// mainContainer.style.backgroundColor = "black";
// mainContainer.style.paddingBottom = "15px";

// 14 - Alterando estilos de varios elementos

// for(const li of listItens){
//     li.style.backgroundColor = "red";
//     li.style.listStyleType = "none"
// }