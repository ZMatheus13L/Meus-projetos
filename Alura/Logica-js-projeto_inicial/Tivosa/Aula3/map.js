let numero = 0;

while (numero < 10) {
    numero += 1;
    console.log(numero);
}

let oremun = 11;

while (oremun > 0) {
    oremun -= 1;
    console.log(oremun);
}

let faleUmNumero = prompt('Fale um número maior que 0.');

while (faleUmNumero > 0) {
    faleUmNumero -= 1;
    console.log(faleUmNumero);
}

let numero2 = -1;
let faleOutroNumero = prompt('Fale outro número maior que 0 aí.');

while (numero2 < faleOutroNumero) {
    numero2++;
    console.log(numero2);
}
