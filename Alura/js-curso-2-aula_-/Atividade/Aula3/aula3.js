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

function salao(alto, largura) {
    let area = alto * largura;
    let perimetro = alto + alto + largura + largura;
    console.log(`${area}m`);
    return area && perimetro;
}

console.log(`${salao(10, 20)}m`);

function redondo(raio) {
    let area = 3.14 * raio * raio;
    let perimetro = 2 * 3.14 * raio;
    console.log(`${area}m`);
    return area && perimetro;
}

console.log(`${redondo(1)}m`);

function tabuada(num) {
    for(let nu = 0; nu <= 10; nu++) {
       let resultado = nu * num;
       console.log(resultado);
    }
}

console.log(tabuada(2));
