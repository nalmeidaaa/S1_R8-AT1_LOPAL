let numeros = [];
let numero = 0;
let vezes = 0; //(Vezes em que o numero aparece no vetor numeros)

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("Digite dez números para armazenar num vetor: ("+(i+1)+" de 10)"))
    if(isNaN(numeros[i])){
        alert("Erro: Número inválido");
        i--
    }

}

numero = parseInt(prompt("Digite um número para verificar quantas vezes ele aparece no vetor;"))

for (let i = 0; i < 10; i++) {
    if (numeros[i] == numero){
        vezes++
    }
}

alert("O número "+numero+" aparece "+vezes+" vezes no vetor.")