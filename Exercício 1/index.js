let numeros = [];
let somaPares = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = parseFloat(prompt("Insira um número:"));

    if (isNaN(numeros[i])) {
        i--
        alert("Erro: Número inválido");
    } else {
        if ((numeros[i] % 2) == 0) {
            somaPares = somaPares + numeros[i]
        }
    }
}

alert("A soma dos números pares é " + somaPares);
