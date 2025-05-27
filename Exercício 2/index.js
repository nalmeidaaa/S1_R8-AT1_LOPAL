let numeros = []
let somaNumeros = 0

for (let i = 0; i < 8; i++) {

    numeros[i] = parseFloat(prompt("Digite um número real:"))

    if(isNaN(numeros[i])){
        alert("Erro: Número inválido")
        i--
    }else{
    somaNumeros = somaNumeros + numeros[i]
    }

}

let media = somaNumeros / 8

alert("O valor da média dos números é de " + media);

let acimaMedia = []
let j = 0

for (let i = 0; i < 8; i++) {

    if (numeros[i] > media) {
        acimaMedia[j] = numeros[i]
        j++
    }

}

if (j == 0) {
    alert("Nenhum número está acima da média.")
} else {
    alert("Os números acima da média são: " + acimaMedia)
}