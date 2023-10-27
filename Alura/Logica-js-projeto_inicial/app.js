alert('Boas vindas ao jogo do número secreto');

let valorDoNumeroSecreto = 10000;
let numeroSecreto = parseInt(Math.random() * valorDoNumeroSecreto + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao n.10.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${valorDoNumeroSecreto}`);
    // Se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // Tentativas = tentativas + 1
        tentativas ++;
    }


}

let palavraTentativa = tentativas > 1 ? 'vezes' : 'vez';
alert(`acertou mizeravi ${numeroSecreto} e tento ${tentativas} ${palavraTentativa}.`);

/*if (tentativas > 1) {
    alert(`acertou mizeravi ${numeroSecreto} e tento ${tentativas} vezes.`);
} else {
    alert(`acertou mizeravi ${numeroSecreto} e tento ${tentativas} vez.`)
} */
