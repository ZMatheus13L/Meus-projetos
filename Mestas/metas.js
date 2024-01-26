let passado = document.getElementById('passado');
let presente = document.getElementById('presente');
let futuro = document.getElementById('futuro');
let final = document.getElementById('final');
let objetivo = document.getElementById('criando');
let data = document.getElementById('data');
let data2 = document.getElementById('data2');
let data3 = document.getElementById('data3');
let janeiro = document.getElementById('janeiro1');
let fevereiro = document.getElementById('fevereiro1');
let marco = document.getElementById('marco1');
let abril = document.getElementById('abril1');
let maio = document.getElementById('maio1');
let junho = document.getElementById('junho1');
let julho = document.getElementById('julho1');
let agosto = document.getElementById('agosto1');
let setembro = document.getElementById('setembro1');
let outubro = document.getElementById('outubro1');
let novembro = document.getElementById('novembro1');
let dezembro = document.getElementById('dezembro1');
let numero = 1;

function comecar() {
    passado.style.display = "block";
}

function comofoi() {
    presente.style.display = "none";
    futuro.style.display = "none";
}

function comoesta() {
    presente.style.display = "block";
}

function comoesta2() {
    futuro.style.display = "none";
}

function objetivos() {
    futuro.style.display = "block";
}

function mes1() {
    janeiro.style.display = "block";
}

function mes2() {
    fevereiro.style.display = "block";
}

function mes3() {
    marco.style.display = "block";
}

function mes4() {
    abril.style.display = "block";
}

function mes5() {
    maio.style.display = "block";
}

function mes6() {
    junho.style.display = "block";
}

function mes7() {
    julho.style.display = "block";
}

function mes8() {
    agosto.style.display = "block";
}

function mes9() {
    setembro.style.display = "block";
}

function mes10() {
    outubro.style.display = "block";
}

function mes11() {
    novembro.style.display = "block";
}

function mes12() {
    dezembro.style.display = "block";
}

function proximo() {
    presente.style.display = "block";
}

function proximo2() {
    futuro.style.display = "block";
}

function proximo3() {
    final.style.display = "block";
}

function criando() {
    objetivo.innerHTML += `<p>${numero}.</p> <input type="text">`;
    numero += 1;
}

data.innerHTML = new Date();
data2.innerHTML = new Date();
data3.innerHTML = new Date();
