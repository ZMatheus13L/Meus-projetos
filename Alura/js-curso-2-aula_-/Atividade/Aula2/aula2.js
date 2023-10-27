function constante(nome) {
    console.log('Olá, mundo!');
    console.log(`Olá, ${nome}!`);
}

constante("Marco");

function numero(numero) {
    console.log(numero * numero);
}

numero(5);

function numero3(numero3, numero2, numero1) {
    return (numero3 + numero2 + numero1) / 3;
}

let media = numero3(10, 10, 10);
console.log(media);

function numeroMaior(a, b) {
    return a > b ? a : b;
}

let mior = numeroMaior(3 , 2);
console.log(mior);

function number(nu) {
    return nu * nu;
}

let nu = number(6);
console.log(nu);
