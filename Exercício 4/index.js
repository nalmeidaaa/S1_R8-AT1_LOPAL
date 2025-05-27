// Peça ao usuário para digitar 10 números e armazene em um vetor. 
// Depois, crie um novo vetor removendo os valores duplicados. Exiba o vetor original e o vetor sem duplicatas.

let numeros = [];
let semValorDuplicado = [];
let comValorDuplicado = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt(`Digite o ${i + 1}ª número:`))
    if(isNaN(numeros[i])){
        alert(`Seu número é Inválido.`);
        i = i-1;
    }
}

let k = []

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++){
        if(numeros[i] == numeros[j]&& ){
            comValorDuplicado[j] = numeros[i]
        }else{
            semValorDuplicado[j] = numeros[i]
        }
    }
}

alert(comValorDuplicado)
alert(semValorDuplicado)

console.log(k)

console.log("Com valor duplicado:")

console.log(numeros)