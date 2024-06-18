// 1- Variáveis
let nome = "Gustavo";

console.log(nome);

nome = "Gustavo Felipe"

console.log(nome);

const idade = 19;

console.log(idade);

// idade = 20; <-- erro de programação!

console.log(typeof nome);

console.log(typeof idade);

// 2- Mais sobre variáveis
// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
 b = 20, 
 c = 30

console.log(a, b, c);

const nomecompleto = "Gustavo Felipe"

const nomeCompleto = "Gustavo Freitas"

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok"

let $teste = "ok"

console.log(_teste, $teste);

// 3- Propt (funções)
// const age = prompt("Digite a sua idade: ")

// console.log(`Você tem ${age} anos.`);

// 4- Alert
// alert("Testando");

// const z = 10

// alert(`O número é ${z}`);

// 5- Math.x
console.log(Math.max(5, 2, 1, 10)); /* extrai o maior numero declarado */

console.log(Math.floor(5.14)); /* arredonda um numero pra baixo */

console.log(Math.ceil(5.14)); /* arredonda um numero pra cima */

// 6- Console.x
console.log("teste!");

console.error("erro!");

console.warn("aviso!");

// 7- if
const m = 10;

if(m > 5) {
    console.log("M é maior que 5!");
}

const user = "João"

if(user === "João") {
    console.log("Olá João!");
}

if(user === "Maria") {
    console.log("Olá Maria!");
}

console.log(user === "João", user === "Maria");

// 8- else
const loggedIn = false

if(loggedIn) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!");
}


const q = 10
const w = 15

if(q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 9- else if
if(1 > 2) {
    console.log("Teste");
} else if(2 > 3) {
    console.log("Teste 2");
} else if(5 > 1) {
    console.log("Agora sim!");
}

const userName = "Gustavo"
const userAge = 19

if(userName === "José" && userAge === 31) {
    console.log("Bem vindo José!");
} else if(userName === "Gustavo" && userAge === 19) {
    console.log("Olá Gustavo, você tem 19 anos!");
} else {
    console.log("Nenhuma condição aceita");
}

