// DOM 
const resultEl = document.getElementById('result');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');
// object for random generated characters
const randomFunc = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    symbol: randomSymbols
};
// initializing
let displayPwd;
let useLower;
let useUpper;
let useNumbers;
let useSymbols;
let length;
// user input and validation
function validate() {
    length = parseInt(prompt('Enter the length of your password. Must be a number between 8 and 128.'));
    if(length > 7 && length < 129) {
        useLower = confirm('Would you like to use lowercase letters in the password?');
        useUpper = confirm('Would you like to use uppercase letters in the password?');
        useNumbers = confirm('Would you like to use numbers in the password?');
        useSymbols = confirm('Would you like to use symbols in the password?');
    } else if (isNaN(length)) {
        alert('Not a number. Please enter a number between 8 and 128.');
        validate();
    } else {
        alert('Not a valid number. Please enter a number between 8 and 128.');
        validate();
    }
}
// generate btn event
generateEl.addEventListener('click', () => {
    //call functions
    validate();
    generatePassword(
        useLower, 
        useUpper, 
        useNumbers, 
        useSymbols, 
        length
    );
});
//clipboard btn event
clipboard.addEventListener('click', () => {
    if(resultEl.value === '') {
        return;
    } else {
        resultEl.select();
        document.execCommand("copy");
        alert('Password copied to clipboard.');
    }          
});
//THE MAGIC!!
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    let typesCount = lower || upper || number || symbol;
    let typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );
    if(!typesCount) {
        return '';
    }
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            let funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    let passwordSplit = generatedPassword.split('', length);
    displayPwd = passwordSplit.sort( () => {return 0.5 - Math.random()});    
    update();
}
function update() {    
    resultEl.value = displayPwd.join('');
}
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