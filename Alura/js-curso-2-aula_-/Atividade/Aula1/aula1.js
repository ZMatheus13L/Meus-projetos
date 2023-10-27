var titulo = document.querySelector("h1#titulo");
titulo.innerHTML = 'Hora do desafio';

function clique() {
    console.log("O botão foi clicado");
}

function alerta() {
    alert('Eu amo JS');
}

function incitar() {
    let cidade = prompt('Me fale o nome de uma cidade do Brasil.');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma() {
    let soma1 = prompt('Me fale um número.');
    let soma2 = prompt('Me fale outro número.');
    let soma3 = Number(soma1) + Number(soma2);
    alert(`${soma1} + ${soma2} é igual a ${soma3}`);
}