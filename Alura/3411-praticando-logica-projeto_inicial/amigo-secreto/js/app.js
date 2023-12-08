let nomes = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let sorteio = document.getElementById('lista-sorteio');
let num = 0;
let amigos = [];

function adicionar() {
    if(amigos.indexOf(nomes.value) == -1 && !nomes.value == '') {
        lista.innerHTML += ` ${nomes.value}`;
        num += 1;
        amigos.push(nomes.value);
        nomes.value = '';
    } else {
        alert('tá errado, arruma essa porra!');
    }
}

function sortear() {
    embaralha(amigos);
    let valor = 0;
    if(num >= 3) {
    while(valor < num) {
            if(valor == amigos.length -1) {
            sorteio.innerHTML += `${amigos[valor]} X ${amigos[0]} <br>`;
            } else {
            sorteio.innerHTML += `${amigos[valor]} X ${amigos[valor + 1]} <br>`;
            }
        valor++;
    }
} else {
    alert('eroou, arrume esse diacho!');
}
}

function reiniciar() {
    sorteio.innerHTML = '';
    lista.innerHTML = '';
    amigos = [];
    num = 0;
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
