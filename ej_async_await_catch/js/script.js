//Funció asíncrona que afaga un número per paràmetre i retorna si es divisible per 2
async function divisibleDos(numero) {
    if (numero % 2 == 0) return `${numero} és divisible per 2`;
    else return `${numero} no és divisible per 2`;
}

console.log(divisibleDos(2))
console.log(divisibleDos(3))

// Funció asíncrona que agafa un número per paràmetre
// i retorna una Promise dient si el número està entre 0 i 10
async function majorMenorIgual(valor) {
    return new Promise((resolve, reject) => {
        if (valor >=0 && valor <=10) resolve(`${valor} està entre 0 i 10`); 
        else reject(`${valor} no està entre 0 i 10`);
    })
}

majorMenorIgual(5)
    .then(response => console.log(response))
    .catch(error => console.log(error));

majorMenorIgual(15)
    .then(response => console.log(response))
    .catch(error => console.log(error));


// Funció asíncrona que rep una lletra per paràmetre i retorna
// una Promise dient si es vocal
async function esVocal(lletra) {
    return new Promise((resolve, reject) => {
        let arr = ["a", "e", "i", "o", "u"]
        arr.forEach(l => {
            if (l == lletra) resolve(`${lletra} està dins del array`)
        });
        reject(`${lletra} no està dins del array`);
    })
}

esVocal("a")
    .then(response => console.log(response))
    .catch(error => console.log(error));

esVocal("b")
    .then(response => console.log(response))
    .catch(error => console.log(error));


// Funció asíncrona que retorna una Promise amb el resultat de la divisió
async function divisio(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 == 0) reject("No es pot dividir entre 0");
        resolve(num1/num2);
    })
}

divisio(4, 2)
    .then(response => console.log(response))
    .catch(error => console.log(error));