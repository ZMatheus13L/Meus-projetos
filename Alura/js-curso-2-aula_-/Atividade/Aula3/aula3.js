function massaCorporal(peso, altura) {
    let alturaMetro = altura / 100; // convertendo cm para metros
    let imc = peso / (alturaMetro * alturaMetro);
    return imc;
}

let massa = massaCorporal(80, 190);
console.log(massa);

function fatorial(numero) {
    let resut = 1
    for (let number = 2; number <= numero; number++) {
        resut *= number;
    }
    return resut;
}

let fatora = fatorial(8);
console.log(fatora);

function valorDolar(valor) {
    let reais = valor * 4.80;
    return reais;
}

console.log(`R$ ${valorDolar(2)}`);
