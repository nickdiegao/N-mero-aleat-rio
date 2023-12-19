// let numeroAleatorio = parseInt(Math.random() * 100)
// let boxNumero = document.querySelector('.box')

// function gerarNumeroAleatorio() {
//     boxNumero.innerHTML = `${numeroAleatorio}`
// }

// gerarNumeroAleatorio()
let menorValor = 10
let maiorValor = 1000

let numeroAleatorio = gerarNumeroAleatorio()
let elementoMenorValor = document.querySelector('#menor-valor')
let elementoMaiorValor = document.querySelector('#maior-valor')

elementoMaiorValor.innerHTML = maiorValor
elementoMenorValor.innerHTML = menorValor

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor+1)
}