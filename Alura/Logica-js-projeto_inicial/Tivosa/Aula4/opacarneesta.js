var nome = 'ZMatheus13l';
var linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
var valor1 = 10;
var valor2 = 1;
var resultado = valor1 + valor2;
var resutado = valor1 - valor2;
var idade = prompt('Qual é a sua idade?');
var numero = prompt('Fale um número.');
var number = 0;
var nota = 10;
var numeroAletorio = 10;
var numeroAletorio2 = parseInt(Math.random() * numeroAletorio + 1);
var numeroAletorio3 = 1000;
var numeroAletorio4 = parseInt(Math.random() * numeroAletorio3 + 1);

if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

while (number < 10) {
    number++;
    console.log(number);
}

if (numero >= 0) {
    alert('É positivo!');
} else {
    alert('É negativo!');
}

if (idade >= 18) {
    console.log('Eae de maior!');
} else {
    console.log('Eae menó!');
}

console.log('boas-vindas');
console.log('Olá, ' + nome);
console.log(linguagem);
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resutado}.`);
console.log(numeroAletorio2);
console.log(numeroAletorio4);

alert(`Olá, ${nome}`);
