// DOM 
const resultEl = document.getElementById('result');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');
// random lowercase letter
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// random uppercase letter
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// random number
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// random symbol
function randomSymbols() {
    let symbols = '!"#$%&()*+,-./:;<=>?@[]^_{|}~';
    return symbols[Math.floor(Math.random() * symbols.length)];
}