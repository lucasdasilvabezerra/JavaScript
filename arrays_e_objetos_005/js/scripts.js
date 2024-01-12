/* const lista = [1,2,3,4,5]

console.log(lista)

const itens = ["Lucas",3.4,lista]
console.log(itens)

//2 mais sobre arrays
const arr = ["a","b","c","d","e","f","g"]
console.log(arr)
console.log(arr[5])
console.log(arr[2])
console.log(arr[12 ])

//3 Propriedade

const number = [5,9,3]

console.log(number.length)

const myName = "Lucas da Silva Bezerra"
console.log(myName.length)

//4 Métodos

const otherNumbers = [1,2,3]

const allNumbers = number.concat(otherNumbers)
console.log(allNumbers)
const txt = "aBeLHa"
console.log(txt.toUpperCase())
console.log(txt.indexOf("L "))

//5 objetos

const person = {
    name: "Lucas",
    age: 22,
    job: "Programador",
}
console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person) */

//6 criando e deletando propriedades

/* const car = {
    engine: 2.2,
    brand: "VW",
    model: "Tiguan",
    km: 20000
};

console.log(car) 

car.door = 4;
console.log(car)

delete car.km;
console.log(car)

//7 mais sobre obj


const obj = {
    a: "teste",
    b: true
};

console.log(obj instanceof Object)

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);
console.log(obj2);

//Conhecendo  melhor os objts

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))


 // 9 Mutação
 const a ={
    name:"Lucas"
 }

 const b = a;
 console.log(a)
 console.log(b)

 console.log(a === b)

 a.age = 16

 console.log(a)
 console.log(b)

 delete b.age;

 console.log(a)
 console.log(b)


 // 10 Loops em arrays

 const users = ["Lucas","Gabriel","Matheus","Ana"]

 for(i = 0; i <users.length;i++){
    console.log(`User ${i}: ${users[i]}`);
 }

 //11 Push and Pop

 const array = ["a","b","c"]

 console.log(array)
 array.push("d")
 console.log(array)

 array.pop();
 console.log(array)

 const removedFromArray = array.pop();

 console.log(removedFromArray)
 console.log(array)

 array.push("h","j","k")
 console.log(array)

 const removedShift = array.shift();

 console.log(array)
 console.log(removedShift)

 array.unshift("a","p")

 console.log(array)

 //12 indexOf e lastIndexOf



 const myElements = ["Morando","Pera","Abacate","Laranja","Abacate"]
 console.log(myElements.indexOf("Pera"))
 console.log(myElements.indexOf("Abacate"))
 console.log(myElements.lastIndexOf("Abacate"))

 console.log(myElements[2])
 console.log(myElements[4])

 //13 slice

 const testSlice = ["a","k","b","b","s","g","z"]
 const slicedArray = testSlice.slice(1,5)


 console.log(testSlice)
 console.log(slicedArray)


 // 14 foreach


 const nums = [1,2,3,4,9,7]

 nums.forEach((i) =>{
    console.log(`O número é ${i}`)
 })

 const posts = [
    {title: "Primeiro post", category:"PHP"},
    {title: "Segundo post", category:"JavaScript"},
    {title: "Terceiro post", category:"Python"},
 ];

 posts.forEach((post) => {
    console.log(`Exibindo post ${post.title} da categoria ${post.category}`)
 })


 // 15 includes

 const brands = ["BMW","FIAT","VW"]

 console.log(brands.includes("BMW"))
 console.log(brands.includes("FERRARI"))
 console.log(brands.includes("VW"))

 //16 reverse

  brands.reverse();
  console.log(brands) */

  //17 trim
/* 
  const trimTest = "   testando  \n"

  console.log(trimTest)
  console.log(trimTest.trim())

  //18 padStart

  const testPadStart = "1"

  const newNumber = testPadStart.padStart(4,"0")
  console.log(newNumber)


  const testPadEnd = newNumber.padEnd(10,"0")
  console.log(testPadEnd)

  // 19 Split

  const frase = "Três pratos trigo para três tigres tristes."

  const arrayDafrase = frase.split(" ")
  console.log(arrayDafrase )

//20 Join

fraseJoin = arrayDafrase.join(" ")
console.log(fraseJoin)

// 21 Repeat


const palavra = "test "
console.log(palavra.repeat(5))

//22 Rest operator

const somaInifinita = (...args)=>{

    let total = 0
    for(i=0; i < args.length;i++){
        total = total + args[i];
    }
    return total;
}

console.log(somaInifinita(1,2,3,50,15,300))

//23 for of

const somaInfinita2 = (...args) =>{
    let total = 0;
    for(num of args){
        total+=num;
    }
    return total;
}

console.log(somaInfinita2(40,98,65,154,35,45,3,1)) */


//24 Destructuring em objs

const userDetails = {
    firstName:"Lucas",
    lastName:"Bezerra",
    job:"Programador"
}

const {firstName,lastName,job} = userDetails;
console.log(firstName,lastName,job)

//renomear variaveis

const {firstName: primeiroNome} = userDetails;

console.log(firstName)
console.log(primeiroNome)

//26 - destructuring arrays

const myList =  ["Avião","Carro","Bike","Tartaruga","Patinete"]

const [veiculoA,veiculoB,veiculoC] = myList;

console.log(veiculoA,veiculoB,veiculoC)

//27 JSON

const myJson = '{"name": "Matheus","age":31,"skills": ["PHP", "JavaScript", "Pyhon"]}'

console.log(myJson)
console.log(typeof myJson)

//28 JSON <> OBJ

const myObject = JSON.parse(myJson)

console.log(myObject)
console.log(typeof myObject)